import fetchNextApi, { apiParamsType } from "@/common/helpers/fetchNextApi";
import { nextRoutes } from "@/constants/apiPaths";

const Test = () => {
  const hander=async()=>{

    const apiParams: apiParamsType = {
      apiPath: nextRoutes['test'],
      method: 'GET',
    };
    try {
      const result = await fetchNextApi(apiParams);
      console.log('result:',result);
      
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }
  return (
    <button
      type="button"
      className=" w-[150px] h-60 bg-primary-green text-white hover:opacity-80"
      onClick={hander}>
      按鈕
    </button>
  );
};

export default Test;
