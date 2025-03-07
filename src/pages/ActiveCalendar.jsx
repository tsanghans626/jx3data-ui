import { useRef, useState } from "react";
import { ActiveCalendar } from "../components/active-calendar";
import { useActiveCalendar } from "../hooks/useActiveCalendar";

export default function ActiveCalendarPage() {
  const initialParams = { server: "", num: 0, token: null, ticket: null };

  const [params, setParams] = useState(initialParams);

  const { isPending, error, data, isFetching } = useActiveCalendar(params);

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
              name="server"
              type="text"
              className="input input-warning"
              placeholder="服务器（可选）"
            />
          </fieldset>
          <fieldset className="fieldset">
            <input
              name="num"
              type="number"
              className="input input-warning"
              placeholder="日期偏移值"
            />
          </fieldset>
          <button className="btn">渲染</button>
        </form>
      </div>
      <div className="flex justify-center items-center py-4 w-full">
        <div className="w-1/2">
          <ActiveCalendar
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
