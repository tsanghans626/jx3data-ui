import { useQuery } from "@tanstack/react-query";
import { request } from "../lib/jx3api/request";
import { ACTIVE_CALENDAR_URL } from "./urls";

export function useActiveCalendar({ server, num }) {
  return useQuery({
    queryKey: [ACTIVE_CALENDAR_URL, { server, num }],
    queryFn: async () => {
      return await request(ACTIVE_CALENDAR_URL, { server, num });
    },
  });
}
