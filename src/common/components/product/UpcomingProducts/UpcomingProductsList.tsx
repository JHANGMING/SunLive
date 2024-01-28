import UpcomingProduct from './UpcomingProduct';
import { productData } from './data';

const UpcomingProductsList = () => {
  return (
    <div className=" col-start-5 col-end-11">
      <ul className="flex flex-col gap-40">
        {productData.map((data) => (
          <UpcomingProduct key={data.title} {...data} />
        ))}
      </ul>
    </div>
  );
};

export default UpcomingProductsList;
