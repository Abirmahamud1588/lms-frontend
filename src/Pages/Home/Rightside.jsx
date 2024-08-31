import React from "react";
import sd2 from "/sd2.png";
const Rightside = () => {
  return (
    <div className="bg-[#F2F8FE]">
      <div className="container mx-auto flex  flex-col md:flex-row px-3 py-10 md:py-24 justify-center items-center ">
        <div className="w-full m-auto md:w-1/2 mb-3  ">
          <img className="w-[80%]" src={sd2} alt="" />
        </div>

        <div className="w-full md:w-1/2 text-2xl md:text-5xl font-bold mr-0 md:mr-10 mt-3">
          <h1>
            We Build Lasting Relationships Between Candidates & Businesses
          </h1>
          <p className="text-[16px] md:text-[18px] font-normal my-5 leading-6">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </p>
          <p className="text-[16px] md:text-[18px] font-normal my-5 leading-6">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </p>
          <div>
            <button className="btn bg-[#020DFF] mb-3  rounded text-white text-2xl px-7">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightside;
