import { useEffect, useState } from "react";
import LogoImg from "../Logo/LogoImg";
import { ToastProps } from "./data";

const Toast = ({ message, duration = 3000, onClose }:ToastProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (message) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false); 
        if (onClose) onClose(); 
      }, duration);
      return () => clearTimeout(timer); 
    }
  }, [message, duration, onClose]); 

  if (!show) return null; 

  return (
    <div className="fixed top-0 right-0 flex gap-8 bg-primary-yellow rounded-tl-8 rounded-bl-8 p-12">
      <LogoImg widthProps={24} heightProps={24} />
      <p>{message}</p>
    </div>
  );
};

export default Toast;