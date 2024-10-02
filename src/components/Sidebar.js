import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-[15%] h-[100vh] bg-white pt-6 border-t-0 rounded-tr-[15px] rounded-br-[15px]">
      <div>
        <img
          src="https://res.cloudinary.com/dwxkalr5p/image/upload/c_crop,g_auto,h_800,w_800/c_crop,h_250,w_250/SihatiSyS/aociylybit5iddmbqf3b.jpg"
          className="w-32 h-32 mx-auto mb-4"
          alt="logo"
        />
        <div>
          <h1 className="text-center font-bold text-xl">Sihati system</h1>
          <p className="text-center text-lg">Laboratory</p>
        </div>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
