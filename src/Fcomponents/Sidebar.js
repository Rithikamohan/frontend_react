import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Sidebar.css";
import { logoutUser } from "../services/index";
function Sidebar() {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logoutUser());
  };
  return (
    <div className="bg-white sidebar p-2">
      <div className="m-2">
        <i className="bi bi-bootstrap-fill me-3 fs-4"></i>
        <span className="brand-name fs-4">Faculty PTU</span>
      </div>
      <hr className="text-dark" />
      <div className="list-group list-group-flush">
        <a className="list-group-item py-2">
          <i className="bi bi-speedometer2 fs-5 me-3"></i>
          <Link to={"home"}>
            <span>Dashboard</span>
          </Link>
        </a>
        <a className="list-group-item py-2 ">
          <i className="bi bi-house fs-5 me-3"></i>
          <Link to={"register"}>
            <span>View details</span>
          </Link>
        </a>
        <a className="list-group-item py-2">
          <i className="bi bi-table fs-5 me-3"></i>
          <Link to={"Codeproblemc"}>
          <span>Add Code Problems</span>
          </Link>
        </a>
        <a className="list-group-item py-2">
          <i className="bi bi-clipboard-data fs-5 me-3"></i>
          <span>Report</span>
        </a>
      
        <a className="list-group-item py-2">
          <i className="bi bi-power fs-5 me-3"></i>
          <Link to={"logout"} onClick={logout}>
            <span>Logout</span>
          </Link>
        </a>
      </div>
    </div>
  );
}
export default Sidebar;
