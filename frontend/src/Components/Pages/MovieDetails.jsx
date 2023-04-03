import React, { useEffect, useRef, useState } from "react";
import { client, urlFor } from "../SanityConfig/client";
import { useLoaderData } from "react-router-dom";
// import { IoArrowBackCircleSharp } from "react-icons/io5";
import { motion } from "framer-motion";

const MovieDetails = () => {
  const [movieDetail] = useLoaderData();
  const description = movieDetail.overview[0].children[0].text;

  const [width, setWidth] = useState(0);
  const carousel = useRef();
  // let navigate = useNavigate();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <>
      {/* <header className="absolute top-4 left-2">
        <Link>
          <button onClick={() => navigate(-1)}>
            <IoArrowBackCircleSharp className="w-8 h-8 text-white shadow-lg" />
          </button>
        </Link>
      </header> */}
      <main className=" px-8 md:px-16 mt-12 ">
        {/* <div className="w-full h-screen bg-black opacity-70   fixed -z-10 "></div>
        <img
          className="w-full h-full fixed blur-[2px] blur  top-0 left-0 object-cover -z-20"
          src={urlFor(movieDetail.poster && movieDetail.poster).url()}
          alt={movieDetail.title}
        /> */}
        <div className="mx-auto bg-slate-800 rounded-lg  p-2 md:py-8 grid grid-cols-1 md:grid-cols-3 gap-2  ">
          <div className="poster container mx-auto  w-full md:w-72 h-96  overflow-hidden  ">
            <img
              className="w-full h-full object-cover  rounded-lg"
              src={urlFor(movieDetail.poster && movieDetail.poster).url()}
              alt={movieDetail.title}
            />
          </div>
          <div className="movie-details p-2 md:pr-8 py-4 md:col-span-2 flex flex-col gap-2 ">
            <h1 className="title text-white text-2xl md:text-4xl leading-tight  font-bold">
              {movieDetail.title}
            </h1>
            <div className="release flex items-center gap-1">
              <span className="text-xs text-white">Release </span>
              <span className="text-xs text-white  py-1 px-2  bg-slate-800 rounded-full">
                {movieDetail.releaseDate.substr(0, 10)}
              </span>
            </div>
            {/* Cast member */}
            <div className="crew-members">
              <h1 className="text-sm text-white mt-2">Cast Member</h1>
              <motion.div
                ref={carousel}
                className="Card py-4 overflow-x-hidden"
              >
                <motion.ul
                  drag="x"
                  dragConstraints={{ right: 0, left: -width }}
                  className="flex items-start gap-4 py-2 cursor-grab"
                >
                  {movieDetail.cast.map((cast, index) => (
                    <li key={index}>
                      <div className="crew flex flex-col items-center justify-center gap-1">
                        <div className="w-12 h-12 rounded-full mx-2 overflow-hidden">
                          <img
                            className="w-full h-full object-cover"
                            src={urlFor(cast.image).url()}
                            alt=""
                          />
                        </div>
                        <h1 className="text-white text-xs text-center mt-auto">
                          {cast.name}
                        </h1>
                      </div>
                    </li>
                  ))}
                </motion.ul>
              </motion.div>
            </div>

            <div className="overview">
              <p className="text-slate-200 text-xs md:text-lg">
                <em>{description}</em>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MovieDetails;

export const loader = async ({ req, params }) => {
  try {
    const query = `*[slug.current == "${params.slug}"]{title,poster,releaseDate,overview,'cast': castMembers[].person->{name,slug,image}}`;
    const movieDetail = await client.fetch(query);
    return movieDetail;
  } catch (err) {
    console.log(err);
    return err;
  }
};
