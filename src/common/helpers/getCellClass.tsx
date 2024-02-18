export const getCellClass = (columnDataIndex: string) => {
  switch (columnDataIndex) {
    case 'discountPrice':
      return 'py-[13px] text-primary-red';
    default:
      return 'py-[13px]';
  }
};
