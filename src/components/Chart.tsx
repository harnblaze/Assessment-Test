import React, { type FC } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import Accessibility from "highcharts/modules/accessibility";
import { type IChart } from "../types/chart.types";
import { formatDataForChart } from "../utils/formatDataForChart";
import SettingsButtons from "./SettingsButtons";

Accessibility(Highcharts);

interface IChartProps {
  chart: IChart;
  settings: boolean;
}

const Chart: FC<IChartProps> = ({ chart, settings }) => {
  const data = formatDataForChart(chart.data);

  const options = {
    chart: {
      type: chart.type,
    },
    title: {
      text: chart.name,
    },
    yAxis: {
      title: {
        text: "Value",
      },
      type: "linear",
    },
    xAxis: {
      title: {
        text: "Date",
      },
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
      {settings && <SettingsButtons id={chart.id} />}
    </>
  );
};

const MemoChart = React.memo(Chart);
export default MemoChart;
