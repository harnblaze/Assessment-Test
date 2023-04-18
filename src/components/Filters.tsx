import React, { type FC, useState } from "react";
import { Col, Form, InputGroup, Row } from "react-bootstrap";

interface IFilterProps {
  onFiltersChange: (from: string, to: string) => void;
}

const Filters: FC<IFilterProps> = ({ onFiltersChange }) => {
  const [fromDate, setFromDate] = useState("2022-01-01");
  const [toDate, setToDate] = useState("2023-04-18");

  return (
    <Row lg={4} xs={1} className="mt-3">
      <Col>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">From Date</InputGroup.Text>
          <Form.Control
            type="date"
            placeholder="from"
            aria-label="from date"
            value={fromDate}
            onChange={(event) => {
              setFromDate(event.target.value);
              onFiltersChange(event.target.value, toDate);
            }}
          />
        </InputGroup>
      </Col>
      <Col>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">To Date</InputGroup.Text>
          <Form.Control
            type="date"
            placeholder="to"
            aria-label="to date"
            value={toDate}
            onChange={(event) => {
              setToDate(event.target.value);
              onFiltersChange(fromDate, event.target.value);
            }}
          />
        </InputGroup>
      </Col>
    </Row>
  );
};

export default Filters;
