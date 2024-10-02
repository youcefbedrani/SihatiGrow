import React from "react";
import { Link } from "react-router-dom";
import { TbInvoice } from "react-icons/tb";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBox, FaUsersRectangle } from "react-icons/fa6";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";

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
      <ul className="w-full mt-12">
        <li className="w-full h-12 bg-green-100 flex items-center text-[#111837]">
          <div className="w-1 h-full bg-green-400 left-0"></div>
          <div className="ml-4 mx-3 flex items-center">
            <AiOutlineDashboard size={20} color="#111837" className="mr-3" />
            <Link to="/">Dashboards</Link>
          </div>
        </li>
        <li className="w-full h-12 bg-white flex items-center text-[#111837]">
          <div className="w-1 h-full bg-white left-0"></div>
          <div className="ml-4 mx-3 flex items-center">
            <TbInvoice size={20} color="#111837" className="mr-3" />
            <Link to="/about">Transaction</Link>
          </div>
        </li>
        <li className="w-full h-12 bg-white flex items-center text-[#111837]">
          <div className="w-1 h-full bg-white left-0"></div>
          <div className="ml-4 mx-3 flex items-center justify-between w-full">
            <div className="flex items-center">
              <FaBox size={20} color="#111837" className="mr-3" />
              <Link to="/about">Product</Link>
            </div>
            <div>
              <FaAngleDown size={20} color="#111837" className="right-2" />
            </div>
          </div>
        </li>
        <li className="w-full h-12 bg-white flex items-center text-[#111837]">
          <div className="w-1 h-full bg-white left-0"></div>
          <div className="ml-4 mx-3 flex items-center justify-between w-full">
            <div className="flex items-center">
              <FaUsersRectangle size={20} color="#111837" className="mr-3" />
              <Link to="/about">Users</Link>
            </div>
            <div>
              <FaAngleDown size={20} color="#111837" className="right-2" />
            </div>
          </div>
        </li>
        <li className="w-full h-12 bg-white flex items-center text-[#111837]">
          <div className="w-1 h-full bg-white left-0"></div>
          <div className="ml-4 mx-3 flex items-center">
            <FaRegMoneyBillAlt size={20} color="#111837" className="mr-3" />
            <Link to="/about">Additional cost</Link>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
