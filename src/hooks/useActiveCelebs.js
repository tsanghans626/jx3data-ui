import { request } from "../lib/jx3api/request";
import { useQuery } from "@tanstack/react-query";
import { ACTIVE_CELEBS_URL } from "./urls";

export default function useActiveCelebs({ name }) {
  return useQuery({
    queryKey: [ACTIVE_CELEBS_URL, { name }],
    queryFn: async () => {
      return await request({
        endpoint: ACTIVE_CELEBS_URL,
        data: { name },
      });
    },
  });
}
