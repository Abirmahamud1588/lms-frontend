import React, { useState } from "react";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import Swal from "sweetalert2";

const AddReq = () => {
  const [formData, setFormData] = useState({
    date: "",
    numberOfDays: "",
    reason: "",
  });
  const [axiosSecure] = useAxiosSecure();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("access-token");
    console.log("Token:", token); // Log token for debugging
    try {
      const response = await axiosSecure.post("/leaverequests", formData);
      console.log("Request successfully submitted!");
      Swal.fire("Your Submission has been completed", "success");
      setFormData({
        date: "",
        numberOfDays: "",
        reason: "",
      });
    } catch (error) {
      console.error(
        "Failed to submit request:",
        error.response?.data?.message || error.message
      );
    }
  };

  return (
    <div className=" w-2/3 ml-16 mt-16">
      <h1 className="text-2xl font-bold mb-6">Request for Leave</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg font-medium mb-2" htmlFor="date">
            Date
          </label>
          <input
            type="date"
            name="date"
            id="date"
            value={formData.date}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label
            className="block text-lg font-medium mb-2"
            htmlFor="numberOfDays"
          >
            Number of Days
          </label>
          <input
            type="number"
            name="numberOfDays"
            id="numberOfDays"
            value={formData.numberOfDays}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
            min="1"
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2" htmlFor="reason">
            Reason for Leave
          </label>
          <textarea
            name="reason"
            id="reason"
            value={formData.reason}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
            required
            rows="4"
          ></textarea>
        </div>
        <div>
          <button type="submit" className="btn text-white bg-black">
            Submit Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddReq;
