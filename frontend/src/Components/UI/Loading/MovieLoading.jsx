import React from "react";

const MovieLoading = () => {
  const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <div className="px-8 md:px-16 flex items-center gap-4">
        {count.map((el) => (
          <div key={el} className=" animate-pulse flex flex-col gap-2">
            <div className="h-44 w-36 ">
              <div className="h-full w-full rounded-lg object-cover bg-[#34353e]"></div>
            </div>
            <div className="text-xs w-3/4 h-2 bg-[#34353e] md:text-sm text-slate-200 py-1 mt-auto"></div>
            <div className="text-xs w-1/2    h-2 bg-[#34353e] md:text-sm text-slate-200 py-1 mt-auto"></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MovieLoading;
