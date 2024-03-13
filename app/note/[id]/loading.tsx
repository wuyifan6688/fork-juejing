import React from "react";

function Loading() {
  return (
    <div className="w-5/6 bg-white border-r-2 my-4 ml-2 mr-10">
      <div className="mt-10 w-full flex h-20">
        <div className="w-2/4 bg-gray-50 ml-10 h-10 animate-flowWater"></div>{" "}
        <div className="w-1/3 bg-gray-50 ml-10 h-10 rounded-2xl animate-flowWaterw"></div>
      </div>
      <div className="ml-10 w-full">
        <div className="w-11/12 h-10 my-3 bg-gray-50 animate-flowWater"></div>
        <div className="w-11/12 h-10 my-3 bg-gray-50 animate-flowWater"></div>
        <div className="w-11/12 h-10 my-3 bg-gray-50 animate-flowWater"></div>
        <div className="w-11/12 h-10 my-3 bg-gray-50 animate-flowWater"></div>
      </div>
    </div>
  );
}

export default Loading;
