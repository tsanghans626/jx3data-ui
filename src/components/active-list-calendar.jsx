import { useActiveListCalendar } from "../hooks/useActiveListCalendar";

function Skeleton({ isFetching, error }) {
  return (
    <ul className="list bg-base-100 rounded-box shadow-md">
      <li className="inline-flex items-center gap-1 p-4 pb-2 opacity-60 tracking-wide">
        <span>活动月历</span>
        {isFetching && (
          <span className="loading loading-spinner loading-xs"></span>
        )}
        {error && (
          <div className="badge badge-soft badge-error">{error.message}</div>
        )}
      </li>
    </ul>
  );
}

export default function ActiveListCalendar({ num = 15 }) {
  const { isPending, error, data, isFetching } = useActiveListCalendar({
    num,
  });

  if (isPending) return <Skeleton isFetching={isFetching} error={error} />;

  if (error) return <Skeleton isFetching={isFetching} error={error} />;

  return (
    <ul className="list bg-base-100 rounded-box shadow-md">
      <li className="inline-flex items-center gap-1 p-4 pb-2 opacity-60 tracking-wide">
        <span>活动月历</span>
        {isFetching && (
          <span className="loading loading-spinner loading-xs"></span>
        )}
      </li>
    </ul>
  );
}
