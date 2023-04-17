import generateCharts from "./generateCharts";
import { type IChart } from "../src/types/chart.types";

const NUMBER_OF_CHARTS = 20;

const chartsAPi = generateCharts(NUMBER_OF_CHARTS);

if (localStorage.getItem("chartsAPi") === null) {
  localStorage.setItem("chartsAPi", JSON.stringify(chartsAPi));
}

const localStorageCharts = localStorage.getItem("chartsAPi") as string;

const fetchAll = async (): Promise<IChart[]> =>
  await new Promise((resolve) => {
    setTimeout(() => {
      const chartsArray = JSON.parse(localStorageCharts);
      resolve(chartsArray);
    }, 1000);
  });

const update = async (id: string, data: IChart): Promise<IChart[]> =>
  await new Promise((resolve) => {
    const chartsArray = JSON.parse(localStorageCharts);
    const userIndex = chartsArray.findIndex((chart: IChart) => chart.id === id);
    chartsAPi[userIndex] = { ...chartsArray[userIndex], ...data };
    localStorage.setItem("chartsAPi", JSON.stringify(chartsArray));
    resolve(chartsArray[userIndex]);
  });

const getById = async (id: string): Promise<IChart> =>
  await new Promise((resolve) => {
    setTimeout(() => {
      const chartsArray = JSON.parse(localStorageCharts) as IChart[];
      const chart = chartsArray.find((chart) => chart?.id === id);
      if (chart !== undefined) resolve(chart);
    }, 1000);
  });

export default {
  fetchAll,
  getById,
  update,
};
