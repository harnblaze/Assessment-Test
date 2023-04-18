import { type IDataChart } from "../types/chart.types";

export const formatDataForChart = (
  data: IDataChart[]
): Array<Array<number | Date>> => {
  return data
    .map((el) => [el.date.getTime(), el.value])
    .sort((a, b) => b[0] - a[0]);
};
