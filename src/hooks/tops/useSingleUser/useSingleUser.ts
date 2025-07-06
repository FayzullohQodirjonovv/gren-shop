// src/hooks/queries/useSingleUser.ts

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { SessionUser } from "../../../@types";

export const useSingleUser = (id: string) => {
  return useQuery<SessionUser>({
    queryKey: ["single-user", id],
    queryFn: async () => {
      if (!id) throw new Error("User ID is required");

      const res = await axios.get(
        `https://beckend-n14-soqt.vercel.app/api/user/by_id/${id}`,
        {
          params: {
            access_token: "64bebc1e2c6d3f056a8c85b7", 
          },
        }
      );

      if (!res.data?.data) {
        console.warn("User data is undefined:", res.data);
        throw new Error("User not found");
      }

      return res.data.data;
    },
    enabled: !!id,
    staleTime: 1000 * 60 * 5, 
  });
};