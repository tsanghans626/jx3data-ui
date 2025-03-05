import { useQuery } from "@tanstack/react-query";
import { request } from "../lib/jx3api/request";
import { ACTIVE_LIST_CALENDAR_URL } from "./urls";

export function useActiveListCalendar({ num }) {
  return useQuery({
    queryKey: [ACTIVE_LIST_CALENDAR_URL, { num }],
    queryFn: async () => {
      return await request(ACTIVE_LIST_CALENDAR_URL, { num });
    },
  });
}
