import { useMutation } from "@tanstack/react-query";
import { useAxios } from "../../useaxios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import type { AuthType } from "../../../@types";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../redux/modalslice";
import { notificationApi } from "../../../generic/notification";
export const useLoginMutation = () => {
  const axios = useAxios();
const dispatch = useDispatch()
  return useMutation({
    mutationKey: ["login"],
    mutationFn: (data: { email: string; password: string }) =>
      axios({
        url: "user/sign-in",
        method: "POST",
        body: data,
      }),
onSuccess: (data: { token: string; user: AuthType }) => {
  console.log("✅ Login muvaffaqiyatli:", data); 
  Cookies.set("token", data.token);
  Cookies.set("user", JSON.stringify(data.user));
  dispatch(closeModal()); 
},

onError: (err: any) => {
  console.log("❌ To‘liq xato:", err.response);
  const errorMessage = err.response?.data?.message || err.message || "Noma'lum xato";
  toast.error(`❌ Kirishda xatolik: ${errorMessage}`);
},

  });
};
export const useRegisterMutation = () => {
  const axios = useAxios();
  const dispatch = useDispatch();
  const notify = notificationApi();

  return useMutation({
    mutationKey: ["register"],
    mutationFn: (data: object) =>
      axios({ url: "user/sign-up", method: "POST", body: data }),

    onSuccess: (data: { token: string; user: AuthType }) => {
      Cookies.set("token", data.token);
      Cookies.set("user", JSON.stringify(data.user));
      notify("login_success");
      dispatch(closeModal());
    },

    onError: (error: { status: number }) => {
      if (error.status === 406) {
        notify(error.status);
      }
    },
  });
};

