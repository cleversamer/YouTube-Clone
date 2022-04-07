import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Videos from "./components/Videos";
import NotFound from "./components/NotFound";
import { Routes, Route } from "react-router-dom";
import "./css/app.css";

const App = () => {
  return (
    <div className="app">
      <Header />

      <div className="app__content">
        <Sidebar />

        <Routes>
          <Route path="/" element={<Videos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
