import { setUserData } from "@/redux/features/authSlice";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUserData({ nickname: "2222", token: "jelly" }));
  }, []);
  return ( <>
  <h1>1111</h1>
    <Link href="/">back</Link>
  </> );
}
 
export default Login;