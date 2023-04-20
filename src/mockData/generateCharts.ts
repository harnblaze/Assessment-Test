import { faker } from "@faker-js/faker";
import { type IChart } from "../types/chart.types";
import { getRandomElementOfArray } from "../utils/getRandomElementOfArray";
import configFile from "../config";

export const generateChart = (): IChart => {
  return {
    id: faker.datatype.uuid(),
    name: faker.address.country(),
    type: getRandomElementOfArray(configFile.chartTypes),
    color: faker.color.rgb({ prefix: "#", casing: "upper" }),
    data: new Array(10)
      .fill("_")
      .map((el) => {
        return {
          value: faker.datatype.number(1000),
          date: faker.date.past().getTime(),
        };
      })
      .sort((a, b) => a.date - b.date),
  };
};

const generateCharts = (quantity: number): IChart[] => {
  const charts = [];
  for (let id = 0; id < quantity; id++) {
    charts.push(generateChart());
  }
  return charts;
};

export default generateCharts;
