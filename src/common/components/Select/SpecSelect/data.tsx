
export type SpecSelectProps = {
  optionsData: OptionType[];
  onSpecChange: (value: string) => void;
  initialSelectIndex: number;
};
export type OptionType = {
  value: string;
  label: string;
};

type ProductDataType = {
  smallWeight: number;
  largeWeight: number;
  smallProductSpecId: number;
  largeProductSpecId: number;
};

export function generateSpecData(specData: ProductDataType): OptionType[] {
  return [
    {
      value: ` ${specData.smallProductSpecId}`,
      label: `小份 ${specData.smallWeight}g`,
    },
    {
      value: ` ${specData.largeProductSpecId}`,
      label: `大份 ${specData.largeWeight}g`,
    },
  ];
}
