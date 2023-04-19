import React, { type FC, memo } from "react";
import { ListGroup } from "react-bootstrap";
import Chart from "./Chart";
import { type IChart } from "../types/chart.types";

interface IListChartsProps {
  charts: IChart[];
}

const ListCharts: FC<IListChartsProps> = ({ charts }) => {
  return (
    <div>
      <ListGroup>
        {charts.map((el) => (
          <ListGroup.Item key={el.id}>
            <Chart chart={el} />o
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};
const MemoListCharts = memo(ListCharts);
export default MemoListCharts;
