type SelectValueReturn = {
  value: string;
  label: string;
};


export const selectValueReturn = (value: SelectValueReturn |string ):string => {
  if (typeof value === 'object' && value !== null && 'value' in value) {
    return value.value;
  }

  return value;
};
