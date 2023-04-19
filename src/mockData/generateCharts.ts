import { faker } from "@faker-js/faker";
import { type IChart } from "../types/chart.types";

const generateCharts = (quantity: number): IChart[] => {
  const charts = [];
  for (let id = 0; id < quantity; id++) {
    charts.push({
      id: faker.datatype.uuid(),
      name: faker.address.country(),
      type: "line",
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
    });
  }
  return charts;
};

export default generateCharts;
