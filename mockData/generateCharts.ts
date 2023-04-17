import { faker } from "@faker-js/faker";
import { type IChart } from "../src/types/chart.types";

const generateCharts = (quantity: number): IChart[] => {
  const chart = [];
  for (let id = 0; id < quantity; id++) {
    chart.push({
      id: faker.datatype.uuid(),
      name: faker.address.country(),
      type: "line",
      color: faker.color.rgb({ prefix: "#", casing: "upper" }),
      data: new Array(10).fill("_").map((el) => {
        return {
          value: faker.datatype.number(1000),
          date: faker.datatype.datetime(),
        };
      }),
    });
  }
  return chart;
};

export default generateCharts;
