import { LuSwords } from "react-icons/lu";

function Skeleton({ isFetching, error }) {
  return (
    <ul className="list bg-base-100 rounded-box shadow-md">
      <li className="inline-flex items-center gap-1 p-4 pb-2 opacity-60 tracking-wide h-12">
        <span>行侠事件</span>
        {isFetching && (
          <span className="loading loading-spinner loading-xs"></span>
        )}
        {error && (
          <div className="badge badge-soft badge-error">{error.message}</div>
        )}
      </li>
      <li>
        <ul className="timeline timeline-vertical py-4">
          <li>
            <div className="timeline-start w-48 skeleton h-8"></div>
            <div className="timeline-middle">
              <LuSwords />
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <LuSwords />
            </div>
            <div className="timeline-end w-48 skeleton h-8"></div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start w-48 skeleton h-8"></div>
            <div className="timeline-middle">
              <LuSwords />
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <LuSwords />
            </div>
            <div className="timeline-end w-48 skeleton h-8"></div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start w-48 skeleton h-8"></div>
            <div className="timeline-middle">
              <LuSwords />
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <LuSwords />
            </div>
            <div className="timeline-end  w-48 skeleton h-8"></div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start  w-48 skeleton h-8"></div>
            <div className="timeline-middle">
              <LuSwords />
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <LuSwords />
            </div>
            <div className="timeline-end  w-48 skeleton h-8"></div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start w-48 skeleton h-8"></div>
            <div className="timeline-middle">
              <LuSwords />
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <LuSwords />
            </div>
            <div className="timeline-end  w-48 skeleton h-8"></div>
          </li>
        </ul>
      </li>
    </ul>
  );
}

export default function ActiveCelebs({ isPending, error, data, isFetching }) {
  if (isPending) return <Skeleton isFetching={isFetching} error={error} />;

  if (error) return <Skeleton isFetching={isFetching} error={error} />;

  return (
    <ul className="list bg-base-100 rounded-box shadow-md h-full">
      <li className="flex items-center gap-1 p-4 pb-2 opacity-60 tracking-wide h-12">
        <div>行侠事件</div>
        {isFetching && (
          <div className="loading loading-spinner loading-xs"></div>
        )}
      </li>
      <li>
        <ul className="timeline timeline-vertical py-4">
          {data.map((item, index) => {
            const label = `[${item.time}] ${item.map} ${item.site} ${item.stage}`;
            const isFirst = index === 0;
            const isLast = index === data.length - 1;
            const isEven = index % 2 === 0;
            return (
              <li key={item.time}>
                {!isFirst && <hr />}
                {isEven && (
                  <div className="timeline-start timeline-box max-w-64 h-8">
                    {label}
                  </div>
                )}
                <div className="timeline-middle">
                  <LuSwords />
                </div>
                {!isEven && (
                  <div className="timeline-end timeline-box max-w-64 h-8">
                    {label}
                  </div>
                )}
                {!isLast && <hr />}
              </li>
            );
          })}
        </ul>
      </li>
    </ul>
  );
}
