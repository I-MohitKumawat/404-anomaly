import React, { useState } from "react";
import "./App.css";
import MainDash from "./components/MainDash/MainDash";
import RightSide from "./components/RigtSide/RightSide";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [activePage, setActivePage] = useState("Dashboard");

  const handleMenuItemClick = (page) => {
    setActivePage(page);
  };

  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar onMenuItemClick={handleMenuItemClick} />
        {activePage === "Dashboard" && <MainDash />}
        {activePage === "ChatBot" && <div> 
          </div>}
        {activePage === "Inspiration" && <div></div>}
        <RightSide />
      </div>
    </div>
  );
}

export default App;