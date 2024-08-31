import React from "react";
import sd3 from "/sd3.png";
const Leftside = () => {
  return (
    <div className="bg-[#ffff]">
      <div className="container mx-auto flex   flex-col-reverse md:flex-row px-3 py-10 md:py-24 justify-center items-center ">
        <div className="w-full md:w-1/2 text-2xl md:text-5xl font-bold ml-0 md:ml-5">
          <h1>No spreadsheets, no paper.</h1>
          <p className="text-[16px] md:text-[18px] font-normal my-5 leading-6">
            1.Request leave online via our website or mobile app.
          </p>
          <p className="text-[16px] md:text-[18px] font-normal my-5 leading-6">
            2.Your manager can then approve or decline with just one click.
          </p>
          <p className="text-[16px] md:text-[18px] font-normal my-5 leading-6">
            3. It’s fast and convenient.
          </p>
          <div>
            <p className="text-[16px] md:text-[18px] font-normal my-5 leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              maxime laborum, mollitia deleniti ut nulla quidem voluptas
              cupiditate labore rerum optio necessitatibus? Provident cupiditate
              quos excepturi quaerat, ratione incidunt. Blanditiis!{" "}
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 mb-3  ">
          <img src={sd3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Leftside;
