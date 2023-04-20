import React, { type FC, type PropsWithChildren } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import {
  getChartsErrors,
  getChartsLoadingStatus,
} from "../store/ActionCreators/chartsActionCreators";
import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";
import { Container } from "react-bootstrap";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  const chartsStatusLoading = useTypedSelector(getChartsLoadingStatus());
  const chartsError = useTypedSelector(getChartsErrors());

  if (chartsStatusLoading) return <Loader />;
  if (chartsError !== null) return <ErrorMessage message={chartsError} />;

  return <Container>{children}</Container>;
};

export default MainLayout;
