import DashboardPage from "@/modules/DashboardPage";
import { DashboardLayoutProps } from "./data";

const DashboardLayout = ({ children }:DashboardLayoutProps) => {
  return (
    <section className="pt-60 pb-[194px] container flex gap-[74px]">
      <DashboardPage />
      {children}
    </section>
  );
};
 
export default DashboardLayout;