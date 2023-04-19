import React, { type FC } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import Accessibility from "highcharts/modules/accessibility";
import { type IChart } from "../types/chart.types";
import { formatDataForChart } from "../utils/formatDataForChart";

Accessibility(Highcharts);

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
      type: "linear",
    },
    xAxis: {
      type: "datetime",
    },
    series: [
      {
        name: chart.name,
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

const MemoChart = React.memo(Chart);
export default MemoChart;
