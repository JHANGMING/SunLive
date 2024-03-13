type DataType = {
  productId: string;
  productTitle: string;
};

type NewDataType = {
  productId: number;
  productSize: boolean;
  liveprice: number;
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
  const newData: NewDataType[] = [];
  const productKeys = Object.keys(data).filter((key) => key.startsWith('liveProduct_'));

  productKeys.forEach((key) => {
    const match = key.match(/liveProduct_(.*)/);
    if (match) {
      const idSuffix = match[1];
      const productSpecKey = `liveProductSpec_${idSuffix}`;
      const specialPriceKey = `liveSpectialPrice_${idSuffix}`;

      newData.push({
        productId: Number(data[key]),
        productSize: data[productSpecKey] === 'true',
        liveprice: Number(data[specialPriceKey]),
      });
    }
  });

  return newData;
};
