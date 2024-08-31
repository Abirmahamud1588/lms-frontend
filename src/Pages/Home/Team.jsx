import React from "react";
import t1 from "/t1.jpg";
import t3 from "/t3.jpg";

const Team = () => {
  return (
    <div id="team" className="container mx-auto py-20">
      <h1 className=" px-10 md:px-0 text-2xl md:text-5xl font-bold text-center mb-12">
        Meet Our Professional Team Members
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="w-2/3 sm:w-[calc(50%-16px)] lg:w-[calc(25%-16px)] bg-white shadow-lg rounded-lg p-6">
          <img
            src={t3}
            alt="Team Member"
            className="w-full h-64 object-contain rounded-t-lg"
          />
          <div className="text-center mt-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Sarah Taylor
            </h2>
            <p className="text-gray-500">HR</p>
          </div>
        </div>

        <div className="w-2/3 sm:w-[calc(50%-16px)] lg:w-[calc(25%-16px)] bg-white shadow-lg rounded-lg p-6">
          <img
            src={t1}
            alt="Team Member"
            className="w-full h-64 object-contain rounded-t-lg"
          />
          <div className="text-center mt-4">
            <h2 className="text-xl font-semibold text-gray-800">Steve Smith</h2>
            <p className="text-gray-500">UI DESIGNER</p>
          </div>
        </div>

        <div className="w-2/3 sm:w-[calc(50%-16px)] lg:w-[calc(25%-16px)] bg-white shadow-lg rounded-lg p-6">
          <img
            src={t3}
            alt="Team Member"
            className="w-full h-64 object-contain rounded-t-lg"
          />
          <div className="text-center mt-4">
            <h2 className="text-xl font-semibold text-gray-800"> Zara Noor</h2>
            <p className="text-gray-500">WEB DEVELOPER</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
