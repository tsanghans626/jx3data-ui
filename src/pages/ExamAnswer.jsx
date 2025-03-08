import { useState } from "react";
import { useExamAnswer } from "../hooks/useExamAnswer";
import ExamAnswer from "../components/exam-answer";

export default function ExamAnswerPage() {
  const initialParams = { subject: "万花", limit: 5 };

  const [params, setParams] = useState(initialParams);

  const { isPending, error, data, isFetching } = useExamAnswer(params);

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
              name="subject"
              type="text"
              className="input input-warning"
              placeholder="科举试题的题目内容"
            />
          </fieldset>
          <fieldset className="fieldset">
            <input
              name="limit"
              type="text"
              className="input input-warning"
              placeholder="限制返回的答案数量"
            />
          </fieldset>
          <button className="btn">渲染</button>
        </form>
      </div>
      <div className="flex justify-center items-center py-4 w-full">
        <div className="w-1/2">
          <ExamAnswer
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
