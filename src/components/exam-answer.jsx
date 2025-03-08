function Skeleton({ isFetching, error }) {
  return (
    <ul className="list bg-base-100 rounded-box shadow-md">
      <li className="inline-flex items-center gap-1 p-4 pb-2 opacity-60 tracking-wide h-12">
        <span>科举答题</span>
        {isFetching && (
          <span className="loading loading-spinner loading-xs"></span>
        )}
        {error && (
          <div className="badge badge-soft badge-error">{error.message}</div>
        )}
      </li>
      <li className="list-row flex flex-col gap-1">
        <div className="skeleton h-6 w-full"></div>
        <div className="skeleton h-6 w-full"></div>
      </li>
      <li className="list-row flex flex-col gap-1">
        <div className="skeleton h-6 w-full"></div>
        <div className="skeleton h-6 w-full"></div>
      </li>
      <li className="list-row flex flex-col gap-1">
        <div className="skeleton h-6 w-full"></div>
        <div className="skeleton h-6 w-full"></div>
      </li>
      <li className="list-row flex flex-col gap-1">
        <div className="skeleton h-6 w-full"></div>
        <div className="skeleton h-6 w-full"></div>
      </li>
      <li className="list-row flex flex-col gap-1">
        <div className="skeleton h-6 w-full"></div>
        <div className="skeleton h-6 w-full"></div>
      </li>
    </ul>
  );
}

export default function ExamAnswer({ isPending, error, data, isFetching }) {
  if (isPending) return <Skeleton isFetching={isFetching} error={error} />;

  if (error) return <Skeleton isFetching={isFetching} error={error} />;

  return (
    <ul className="list bg-base-100 rounded-box shadow-md h-full">
      <li className="flex items-center gap-1 p-4 pb-2 opacity-60 tracking-wide h-12">
        <div>科举答题</div>
        {isFetching && (
          <div className="loading loading-spinner loading-xs"></div>
        )}
      </li>
      {data.map((item) => {
        return (
          <li className="list-row flex flex-col gap-1">
            <div className="min-h-6">{item.question}</div>
            <div className="opacity-60 min-h-6">答：{item.answer}</div>
          </li>
        );
      })}
    </ul>
  );
}
