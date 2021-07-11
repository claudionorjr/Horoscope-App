const changeDataToBR = (date: string) => {
  const splited = date.split('-');
  const day = splited[2];
  const month = splited[1];
  const year = splited[0];
  return `${day}-${month}-${year}`;
};

export default changeDataToBR;
