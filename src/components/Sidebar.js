import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TbInvoice } from "react-icons/tb";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBox, FaUsersRectangle } from "react-icons/fa6";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";

function Sidebar() {
  const [selectedItem, setSelectedItem] = useState(1);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  const now = new Date();
  const currentDateTime = now.toLocaleString();

  return (
    <div className="w-[15%] h-[100vh] bg-white pt-6 border-t-0 rounded-tr-[15px] rounded-br-[15px] flex flex-col items-center justify-between">
      <div className="w-full">
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
          <li
            className={`w-full h-12 ${
              selectedItem === 1 ? "bg-green-100" : "bg-white"
            } flex items-center text-[#111837]`}
            onClick={() => handleItemClick(1)}
          >
            <div
              className={`w-1 h-full ${
                selectedItem === 1 ? "bg-green-300" : "bg-white"
              } left-0`}
            ></div>
            <div className="ml-4 mx-3 flex items-center">
              <AiOutlineDashboard size={20} color="#111837" className="mr-3" />
              <Link to="/">Dashboards</Link>
            </div>
          </li>
          <li
            className={`w-full h-12 ${
              selectedItem === 2 ? "bg-green-100" : "bg-white"
            } flex items-center text-[#111837]`}
            onClick={() => handleItemClick(2)}
          >
            <div
              className={`w-1 h-full ${
                selectedItem === 2 ? "bg-green-300" : "bg-white"
              } left-0`}
            ></div>
            <div className="ml-4 mx-3 flex items-center">
              <TbInvoice size={20} color="#111837" className="mr-3" />
              <Link to="/about">Transaction</Link>
            </div>
          </li>
          <li
            className={`w-full h-12 ${
              selectedItem === 3 ? "bg-green-100" : "bg-white"
            } flex items-center text-[#111837]`}
            onClick={() => handleItemClick(3)}
          >
            <div
              className={`w-1 h-full ${
                selectedItem === 3 ? "bg-green-300" : "bg-white"
              } left-0`}
            ></div>
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
          <li
            className={`w-full h-12 ${
              selectedItem === 4 ? "bg-green-100" : "bg-white"
            } flex items-center text-[#111837]`}
            onClick={() => handleItemClick(4)}
          >
            <div
              className={`w-1 h-full ${
                selectedItem === 4 ? "bg-green-300" : "bg-white"
              } left-0`}
            ></div>
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
          <li
            className={`w-full h-12 ${
              selectedItem === 5 ? "bg-green-100" : "bg-white"
            } flex items-center text-[#111837]`}
            onClick={() => handleItemClick(5)}
          >
            <div
              className={`w-1 h-full ${
                selectedItem === 5 ? "bg-green-300" : "bg-white"
              } left-0`}
            ></div>
            <div className="ml-4 mx-3 flex items-center">
              <FaRegMoneyBillAlt size={20} color="#111837" className="mr-3" />
              <Link to="/about">Additional cost</Link>
            </div>
          </li>
        </ul>
      </div>
      <div className="w-full">
        <div className="w-full text-center mb-4">
          <h2>{currentDateTime}</h2>
        </div>
        <div className="w-28 h-8 bg-red-400 text-white font-bold rounded-lg flex items-center mx-auto mb-4 text-center p-3">
          <h2 className="mr-2">Logout</h2>
          <IoIosLogOut size={20} color="white" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
