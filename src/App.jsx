import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Videos from "./components/Videos";
import Search from "./components/Search";
import NotFound from "./components/NotFound";
import "./css/app.css";

const App = () => {
  return (
    <div className="app">
      <Header />

      <div className="app__content">
        <Sidebar />

        <Routes>
          <Route path="/" element={<Videos />} />

          <Route path="/search" element={<Search />}>
            <Route path=":search" element={<Search />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
