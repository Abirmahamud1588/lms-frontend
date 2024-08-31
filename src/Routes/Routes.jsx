import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Sign from "../Sign/Sign";
import Privateroute from "./Privateroute";
import Dashboard from "../Layout/Dashboard";
import Users from "../Dashboard/Users";
import AddReq from "../Dashboard/employee/AddReq";
import UpdateLeaveRequest from "../Dashboard/UpdateLeaveRequest";
import Reqhis from "../Dashboard/employee/Reqhis";
import AdminRoute from "./AdminRoute";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/sign",
        element: <Sign></Sign>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <Privateroute>
        <Dashboard></Dashboard>
      </Privateroute>
    ),
    children: [
      {
        path: "users",
        element: <Users></Users>,
      },
      {
        path: "addrequest",
        element: <AddReq></AddReq>,
      },
      {
        path: "updaterequest",
        element: (
          <AdminRoute>
            <UpdateLeaveRequest></UpdateLeaveRequest>
          </AdminRoute>
        ),
      },
      {
        path: "requesthistory",
        element: <Reqhis></Reqhis>,
      },
    ],
  },
]);
