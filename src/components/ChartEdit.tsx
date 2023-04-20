import React, { type FC, useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useTypedSelector } from "../hooks/useTypedSelector";
import {
  addChart,
  getChartById,
  updateChart,
} from "../store/ActionCreators/chartsActionCreators";
import { type ModalData } from "../types/chart.types";
import { useAppDispatch } from "../hooks/useTypedDispatch";
import configFile from "../config";

interface IChartEditProps {
  isShow: boolean;
  isEdit: boolean;
  id: string;
  onClose: () => void;
}

const initialData = {
  name: "",
  type: "",
  color: "#000000",
  id: "",
};

const ChartEdit: FC<IChartEditProps> = ({ isShow, isEdit, onClose, id }) => {
  const chart = useTypedSelector(getChartById(id));
  const dispatch = useAppDispatch();
  const [data, setData] = useState<ModalData>(initialData);

  useEffect(() => {
    isEdit
      ? setData({
          name: chart?.name ?? "",
          type: chart?.type ?? "",
          color: chart?.color ?? "",
          id: chart?.id ?? "",
        })
      : setData(initialData);
  }, [isEdit]);

  const handleChange = (data: ModalData): void => {
    setData(data);
  };
  const handleSubmit = async (): Promise<void> => {
    console.log("dasdasd");
    isEdit ? await dispatch(updateChart(data)) : await dispatch(addChart(data));
  };
  return (
    <Modal
      show={isShow}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={onClose}
    >
      <Modal.Header closeButton onHide={onClose}>
        <Modal.Title id="contained-modal-title-vcenter">
          {isEdit ? "Edit chart" : "Add new chart"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter chart name"
              onChange={(event) => {
                handleChange({ ...data, name: event.target.value });
              }}
              value={data.name}
            />
          </Form.Group>{" "}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Color</Form.Label>
            <Form.Control
              type="color"
              onChange={(event) => {
                console.log(event.target.value);
                handleChange({ ...data, color: event.target.value });
              }}
              value={data.color}
            />
          </Form.Group>{" "}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Type</Form.Label>
            <Form.Select
              onChange={(event) => {
                handleChange({ ...data, type: event.target.value });
              }}
              value={data.type}
            >
              {configFile.chartTypes.map((type) => (
                <option value={type} key={type}>
                  {type}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            void handleSubmit();
          }}
        >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ChartEdit;
