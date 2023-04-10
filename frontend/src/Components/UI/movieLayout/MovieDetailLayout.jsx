import React from "react";
import { motion } from "framer-motion";
const MovieDetailLayout = (props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 1,
      }}
      className="mx-auto bg-slate-800 rounded-lg  p-2 md:py-8 grid grid-cols-1 md:grid-cols-3 gap-2  "
    >
      <div className="poster container mx-auto  w-full md:w-72 h-96  overflow-hidden  ">
        <img
          className="w-full h-full object-cover  rounded-lg"
          src={props.image}
          alt={props.title}
        />
      </div>
      <div className="movie-details p-2 md:pr-8 py-4 md:col-span-2 flex flex-col gap-2 ">
        <h1 className="title text-white text-2xl md:text-4xl leading-tight  font-bold">
          {props.title}
        </h1>
        <div className="release flex items-center mt-4  gap-1">
          <span className="  px-2 py-1 text-[.5rem] md:text-xs text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full">
            Release
          </span>
          <span className="text-xs text-white  py-1 px-2  bg-slate-800 rounded-full">
            {props.releaseDate}
          </span>
        </div>
        {props.children}

        <div className="overview">
          <p className="text-slate-200 text-xs md:text-lg">
            <em>{props.description}</em>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default MovieDetailLayout;
