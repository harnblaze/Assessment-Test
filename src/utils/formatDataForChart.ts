import { type IDataChart } from "../types/chart.types";

export const formatDataForChart = (data: IDataChart[]): number[][] => {
  return data.map((el) => [el.date, el.value]).sort((a, b) => a[0] - b[0]);
};
