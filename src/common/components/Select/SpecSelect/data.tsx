
export type SpecSelectProps = {
  optionsData: OptionType[];
  onSpecChange: (value: string) => void;
};
export type OptionType = {
  value: string;
  label: string;
};

type ProductDataType = {
  smallWeight: number;
  largeWeight: number;
};

export function generateSpecData(specData: ProductDataType): OptionType[] {
  return [
    { value: '0', label: `小份 ${specData.smallWeight}g` },
    { value: '1', label: `大份 ${specData.largeWeight}g` },
  ];
}
