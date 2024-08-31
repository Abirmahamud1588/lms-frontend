import React from "react";
import img1 from "/1.png";
import img2 from "/2.png";
import img3 from "/3.png";

const Boxsec = () => {
  return (
    <div className="container mx-auto py-20 px-3 md:px-14">
      <div className="flex flex-col md:flex-row gap-10 justify-center">
        <div className="w-full md:w-1/3 flex flex-col items-center text-center">
          <img src={img1} className="w-20 mb-4" alt="" />
          <h1 className="text-[20px]  md:text-[25px] font-semibold">
            Track overtime and time
          </h1>
          <p className="text-[16px] md:text-[18px] text-gray-600">
            Record time off in lieu earned and taken. TOIL automatically adds to
            an employee’s leave allowance.
          </p>
        </div>
        <div className="w-full md:w-1/3 flex flex-col items-center text-center">
          <img src={img2} className="w-20 mb-4" alt="" />
          <h1 className="text-[20px]  md:text-[25px] font-semibold">
            Allowance tracking
          </h1>
          <p className="text-[16px] md:text-[18px] text-gray-600">
            Record time off in lieu earned and taken. TOIL automatically adds to
            an employee’s leave allowance.
          </p>
        </div>
        <div className="w-full md:w-1/3 flex flex-col items-center text-center">
          <img src={img3} className="w-20 mb-4" alt="" />
          <h1 className="text-[20px]  md:text-[25px] font-semibold">
            Fully configurable
          </h1>
          <p className="text-[16px] md:text-[18px] text-gray-600">
            Record time off in lieu earned and taken. TOIL automatically adds to
            an employee’s leave allowance.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-10 justify-center mt-7">
        <div className="w-full md:w-1/3 flex flex-col items-center text-center">
          <img src={img1} className="w-20 mb-4" alt="" />
          <h1 className="text-[20px]  md:text-[25px] font-semibold">
            Track overtime and time
          </h1>
          <p className="text-[16px] md:text-[18px] text-gray-600">
            Record time off in lieu earned and taken. TOIL automatically adds to
            an employee’s leave allowance.
          </p>
        </div>
        <div className="w-full md:w-1/3 flex flex-col items-center text-center">
          <img src={img2} className="w-20 mb-4" alt="" />
          <h1 className="text-[20px]  md:text-[25px] font-semibold">
            Allowance tracking
          </h1>
          <p className="text-[16px] md:text-[18px] text-gray-600">
            Record time off in lieu earned and taken. TOIL automatically adds to
            an employee’s leave allowance.
          </p>
        </div>
        <div className="w-full md:w-1/3 flex flex-col items-center text-center">
          <img src={img3} className="w-20 mb-4" alt="" />
          <h1 className="text-[20px]  md:text-[25px] font-semibold">
            Fully configurable
          </h1>
          <p className="text-[16px] md:text-[18px] text-gray-600">
            Record time off in lieu earned and taken. TOIL automatically adds to
            an employee’s leave allowance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Boxsec;
