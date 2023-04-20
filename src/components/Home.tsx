import React, { type FC, useMemo } from "react";
import ListCharts from "./ListCharts";
import Filters from "./Filters";
import { useTypedSelector } from "../hooks/useTypedSelector";
import {
  getCharts,
  getFilters,
} from "../store/ActionCreators/chartsActionCreators";
import MainLayout from "../layouts/MainLayout";
import NoCharts from "./NoCharts";

const Home: FC = () => {
  const charts = useTypedSelector(getCharts());

  const { fromDate, toDate } = useTypedSelector(getFilters());
  const filteredCharts = useMemo(
    () =>
      charts.filter(
        (chart) =>
          chart.data[0].date > Date.parse(fromDate) &&
          (chart.data.at(-1)?.date as number) < Date.parse(toDate)
      ),
    [fromDate, toDate, charts]
  );

  if (filteredCharts.length === 0)
    return (
      <MainLayout>
        <NoCharts />
      </MainLayout>
    );

  return (
    <MainLayout>
      <Filters />
      <ListCharts charts={filteredCharts} />
    </MainLayout>
  );
};

export default Home;
