import generateCharts from "./generateCharts";
import { type IChart } from "../types/chart.types";

const NUMBER_OF_CHARTS = 20;

const charts = generateCharts(NUMBER_OF_CHARTS);

if (localStorage.getItem("charts") === null) {
  localStorage.setItem("charts", JSON.stringify(charts));
}

const localStorageCharts = localStorage.getItem("charts") as string;

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
    charts[userIndex] = { ...chartsArray[userIndex], ...data };
    localStorage.setItem("charts", JSON.stringify(chartsArray));
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
