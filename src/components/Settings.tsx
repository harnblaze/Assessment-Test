import React, { type FC } from "react";
import ListCharts from "./ListCharts";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { getCharts } from "../store/ActionCreators/chartsActionCreators";
import MainLayout from "../layouts/MainLayout";

const Settings: FC = () => {
  const charts = useTypedSelector(getCharts());

  return (
    <MainLayout>
      <ListCharts charts={charts} settings={true} />
    </MainLayout>
  );
};

export default Settings;
