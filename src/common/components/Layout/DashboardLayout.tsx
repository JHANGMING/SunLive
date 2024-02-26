import DashboardPage from "@/modules/DashboardPage";
import { DashboardLayoutProps } from "./data";
import useAuth from "@/common/hooks/useAuth";
import { useRouter } from "next/router";
import { useEffect } from "react";

const DashboardLayout = ({ children }:DashboardLayoutProps) => {
  // const auth = useAuth();
  //  const router = useRouter();
  // useEffect(() => {
  //   if (auth?.category !== '1') {
  //     router.replace('/404');
  //   }
  // }, [auth]);
  // if (auth?.category !== '1') return null;
  return (
    <section className="pt-60 pb-[194px] container flex gap-[74px]">
      <DashboardPage />
      {children}
    </section>
  );
};
 
export default DashboardLayout;