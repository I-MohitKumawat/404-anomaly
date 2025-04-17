import React from "react";
import Cards from "../Cards/Cards";
// import Table from "../Table/Table";
import Endless from "../infinity/EndlessFlow"
import "./MainDash.css";
const MainDash = () => {
  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <Cards />
      <Endless />
    </div>
  );
};

export default MainDash;
