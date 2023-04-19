import React, { type FC, useEffect, useState } from "react";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import { useTypedSelector } from "../hooks/useTypedSelector";
import {
  changeFilters,
  getFilters,
} from "../store/ActionCreators/chartsActionCreators";
import { useAppDispatch } from "../hooks/useTypedDispatch";
import { formatDateForInput } from "../utils/formatDateForInput";

const Filters: FC = () => {
  const dispatch = useAppDispatch();
  const { toDate, fromDate } = useTypedSelector(getFilters());
  const [inputFrom, setInputFrom] = useState(fromDate);
  const [inputTo, setInputTo] = useState(toDate);

  const onFromFilterChange = (from: string): void => {
    setInputFrom(from);
    dispatch(changeFilters(from, toDate));
  };
  const onToFilterChange = (to: string): void => {
    setInputTo(to);
    dispatch(changeFilters(fromDate, to));
  };

  useEffect(() => {
    dispatch(changeFilters("2022-01-01", formatDateForInput(Date.now())));
  }, []);

  return (
    <Row lg={4} xs={1} className="mt-3">
      <Col>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">From Date</InputGroup.Text>
          <Form.Control
            type="date"
            placeholder="from"
            aria-label="from date"
            value={inputFrom}
            onChange={(event) => {
              onFromFilterChange(event.target.value);
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
            value={inputTo}
            onChange={(event) => {
              onToFilterChange(event.target.value);
            }}
          />
        </InputGroup>
      </Col>
    </Row>
  );
};

export default Filters;
