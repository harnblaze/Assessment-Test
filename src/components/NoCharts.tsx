import React, { type FC } from "react";
import { Badge, Container } from "react-bootstrap";

const NoCharts: FC = () => {
  return (
    <Container>
      <h2 className="d-flex justify-content-center mt-3">
        <Badge bg="secondary">No charts to show</Badge>
      </h2>
    </Container>
  );
};

export default NoCharts;
