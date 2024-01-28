import { bannerTitle } from './data';

const BannerTitle = () => {
  return (
    <div>
      <h1 className="text-white flex flex-col text-shadow-bannerTitle">
        {bannerTitle.title}
        <span className="text-32 text-white font-bold">
          {bannerTitle.subTitle}
        </span>
      </h1>
    </div>
  );
};

export default BannerTitle;
