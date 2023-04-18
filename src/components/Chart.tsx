import React, { type FC } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { type IChart } from "../types/chart.types";
import { formatDataForChart } from "../utils";

interface IChartProps {
  chart: IChart;
}

const Chart: FC<IChartProps> = ({ chart }) => {
  const data = formatDataForChart(chart.data);

  const options = {
    chart: {
      type: "spline",
    },
    title: {
      text: chart.name,
    },
    yAxis: {
      type: "datetime",
    },

    series: [
      {
        data,
        color: chart.color,
      },
    ],
  };

  return (
    <>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={"stockChart"}
        options={options}
      />
    </>
  );
};

export default Chart;
