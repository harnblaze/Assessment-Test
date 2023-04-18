import React, { type FC, useState } from "react";
import { Container } from "react-bootstrap";
import generateCharts from "../mockData/generateCharts";
import ListCharts from "./ListCharts";
import Filters from "./Filters";

const initialState = generateCharts(20);

const Home: FC = () => {
  const [charts, setCharts] = useState(initialState);
  console.log(charts);
  const onChange = (from: string, to: string): void => {
    const fromDate = Date.parse(from);
    const toDate = Date.parse(to);
    setCharts(
      initialState.filter((el) => {
        console.log(el.name, el.data.at(-1)?.date.getTime(), toDate);
        return (
          el.data[0]?.date.getTime() > fromDate &&
          (el.data.at(-1)?.date.getTime() ?? Infinity) < toDate
        );
      })
    );
  };

  return (
    <Container>
      <Filters onFiltersChange={onChange} />
      <ListCharts charts={charts} />
    </Container>
  );
};

export default Home;
