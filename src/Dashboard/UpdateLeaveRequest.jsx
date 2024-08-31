import React from "react";
import useAxiosSecure from "../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const UpdateLeaveRequest = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: requests = [], refetch } = useQuery({
    queryKey: ["request"],
    queryFn: async () => {
      const res = await axiosSecure.get("/leaverequests");
      return res.data;
    },
  });

  const handleStatusChange = async (userId, newStatus) => {
    try {
      const res = await axiosSecure.patch(`/leaverequests/${userId}`, {
        status: newStatus,
      });
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          icon: "success",
          title: "Status Updated",
          text: `Status updated to ${newStatus}`,
          toast: true,
          position: "bottom-right",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: "Failed to update status",
        toast: true,
        position: "bottom-right",
      });
    }
  };

  return (
    <div className="w-2/3 ml-16 mt-16 h-full">
      <div className="flex justify-evenly bg-black py-4 items-center w-full">
        <h1 className="text-2xl text-white font-medium">
          Total requests: {requests.length}
        </h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-xl text-black">
              <th className="text-xl">SN</th>
              <th className="text-xl">Email</th>
              <th className="text-xl">Number of Days</th>
              <th className="text-xl">Reason</th>

              <th className="text-xl">Status</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request, index) => (
              <tr key={request._id}>
                <td>{index + 1}</td>
                <td>{request.email}</td>
                <td className=" ">{request.numberOfDays}</td>
                <td className=" ">{request.reason}</td>
                <td>
                  <select
                    value={request.status}
                    onChange={(e) =>
                      handleStatusChange(request._id, e.target.value)
                    }
                    className="select select-bordered w-full"
                  >
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UpdateLeaveRequest;
