import { useActiveCalendar } from "../hooks/useActiveCalendar";

function Item({ title, contentArr, isHot = false }) {
  return (
    <div className="flex">
      <div className="flex basis-32 shrink-0">
        {title}
        {isHot && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-5"
          >
            <path
              fillRule="evenodd"
              d="M13.5 4.938a7 7 0 1 1-9.006 1.737c.202-.257.59-.218.793.039.278.352.594.672.943.954.332.269.786-.049.773-.476a5.977 5.977 0 0 1 .572-2.759 6.026 6.026 0 0 1 2.486-2.665c.247-.14.55-.016.677.238A6.967 6.967 0 0 0 13.5 4.938ZM14 12a4 4 0 0 1-4 4c-1.913 0-3.52-1.398-3.91-3.182-.093-.429.44-.643.814-.413a4.043 4.043 0 0 0 1.601.564c.303.038.531-.24.51-.544a5.975 5.975 0 0 1 1.315-4.192.447.447 0 0 1 .431-.16A4.001 4.001 0 0 1 14 12Z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
      <div className="flex flex-wrap gap-1">
        {contentArr.map((content) => (
          <div
            key={content}
            className="badge badge-outline badge-neutral opacity-60"
          >
            {content}
          </div>
        ))}
      </div>
    </div>
  );
}

function Skeleton({ isFetching, error }) {
  return (
    <ul className="list bg-base-100 rounded-box shadow-md">
      <li className="inline-flex items-center gap-1 p-4 pb-2 opacity-60 tracking-wide">
        <span>活动日历</span>
        {isFetching && (
          <span className="loading loading-spinner loading-xs"></span>
        )}
        {error && (
          <div className="badge badge-soft badge-error">{error.message}</div>
        )}
      </li>
      <li className="list-row items-center">
        <div className="badge badge-soft badge-primary">PVE</div>
        <div className="flex flex-col gap-2">
          <div className="skeleton h-6 w-full"></div>
          <div className="skeleton h-6 w-full"></div>
          <div className="skeleton h-6 w-full"></div>
        </div>
      </li>
      <li className="list-row items-center ">
        <div className="badge badge-soft badge-secondary">PVP</div>
        <div className="flex flex-col gap-2">
          <div className="skeleton h-6 w-full"></div>
          <div className="skeleton h-6 w-full"></div>
        </div>
      </li>
      <li className="list-row items-center">
        <div className="badge badge-soft badge-accent">PVX</div>
        <div className="flex flex-col gap-2">
          <div className="skeleton h-6 w-full"></div>
          <div className="skeleton h-6 w-full"></div>
          <div className="skeleton h-6 w-full"></div>
          <div className="skeleton h-6 w-full"></div>
          <div className="skeleton h-6 w-full"></div>
          <div className="skeleton h-6 w-full"></div>
        </div>
      </li>
    </ul>
  );
}

export function ActiveCalendar({ server, num = 0 }) {
  const { isPending, error, data, isFetching } = useActiveCalendar({
    server,
    num,
  });

  if (isPending) return <Skeleton isFetching={isFetching} error={error} />;

  if (error) return <Skeleton isFetching={isFetching} error={error} />;

  return (
    <ul className="list bg-base-100 rounded-box shadow-md">
      <li className="inline-flex items-center gap-1 p-4 pb-2 opacity-60 tracking-wide">
        <span>活动日历</span>
        {isFetching && (
          <span className="loading loading-spinner loading-xs"></span>
        )}
      </li>
      <li className="list-row items-center">
        <div className="badge badge-soft badge-primary">PVE</div>
        <div className="flex flex-col gap-2">
          <Item title={"日常秘境"} contentArr={[data.war]} isHot={true} />
          <Item
            title={"武林通鉴·秘境任务"}
            contentArr={data.team?.[1].split(";")}
          />
          <Item
            title={"武林通鉴·团队秘境"}
            contentArr={data.team?.[2].split(";")}
          />
        </div>
      </li>
      <li className="list-row items-center">
        <div className="badge badge-soft badge-secondary">PVP</div>
        <div className="flex flex-col gap-2">
          <Item title={"战场"} contentArr={[data.battle]} isHot={true} />
          <Item title={"挖矿"} contentArr={[data.orecar]} />
        </div>
      </li>
      <li className="list-row items-center">
        <div className="badge badge-soft badge-accent">PVX</div>
        <div className="flex flex-col gap-2">
          <Item title={"福缘"} contentArr={data.luck} isHot={true} />
          <Item title={"门派事件"} contentArr={[data.school]} />
          <Item title={"驰援事件"} contentArr={[data.rescue]} />
          <Item title={"美人图"} contentArr={[data.draw]} />
          {data.leader && (
            <Item title={"世界首领"} content={data.leader} isHot={true} />
          )}
          <Item title={"家园声望·加倍道具"} contentArr={data.card} />
          <Item
            title={"武林通鉴·公共任务"}
            contentArr={data.team?.[0].split(";")}
          />
        </div>
      </li>
    </ul>
  );
}
