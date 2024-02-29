type DataType = {
  productId: string;
  productTitle: string;
};
export type LiveDataType = {
  [key: string]: string | number;
};

export const transformDataForSelect = (data: DataType[]) => {
  return data.map((item) => ({
    value: item.productId.toString(),
    label: item.productTitle,
  }));
};

export const transformLiveData = (data: LiveDataType) => {
  const newData = [];
  let i = 0;
  while (data[`liveProduct_${i}`]) {
    const productIdKey = `liveProduct_${i}`;
    const productSpecKey = `liveProductSpec_${i}`;
    const specialPriceKey = `liveSpectialPrice_${i}`;

    newData.push({
      productId: Number(data[productIdKey]),
      productSize: data[productSpecKey] === 'true',
      liveprice: Number(data[specialPriceKey]),
    });

    i++;
  }

  return newData;
};
