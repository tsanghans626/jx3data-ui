import { useState } from "react";
import useActiveCelebs from "../hooks/useActiveCelebs";
import ActiveCelebs from "../components/active-celebs";

export default function ActiveCelebsPage() {
  const initialParams = { name: "楚天社" };

  const [params, setParams] = useState(initialParams);

  const { isPending, error, data, isFetching } = useActiveCelebs(params);

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const formValues = Object.fromEntries(data.entries());

    setParams(formValues);
  }

  return (
    <div className="flex flex-col w-full">
      <div className="rounded-none bg-warning text-warning-content collapse">
        <input type="checkbox" />
        <div className="collapse-title font-semibold animate-pulse">
          点击此处填写参数后进行渲染
        </div>
        <form
          className="collapse-content text-sm flex flex-wrap items-center gap-2"
          onSubmit={handleSubmit}
        >
          <fieldset className="fieldset">
            <input
              name="name"
              type="text"
              className="input input-warning"
              placeholder='目标名称（可以选择 "楚天社" 或 \\"云从社" 以及 "披风会"）'
            />
          </fieldset>
          <button className="btn">渲染</button>
        </form>
      </div>
      <div className="flex justify-center items-center py-4 w-full">
        <div className="w-1/2">
          <ActiveCelebs
            isPending={isPending}
            error={error}
            data={data}
            isFetching={isFetching}
          />
        </div>
      </div>
    </div>
  );
}
