import React, { type FC } from "react";
import Chart from "./Chart";
import { Container, ListGroup } from "react-bootstrap";
import generateCharts from "../mockData/generateCharts";

const Home: FC = () => {
  const charts = generateCharts(20);
  return (
    <Container>
      <ListGroup>
        {charts.map((el) => (
          <ListGroup.Item key={el.id}>
            <Chart chart={el} />o
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Home;
