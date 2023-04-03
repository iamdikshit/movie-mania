import React from "react";
import { IoArrowBackCircle, IoArrowForwardCircle } from "react-icons/io5";
import { urlFor } from "../SanityConfig/client";
import { Link } from "react-router-dom";

const Carousel = ({ data, currentIndex, OnClickNext, OnClickPrev }) => {
  return (
    <div className="slider mx-auto relative  max-w-full h-72 md:h-96   overflow-x-hidden  ">
      {data.map((d, index) => (
        <div
          style={{
            transform: ` translateX(${100 * (index - currentIndex)}%) `,
          }}
          key={index}
          className={`slide absolute  bg-slate-800 grid h-72 md:h-96 w-full grid-cols-2 transition-all duration-500 ease-in-out sm:grid-cols-2`}
        >
          <div
            style={{ backgroundImage: `${d.img}` }}
            className="flex h-72 md:h-96 flex-col  items-start justify-start gap-2 md:gap-3 order-last p-4   md:px-4 md:py-8"
          >
            <span className="px-2 py-1 text-[.5rem] md:text-xs text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full">
              Premier
            </span>
            <h1 className=" text-lg md:text-4xl leading-tight  text-white md:font-bold">
              {d.title}
            </h1>
            <p className="text-white text-xs">
              Start : {new Date(d.beginAt).toLocaleTimeString("en-US")}
            </p>
            <p className="text-white text-xs">
              End : {new Date(d.endAt).toLocaleTimeString("en-US")}
            </p>
            <p className="text-white text-xs">Audiance : {d.allowedGuests}</p>
            <p className="text-sm  text-white hidden md:block">
              <i>{d.movie.overview[0].children[0].text.substr(0, 150)}...</i>
            </p>
            <Link to={`/movies/${d.movie.slug.current}`}>
              <button className="px-4 py-2 bg-gradient-to-r from-pink-600 to-red-600 rounded-full text-white text-xs md:text-lg shadow-xl mt-4">
                Explore
              </button>
            </Link>
          </div>

          <img
            className=" h-72 md:h-96 w-full object-cover rounded-xl p-2"
            src={urlFor(d.movie.poster).url()}
            alt={d.title}
          />
        </div>
      ))}

      <button
        onClick={OnClickPrev}
        className="slider__btn slider__btn--left absolute top-1/2 z-10 border-none bg-transparent  shadow-xl  cursor-pointer left-[6%] -translate-x-1/2 -translate-y-1/2"
      >
        <IoArrowBackCircle className="w-8 h-8  text-gray-400 opacity-60" />
      </button>
      <button
        onClick={OnClickNext}
        className="slider__btn slider__btn--right absolute top-1/2 z-10 border-none bg-transparent shadow-xl  cursor-pointer right-[6%] translate-x-1/2 -translate-y-1/2"
      >
        <IoArrowForwardCircle className="w-8 h-8  text-gray-400 opacity-60" />
      </button>
      <div className="dots"></div>
    </div>
  );
};

export default Carousel;
