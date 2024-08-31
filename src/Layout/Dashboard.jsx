import React, { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FaHome, FaWallet, FaUser, FaPlusSquare } from "react-icons/fa";
import useAdmin from "../Hook/useAdmin";
import { AuthContext } from "../Context/AuthProvider";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const { user } = useContext(AuthContext);
  console.log(isAdmin);
  const navigate = useNavigate();

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>

          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          {isAdmin ? (
            <>
              <ul className="menu p-4 w-80 h-full bg-black  text-white">
                <li>
                  <Link to="/dashboard/users">
                    <FaUser></FaUser> All User
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/updaterequest">
                    <FaPlusSquare></FaPlusSquare> All Request
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <FaHome></FaHome> Home
                  </Link>
                </li>
              </ul>
            </>
          ) : (
            <>
              <ul className="menu p-4 w-80 h-full bg-black  text-white">
                <li>
                  <Link to="/">
                    <FaHome></FaHome> Home
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/addrequest">
                    <FaPlusSquare></FaPlusSquare> Add Request
                  </Link>
                </li>

                <li>
                  <Link to="/dashboard/requesthistory">
                    <FaWallet></FaWallet> View Request Status
                  </Link>
                </li>
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
