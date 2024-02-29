import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { hideToast } from "@/redux/features/messageSlice";
import LogoImg from "../Logo/LogoImg";

const Toast = () => {
 const dispatch = useDispatch();
 const { showMessage, message } = useSelector((state:RootState) => state.message);
 useEffect(() => {
   if (showMessage) {
     const timer = setTimeout(() => {
       dispatch(hideToast());
     }, 3000);
     return () => clearTimeout(timer);
   }
 }, [showMessage, dispatch]);

 if (!showMessage) return null;

  return (
    <div className="fixed top-0 right-0 flex gap-8 bg-primary-yellow rounded-tl-8 rounded-bl-8 p-12 z-50">
      <LogoImg classProps="w-24 h-24" />
      <p>{message}</p>
    </div>
  );
};

export default Toast;