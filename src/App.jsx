import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Videos from "./components/Videos";
import "./css/app.css";

const App = () => {
  return (
    <div className="app">
      <Header />

      <div className="app__content">
        <Sidebar />
        <Videos />
      </div>
    </div>
  );
};

export default App;
