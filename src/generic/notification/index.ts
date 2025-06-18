import { notification } from "antd";

type NotifyType =
  | "login_success"
  | "login_wrong"
  | "wrong_confirm_password"
  | 406;

export const notificationApi = () => {
  const notify = (type: NotifyType) => {
    switch (type) {
      case "login_success":
        return notification.success({ message: "You are logged in 👍" });
      case "login_wrong":
        return notification.error({ message: "Password or login wrong" });
      case "wrong_confirm_password":
        return notification.error({ message: "Error confirm password" });
      case 406:
        return notification.error({ message: "Email already exist" });
      default:
        return notification.error({ message: "An unknown error occurred" });
    }
  };
  return notify;
};
