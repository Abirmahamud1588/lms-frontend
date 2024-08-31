import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import useAdmin from "../Hook/useAdmin";
import { AuthContext } from "../Context/AuthProvider";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin();

  if (loading || isAdminLoading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/login"></Navigate>;
};

export default AdminRoute;
