import React, { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { AuthContext } from "../../Context/AuthProvider";

const Reqhis = () => {
  const { user } = useContext(AuthContext);
  const [his, setHis] = useState([]);
  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    if (user) {
      fetchreqhistory();
    }
  }, [user]);

  const fetchreqhistory = async () => {
    try {
      const response = await axiosSecure.get("/myrequest");
      setHis(response.data);
    } catch (error) {
      console.error("Error fetching req history:", error);
    }
  };

  const getBadgeColor = (status) => {
    switch (status) {
      case "pending":
        return "badge-warning";
        return "badge-success";
      case "rejected":
        return "badge-error";
      default:
        return "badge-secondary";
    }
  };

  return (
    <div className="w-2/3 mx-auto">
      <h1 className="text-2xl font-bold mb-4 bg-black text-center text-white py-3">
        Request History
      </h1>
      <div className="overflow-x-auto">
        <table className="table ">
          <thead>
            <tr className="text-xl text-black">
              <th className="text-xl">SN</th>
              <th className="text-xl">Email</th>
              <th className="text-xl">Number of Days</th>
              <th className="text-xl">Status</th>
              <th className="text-xl">Reason</th>
              <th className="text-xl">Starting Date</th>
            </tr>
          </thead>
          <tbody>
            {his.map((request, index) => (
              <tr key={request._id}>
                <td>{index + 1}</td>
                <td>{request.email}</td>
                <td className="">{request.numberOfDays}</td>
                <td>
                  <span
                    className={`badge py-3 capitalize  ${getBadgeColor(
                      request.status
                    )}`}
                  >
                    {request.status}
                  </span>
                </td>
                <td>{request.reason}</td>
                <td>{request.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reqhis;
