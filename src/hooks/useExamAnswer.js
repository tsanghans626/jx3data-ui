import { useQuery } from "@tanstack/react-query";
import { request } from "../lib/jx3api/request";
import { EXAM_ANSWER_URL } from "./urls";

export function useExamAnswer({ subject, limit }) {
  return useQuery({
    queryKey: [EXAM_ANSWER_URL, { subject, limit }],
    queryFn: async () => {
      return await request({
        endpoint: EXAM_ANSWER_URL,
        data: { subject, limit },
      });
    },
  });
}
