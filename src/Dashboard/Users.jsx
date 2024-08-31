import React from "react";
import { FaTrashAlt, FaUserAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hook/useAxiosSecure";

const Users = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    fetch(`https://lms-backend-roan.vercel.app/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          toast.success(`${user.name} is an Admin Now`, {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        }
      });
  };

  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://lms-backend-roan.vercel.app/users/${user._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your user has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="w-full ml-16 mt-16 h-full">
        <div className="flex justify-evenly bg-black py-4 items-center w-full">
          <h1 className="text-2xl text-white font-medium">
            Total users: {users.length}
          </h1>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr className="text-xl text-black">
                <th className="text-xl">SN</th>
                <th className="text-xl">Name</th>
                <th className="text-xl">Email</th>
                <th className="text-xl">Role</th>
                <th className="text-xl">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id} user={user}>
                  <td>
                    <h3>{index + 1}</h3>
                  </td>
                  <td>
                    <span className="badge badge-success badge-md">
                      {user.name}
                    </span>
                  </td>
                  <td className="text-center">{user.email}</td>
                  <td>
                    {user.role === "admin" ? (
                      "Admin"
                    ) : (
                      <>
                        <button
                          onClick={() => handleMakeAdmin(user)}
                          className="btn bg-orange-900 text-white hover:text-yellow-700 btn-md"
                        >
                          <FaUserAlt />
                        </button>
                      </>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteUser(user)}
                      className="btn bg-slate-900 text-white hover:text-red-700 btn-md"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
