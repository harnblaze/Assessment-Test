import React, { type FC } from "react";
import { Badge, Container, Spinner } from "react-bootstrap";

const Loader: FC = () => {
  return (
    <Container>
      <h2 className="d-flex justify-content-center mt-3">
        <Badge bg="secondary">
          Loading...
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Badge>
      </h2>
    </Container>
  );
};

export default Loader;
