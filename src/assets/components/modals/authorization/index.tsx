import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../../redux/modalslice";
import Login from '../authorization/login'
import Register from '../authorization/Register'
import { useState } from "react";
const AuthorizationModal = () => {
  const { openAuthorizationModalVisiblty } = useSelector(
    (state) => state.modalSlice
  );
const dispatch = useDispatch()
const [editpage, seteditpage] = useState("login")
  return <Modal open={openAuthorizationModalVisiblty} footer={false} onCancel={()=> dispatch(closeModal())}>


<div className="p-5 mt-5">
  <div className="flex items-center justify-center gap-5">
    <h3 onClick={()=> seteditpage("login")}
      className={`cursor-pointer font-bold text-[18px] ${editpage === "login" && "text-green-300"}`}
    >
      Login
    </h3>
    <h3>|</h3>
    <h3 onClick={()=> seteditpage("register")}
      className={`cursor-pointer font-bold text-[18px] ${editpage === "register" && "text-green-300"}`}
    >
      Register
    </h3>
  </div>
  {editpage === "login" ? <Login /> : <Register />}
</div>
  </Modal>;
};

export default AuthorizationModal;