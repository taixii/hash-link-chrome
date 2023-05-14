import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* 다른 라우트 설정 */}
    </Routes>
  );
};

const Router = () => {
  return (
    <HashRouter>
      <AppRouter />
    </HashRouter>
  );
};

export default Router;
