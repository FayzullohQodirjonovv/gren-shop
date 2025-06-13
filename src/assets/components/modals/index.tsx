import { useSelector as useReduxSelector } from "react-redux";
import AuthorizationModal from "./authorization";

const Modals = () => {
  const { openAuthorizationModalVisiblty } = useReduxSelector(
    (state) => state.modalSlice
  );

  return <>{openAuthorizationModalVisiblty && <AuthorizationModal />}</>;
};

export default Modals;