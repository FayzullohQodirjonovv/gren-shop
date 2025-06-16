import axios from "axios";
import Cookies from "js-cookie";

interface AxiosType {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  headers?: object;
  params?: object;
  body?: object;
}

export const useAxios = () => {
  const request = ({
    url,
    method = "GET",
    body,
    params,
    headers,
  }: AxiosType) => {
    return axios({
      url: `${import.meta.env.VITE_BASE_URL}/${url}`,
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: Cookies.get("token") ? `Bearer ${Cookies.get("token")}` : undefined,
        ...headers,
      },
      data: body,
      params: {
        access_token: "64eecf3b54abde61153d1fd3", 
        ...params,
      },
    }).then((res) => {
      console.log("✅ Javob:", res.data);
return res.data.data;
    });
  };

  return request;
};
