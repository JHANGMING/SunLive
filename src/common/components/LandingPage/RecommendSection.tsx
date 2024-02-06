import Image from '@/common/components/CustomImage';

const RecommendSection = () => {
  return (
    <section className="bg-recommendBG_small lg:bg-recommendBG h-[500px]  lg:h-[877px] bg-center bg-repeat-x lg:bg-bottom  bg-white pt-48  lg:pt-100">
      <div className="container flex flex-col items-center">
        <h2 className="hidden lg:block text-primary-red mb-16">
          除了直播！快來看看小農熱門商品
        </h2>
        <h4 className="hidden lg:block text-primary-green mb-40">
          滿滿小農愛心，讓您每一口都吃得安心
        </h4>
        <Image
          src="/images/home/recommend/recommendPersonImg.png"
          alt="recommendPersonImg"
          className="w-[163px] h-[183px] lg:w-[265px] lg:h-[297px] mb-16 lg:mb-40"
        />
        <h2 className="text-20 text-primary-red mb-4 lg:hidden">熱賣推薦！</h2>
        <h4 className="text-16 text-primary-green mb-20 lg:hidden">
          讓您品味安心的每一口
        </h4>
        <p className="text-center text-12 mb-16 lg:text-20 lg:mb-40">
          <b>在這裡，你可以輕鬆選購到當季新鮮水果，</b>
          <br />
          <b>我們貼心地為您</b>
          <strong className=" text-primary-red">快速分類各種季節美味</strong>
          <br />
          讓您吃得安心，同時品味到最香甜的蔬菜和水果
        </p>
        <p className="text-center text-12 lg:text-20">
          <b>每一個農作物都是小農用心栽種的成果，</b>
          <br />
          <b>我們期盼這份溫馨感能夠伴隨著您的每一餐， </b>
          <br />
          <strong className=" text-primary-red">
            讓您享受到大自然的恩惠和小農的用心
          </strong>
        </p>
      </div>
    </section>
  );
};

export default RecommendSection;
