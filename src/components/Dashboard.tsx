import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const DashboardLayout: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      navigate("/");
      localStorage.removeItem("userId");
    }
  };

  return (
    <div
      className="d-flex"
      style={{
        height: "100vh", // Full height of the viewport
        overflow: "hidden", // Prevent scrolling for the entire component
      }}
    >
      <div
        className="d-flex mx-auto"
        style={{
          width: "80%", // Main content width
          height: "100vh", // Full height of the viewport
        }}
      >
        {/* Persistent Left Navigation Menu */}
        <div
          className="bg-light d-flex flex-column p-3"
          style={{
            width: "25%",
            height: "100vh", // Full height for the left sidebar
            position: "sticky",
            top: 0,
          }}
        >
          {/* Logo */}
          <div className="mb-4 text-center">
            <i className="bi bi-twitter fs-2 text-primary"></i>
          </div>

          {/* Navigation Links */}
          <NavLink
            to="/dashboard/home"
            className={({ isActive }) =>
              `btn w-100 mb-3 text-start d-flex align-items-center ${
                isActive ? "btn-primary disabled" : "btn-light"
              }`
            }
          >
            <i className="bi bi-house-door me-2"></i> Home
          </NavLink>
          <NavLink
            to="/dashboard/search"
            className={({ isActive }) =>
              `btn w-100 mb-3 text-start d-flex align-items-center ${
                isActive ? "btn-primary disabled" : "btn-light"
              }`
            }
          >
            <i className="bi bi-search me-2"></i> Search
          </NavLink>
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              `btn w-100 mb-3 text-start d-flex align-items-center ${
                isActive ? "btn-primary disabled" : "btn-light"
              }`
            }
          >
            <i className="bi bi-person me-2"></i> Profile
          </NavLink>

          {/* Tweet Link */}
          <NavLink
            to="/dashboard/tweet"
            className={({ isActive }) =>
              `btn w-100 mb-3 text-start d-flex align-items-center ${
                isActive ? "btn-primary disabled" : "btn-light"
              }`
            }
          >
            <i className="bi bi-twitter me-2"></i> Tweet
          </NavLink>

          {/* Logout Button at Bottom */}
          <button
            className="btn btn-danger mt-auto w-100 text-start d-flex align-items-center"
            onClick={handleLogout}
          >
            <i className="bi bi-box-arrow-right me-2"></i> Logout
          </button>
        </div>

        {/* Dynamic Right Content */}
        <div
          className="flex-grow-1 p-4"
          style={{
            backgroundColor: "white",
            height: "100vh", // Full height of the viewport
            overflow: "hidden", // Prevent the parent from scrolling
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
