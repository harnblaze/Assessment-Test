export const formatDateForInput = (milliseconds: number): string => {
  const date = new Date(milliseconds);
  const year = date.getFullYear();
  const month = date.getMonth() > 10 ? date.getMonth() : `0${date.getMonth()}`;
  const day = date.getDate() > 10 ? date.getDate() : `0${date.getDate()}`;
  return `${year}-${month}-${day}`;
};
