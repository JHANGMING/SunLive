export type SpecSelectProps = {
  isLive?: boolean;
  optionsData: OptionType[];
  initialSelectIndex: number;
  onSpecChange: (value: string) => void;
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
      label: `小份 ${specData.smallWeight} 斤`,
    },
    {
      value: ` ${specData.largeProductSpecId}`,
      label: `大份 ${specData.largeWeight} 斤`,
    },
  ];
}
