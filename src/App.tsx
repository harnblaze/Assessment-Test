import React, { type FC } from "react";

import { Navigate, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Settings from "./components/Settings";
import AppLoader from "./hoc/AppLoader";

const App: FC = () => (
  <>
    <AppLoader>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AppLoader>
  </>
);

export default App;
