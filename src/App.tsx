import React, { type FC } from "react";

import { Navigate, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Settings from "./components/Settings";

const App: FC = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </>
);

export default App;
