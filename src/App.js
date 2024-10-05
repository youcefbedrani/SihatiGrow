import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Sidebar from "./components/Sidebar";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import { logout } from "./store/authSlice";

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Router>
      <div className="flex w-full h-[100vh] p-0">
        {isAuthenticated ? (
          <>
            <Sidebar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </>
        ) : (
          <>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
