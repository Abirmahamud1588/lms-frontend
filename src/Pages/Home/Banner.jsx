import React from "react";
import sd from "/sd.png";
const Banner = () => {
  return (
    <div className="bg-[#F2F8FE]">
      <div className="container mx-auto flex   flex-col-reverse md:flex-row px-3 py-10 md:py-24 justify-center items-center ">
        <div className="w-full md:w-1/2 text-2xl md:text-5xl font-bold ml-0 md:ml-5">
          <h1>Make Better Life With Trusted Leave Management Sytem</h1>
          <p className="text-[16px] md:text-[18px] font-normal my-5 leading-6">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </p>
          <div>
            <button className="btn bg-[#020DFF] mb-3  rounded text-white text-[16px] md:text-2xl px-7">
              Explore Now
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 mb-3  ">
          <img src={sd} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
