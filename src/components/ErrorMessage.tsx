import React, { type FC } from "react";
import { Container, Toast } from "react-bootstrap";

interface IErrorMessageProps {
  message: string;
}

const ErrorMessage: FC<IErrorMessageProps> = ({ message }) => {
  return (
    <Container>
      <Toast>
        <Toast.Header>
          <strong className="me-auto">Error</strong>
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </Container>
  );
};

export default ErrorMessage;
