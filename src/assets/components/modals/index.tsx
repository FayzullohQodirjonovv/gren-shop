import { useSelector } from "react-redux";
import AuthorizationModal from "./authorization";
import type { RootState } from "../../../redux/store";

const Modals = () => {
  const { openAuthorizationModalVisiblty } = useSelector(
    (state: RootState) => state.modalSlice
  );

  return <>{openAuthorizationModalVisiblty && <AuthorizationModal />}</>;
};

export default Modals;
