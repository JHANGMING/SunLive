import { useSelector } from "react-redux";

export default function Home() {
  const data=useSelector(state=>state.auth)
  console.log(data);
  
  return (
    <>
      <h1 className=" bg-primary-yellow text-primary-red">環境建置</h1>
    </>
  );
}
