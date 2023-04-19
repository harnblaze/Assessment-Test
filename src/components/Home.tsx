import React, { type FC, useMemo } from "react";
import { Container } from "react-bootstrap";
import ListCharts from "./ListCharts";
import Filters from "./Filters";
import { useTypedSelector } from "../hooks/useTypedSelector";
import {
  getCharts,
  getChartsErrors,
  getChartsLoadingStatus,
  getFilters,
} from "../store/ActionCreators/chartsActionCreators";
import ErrorMessage from "./ErrorMessage";
import Loader from "./Loader";
import NoCharts from "./NoCharts";

const Home: FC = () => {
  const charts = useTypedSelector(getCharts());

  const chartsStatusLoading = useTypedSelector(getChartsLoadingStatus());
  const chartsError = useTypedSelector(getChartsErrors());
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

  if (chartsError !== null) return <ErrorMessage message={chartsError} />;
  if (chartsStatusLoading) return <Loader />;

  if (filteredCharts.length === 0) return <NoCharts />;
  return (
    <Container>
      <Filters />
      <ListCharts charts={filteredCharts} />
    </Container>
  );
};

export default Home;
