import React from "react";

const CarouselLoading = () => {
  return (
    <div className="slider  mx-auto relative grid grid-cols-2  max-w-full h-72 md:h-96 bg-slate-800 ">
      <div className="slide animate-pulse  bg-slate-600   w-full m-2 rounded-md "></div>
      <div className="slide animate-pulse     w-full p-4 ">
        <div className="h-4 w-1/3 bg-slate-600 md:mt-8"></div>
        <div className="h-8 w-3/4 md:w-1/2  bg-slate-600 mt-2"></div>
        <div className="h-2 w-1/3 bg-slate-600 mt-2"></div>
        <div className="h-2 w-1/3 bg-slate-600 mt-2"></div>

        <div className="h-2 w-full bg-slate-600 mt-8"></div>
        <div className="h-2 w-3/4 bg-slate-600 mt-2"></div>
        <div className="h-2 w-1/2 bg-slate-600 mt-2"></div>

        <div className="h-8 w-16 md:w-20 bg-slate-600 mt-4 md:mt-16 rounded-full"></div>
      </div>
    </div>
  );
};

export default CarouselLoading;
