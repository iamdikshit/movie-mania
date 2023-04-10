import React, { Suspense, useState, useRef, useEffect } from "react";
import { client, urlFor } from "../SanityConfig/client";
import { useLoaderData, Await, useNavigate } from "react-router-dom";
import MovieDetailLayout from "../UI/movieLayout/MovieDetailLayout";
import CastCard from "../UI/Card/CastCard";
import CarouselLoading from "../UI/Loading/CarouselLoading";
import { IoCalendarClear, IoFilm, IoArrowForward } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { useGoogleLogin } from "@react-oauth/google";
import { loggedIn, loggedOut, addUser } from "../Store/UserSlice";
import { motion } from "framer-motion";
import axios from "axios";

const Screening = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.user);
  const [screening] = useLoaderData();
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  // Login

  const login = useGoogleLogin({
    onSuccess: async (respose) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${respose.access_token}`,
            },
          }
        );

        localStorage.setItem("token", respose.access_token);
        const userData = {
          _id: res.data.sub,
          _type: "user",
          name: res.data.name,
          email: res.data.email,
          image: res.data.picture,
          token: respose.access_token,
        };

        client
          .createIfNotExists(userData)
          .then((response) => {
            dispatch(loggedIn());
            dispatch(addUser(userData));
            navigate(`${window.location.pathname}`);
          })
          .catch((error) => {
            console.error("Error creating or replacing user:", error);
          });
      } catch (err) {
        dispatch(loggedOut());
        console.log(err);
      }
    },
  });
  // end

  const imageUrl =
    "https://cdn.pixabay.com/photo/2016/11/16/11/29/coupon-1828620__340.png";
  const handleDownload = async () => {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "fileName.jpg";
    link.href = url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <>
      <Suspense fallback={<CarouselLoading />}>
        <Await resolve={screening}>
          {(screen) => (
            <section className=" px-8 md:px-16 mt-12 ">
              <MovieDetailLayout
                image={urlFor(screen.movie.poster && screen.movie.poster).url()}
                title={screen.title}
                description={screen.movie.overview[0].children[0].text}
                releaseDate={screen.movie.releaseDate.substr(0, 10)}
              >
                <CastCard
                  movieDetail={screen.movie}
                  ref={carousel}
                  label={"Cast Member"}
                  width={width}
                />
              </MovieDetailLayout>
              {/* Venu map and other details  */}

              <div className="mt-8">
                <h1 className="pt-4 text-base md:text-2xl">Venue</h1>
                <p className="pb-4 text-xm">
                  Note: we are working on this feature
                </p>
              </div>
              <div className="venu  grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-5">
                <motion.div
                  initial={{
                    opacity: 0,
                    x: -100,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: 1,
                  }}
                  className="map  md:col-span-3"
                >
                  <iframe
                    className=" w-full h-96  md:h-full"
                    title="myFrame"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27858.716818296372!2d79.50064990803939!3d29.213563867461517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a09addbd0c86d1%3A0x6793e360cb3d930f!2sHaldwani%2C%20Uttarakhand%20263139!5e0!3m2!1sen!2sin!4v1680790845699!5m2!1sen!2sin"
                    style={{ border: 0 }}
                    loading="lazy"
                  />
                </motion.div>
                <motion.div
                  initial={{
                    opacity: 0,
                    x: 100,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: 1,
                  }}
                  className={`other-details relative bg-slate-800 md:col-span-2 p-4 md:p-8 `}
                >
                  <div className="other-detail">
                    <h1 className="text-xl md:text-2xl font-bold text-center mb-4">
                      Get Your Ticket
                    </h1>

                    <div className="other-details mt-6 flex flex-col gap-4">
                      <div className=" flex items-center gap-2 ">
                        <span className="px-2 py-1 text-[.5rem] md:text-xs text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full">
                          Audience
                        </span>
                        <p className="capitalize">
                          {screen.allowedGuests
                            ? screen.allowedGuests
                            : "Member"}
                        </p>
                      </div>

                      <div className=" flex items-center gap-2 ">
                        <IoCalendarClear className="w-6 h-6 md:w-8 md:h-8" />
                        <p className="capitalize">
                          {screen.movie.releaseDate.substr(0, 10)}
                        </p>
                      </div>

                      <div className=" flex items-center gap-2 ">
                        <IoFilm className="w-6 h-6 md:w-8 md:h-8" />
                        <div className="capitalize flex-grow flex items-center gap-4">
                          <span>
                            {new Date(screen.beginAt).toLocaleTimeString(
                              "en-US"
                            )}
                          </span>
                          <IoArrowForward />
                          <span>
                            {new Date(screen.endAt).toLocaleTimeString("en-US")}
                          </span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={handleDownload}
                      className="mt-4 w-full p-2 bg-gradient-to-r from-pink-600 to-red-600
                  hover:bg-gradient-to-r
                  hover:from-pink-800
                  hover:to-red-800
                  transition
                  duration-300
                  ease-in-out"
                    >
                      Download Ticket
                    </button>
                  </div>

                  <div
                    className={`absolute ${
                      isLoggedIn ? "hidden" : "flex"
                    } bg-slate-700 bg-opacity-40 backdrop-blur-sm top-0 left-0 w-full  h-full  items-center justify-center`}
                  >
                    <button
                      onClick={() => login()}
                      className="mt-4 px-16 py-2 bg-gradient-to-r from-pink-600 to-red-600
                  hover:bg-gradient-to-r
                  hover:from-pink-800
                  hover:to-red-800
                  transition
                  duration-300
                  ease-in-out
                  
                  
                  "
                    >
                      Login
                    </button>
                  </div>
                </motion.div>
              </div>
            </section>
          )}
        </Await>
      </Suspense>
    </>
  );
};

export default Screening;

export const loader = async ({ request, params }) => {
  try {
    const query = `
    *[_type == "screening"  && movie->slug.current == "${params.slug}" && published == true ]{
      title,
        location,
        published,
        beginAt,
        endAt,
        allowedGuests,
        ticket,
        movie->{
          poster,
          slug,
          overview,
          releaseDate,
    'cast': castMembers[].person->{name,slug,image}
    
        }
    }
    `;
    const screening = await client.fetch(query);
    return screening;
  } catch (err) {
    console.log(err);
    return err;
  }
};
