import React, { type FC, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import ChartEdit from "./ChartEdit";
import { useAppDispatch } from "../hooks/useTypedDispatch";
import { removeChart } from "../store/ActionCreators/chartsActionCreators";

interface IChartEditProps {
  id: string;
}

const SettingsButtons: FC<IChartEditProps> = ({ id }) => {
  const dispatch = useAppDispatch();
  const [isShow, setIsShow] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const handleEditClick = (): void => {
    setIsEdit(true);
    setIsShow(true);
  };

  const handleNewClick = (): void => {
    setIsEdit(false);
    setIsShow(true);
  };

  const handleRemoveClick = (): void => {
    void dispatch(removeChart(id));
  };

  const handleClose = (): void => {
    setIsShow(false);
  };

  return (
    <Row>
      <Col className="d-flex justify-content-around">
        <Button variant="success" onClick={handleNewClick}>
          Add new chart
        </Button>
      </Col>
      <Col className="d-flex justify-content-around">
        <Button onClick={handleEditClick}>Edit</Button>
      </Col>
      <Col className="d-flex justify-content-around">
        <Button variant={"danger"} onClick={handleRemoveClick}>
          Remove
        </Button>
      </Col>

      <ChartEdit
        isShow={isShow}
        isEdit={isEdit}
        onClose={handleClose}
        id={id}
      />
    </Row>
  );
};

export default SettingsButtons;
