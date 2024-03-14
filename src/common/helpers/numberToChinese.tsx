const numberToChinese = (number: number) => {
  const chineseNumbers = ['零', '一', '二', '三'];
  return chineseNumbers[number] || number;
};
export default numberToChinese;
