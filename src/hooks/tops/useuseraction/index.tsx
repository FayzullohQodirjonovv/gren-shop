
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios   from "axios";
import type { AxiosResponse } from "axios"
interface FollowParams {
  id: string;
}

interface User {
  _id: string;
  name: string;
  surname: string;
  profile_photo: string;
  followers: string[];
  following: string[];
}

interface FollowResponse {
  success: boolean;
  message: string;
  user: User;
}

export const useAddFollow = () => {
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse<FollowResponse>, Error, FollowParams>({
    mutationFn: ({ id }) => axios.post("/api/user/follow", { _id: id }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["single-user"] });
    },
  });
};

export const useRemoveFollow = () => {
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse<FollowResponse>, Error, FollowParams>({
    mutationFn: ({ id }) => axios.post("/api/user/unfollow", { _id: id }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["single-user"] });
    },
  });
};