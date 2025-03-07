import { useState } from "react";
import { DayPicker } from "react-day-picker";

function Skeleton({ isFetching, error }) {
  return (
    <ul className="list bg-base-100 rounded-box shadow-md">
      <li className="flex items-center gap-1 p-4 pb-2 opacity-60 tracking-wide h-12">
        <div>活动月历</div>
        {isFetching && (
          <div className="loading loading-spinner loading-xs"></div>
        )}
        {error && (
          <div className="badge badge-soft badge-error">{error.message}</div>
        )}
        <div className="flex-1 flex justify-end">
          <div className="skeleton h-8 w-32"></div>
        </div>
      </li>
      <li className="list-row h-72 flex justify-center items-center animate-pulse text-xl text-warning-content">
        <div className="skeleton h-8 w-50"></div>
      </li>
    </ul>
  );
}

function formatDate(date, utc = false) {
  if (!date) {
    return "";
  }
  const get = utc ? (d, m) => d[`getUTC${m}`]() : (d, m) => d[`get${m}`]();

  const year = get(date, "FullYear");
  const month = String(get(date, "Month") + 1).padStart(2, "0");
  const day = String(get(date, "Date")).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

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

export function ActiveCalendarItem({ data }) {
  return (
    <>
      <li className="list-row items-center">
        <div className="badge badge-soft badge-primary">PVE</div>
        <div className="flex flex-col gap-2">
          <Item title={"日常秘境"} contentArr={[data.war]} isHot={true} />
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
          <Item title={"家园声望·加倍道具"} contentArr={data.card} />
        </div>
      </li>
    </>
  );
}

export default function ActiveListCalendar({
  isPending,
  error,
  data,
  isFetching,
}) {
  if (isPending) return <Skeleton isFetching={isFetching} error={error} />;

  if (error) return <Skeleton isFetching={isFetching} error={error} />;

  const [date, setDate] = useState();

  const activeDateStringArr = data.data.map((item) => item.date);
  const currentData = data.data.find((item) => item.date === formatDate(date));

  return (
    <ul className="list bg-base-100 rounded-box shadow-md h-full">
      <li className="flex items-center gap-1 p-4 pb-2 opacity-60 tracking-wide h-12">
        <div>活动月历</div>
        {isFetching && (
          <div className="loading loading-spinner loading-xs"></div>
        )}
        <div className="flex-1 flex justify-end">
          <div>
            <button
              popoverTarget="rdp-popover"
              className="input input-border input-sm w-32"
              style={{ anchorName: "--rdp" }}
            >
              {date ? formatDate(date) : "选择日期"}
            </button>
            <div
              popover="auto"
              id="rdp-popover"
              className="dropdown dropdown-right"
              style={{ positionAnchor: "--rdp" }}
            >
              <DayPicker
                className="react-day-picker"
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={(date) => {
                  const dateString = formatDate(date);
                  return !activeDateStringArr.includes(dateString);
                }}
              />
            </div>
          </div>
        </div>
      </li>
      {currentData ? (
        <ActiveCalendarItem data={currentData} />
      ) : (
        <li className="list-row h-72 flex justify-center items-center animate-pulse text-xl text-warning-content">
          请点击右上角选择日期
        </li>
      )}
    </ul>
  );
}
