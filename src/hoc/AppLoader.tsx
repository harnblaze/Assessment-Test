import React, { type FC, type PropsWithChildren, useEffect } from "react";
import { useAppDispatch } from "../hooks/useTypedDispatch";
import { fetchingChartsList } from "../store/ActionCreators/chartsActionCreators";

const AppLoader: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(fetchingChartsList());
  }, []);

  return <>{children}</>;
};

export default AppLoader;
