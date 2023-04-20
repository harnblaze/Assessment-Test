import generateCharts, { generateChart } from "./generateCharts";
import { type IChart, type ModalData } from "../types/chart.types";
import configFile from "../config";

const charts = generateCharts(configFile.numberOfCharts);

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

const update = async (data: ModalData): Promise<IChart> =>
  await new Promise((resolve) => {
    const chartsArray = JSON.parse(localStorageCharts);
    const userIndex = chartsArray.findIndex(
      (chart: IChart) => chart.id === data.id
    );
    chartsArray[userIndex] = { ...chartsArray[userIndex], ...data };
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

const create = async (data: ModalData): Promise<IChart> =>
  await new Promise((resolve) => {
    setTimeout(() => {
      const chartsArray = JSON.parse(localStorageCharts);
      const chart = generateChart();
      const newChart = { ...chart, ...data };
      chartsArray.push(newChart);
      localStorage.setItem("charts", JSON.stringify(charts));
      resolve(newChart);
    });
  });

const deleteChart = async (id: string): Promise<IChart[]> =>
  await new Promise((resolve) => {
    setTimeout(() => {
      const chartsArray = JSON.parse(localStorageCharts) as IChart[];
      const newCharts = chartsArray.filter((chart) => chart?.id !== id);
      resolve(newCharts);
    }, 1000);
  });

export default {
  fetchAll,
  getById,
  deleteChart,
  update,
  create,
};
