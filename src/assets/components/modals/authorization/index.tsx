import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../../redux/modalslice";
import Login from "../authorization/login";
import Register from "../authorization/register";
import { useState } from "react";
import type { RootState, AppDispatch } from "../../../../redux/store";

const AuthorizationModal = () => {
  const { openAuthorizationModalVisiblty } = useSelector(
    (state: RootState) => state.modalSlice
  );
  const dispatch = useDispatch<AppDispatch>();
  const [editpage, seteditpage] = useState<"login" | "register">("login");

  return (
    <Modal
      open={openAuthorizationModalVisiblty}
      footer={false}
      onCancel={() => dispatch(closeModal())}
    >
      <div className="p-5 mt-5">
        <div className="flex items-center justify-center gap-5">
          <h3
            onClick={() => seteditpage("login")}
            className={`cursor-pointer font-bold text-[18px] ${
              editpage === "login" && "text-green-300"
            }`}
          >
            Login
          </h3>
          <h3>|</h3>
          <h3
            onClick={() => seteditpage("register")}
            className={`cursor-pointer font-bold text-[18px] ${
              editpage === "register" && "text-green-300"
            }`}
          >
            Register
          </h3>
        </div>
        {editpage === "login" ? <Login /> : <Register />}
      </div>
    </Modal>
  );
};

export default AuthorizationModal;
