
import { useRouter } from "next/router";
import Button from "../Button";
import LogoImg from "../Logo/LogoImg";
import { ErrorPagePropsType } from "./data";
const ErrorPage = ({page}:ErrorPagePropsType) => {
  const router = useRouter();
  const handlerToIndex = () => {
    router.push('/');
  };
  return (
    <section className="flex justify-center pt-[180px] pb-[320px]">
      <div className="flex flex-col items-center gap-16">
        <LogoImg classProps="w-50 h-50" />
        <h2 className="text-40 text-primary-green mb-24">
          {page === '500' ? '伺服器無法使用' : '頁面不存在'}
        </h2>
        <Button
          category="addCart"
          btnStyle="flex justify-center bg-primary-red border-white w-[206px]"
          textStyle="text-white"
          onClick={handlerToIndex}>
          返回首頁
        </Button>
      </div>
    </section>
  );
};
 
export default ErrorPage;