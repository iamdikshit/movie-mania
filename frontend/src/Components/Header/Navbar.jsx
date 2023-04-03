import React, { useState, useEffect } from "react";
import { client } from "../SanityConfig/client";
import { images } from "../../assets";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  IoMenuOutline,
  IoCloseOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { motion } from "framer-motion";
import NavList from "./NavList";
import { addMovies, toggleLoading } from "../Store/SearchSlice";
import { useSelector } from "react-redux";
import SearchLoading from "../Loading/SearchLoading";

const Navbar = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.search.isLoading);
  const searchData = useSelector((state) => state.search.movies);

  //************************* */
  const [isOpen, setIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [noData, setNodata] = useState(false);

  const getSearchInputData = (e) => {
    setSearchInput(e.target.value);
  };
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const getData = async () => {
      if (searchInput !== "") {
        dispatch(toggleLoading());
        const query = `*[_type == "movie" && title match "${searchInput}*"]`;
        const latestMovie = await client.fetch(query);
        // console.log(latestMovie);
        if (latestMovie.length <= 0) {
          setNodata(true);
        } else {
          setNodata(false);
        }
        dispatch(addMovies(latestMovie));
        dispatch(toggleLoading());
        // return latestMovie;
      } else {
        dispatch(addMovies([]));
        setNodata(false);
      }
    };

    const timeOutId = setTimeout(getData, 1000);

    // getData();
    return () => {
      clearTimeout(timeOutId);
    };
  }, [searchInput, dispatch]);

  return (
    <header className=" w-full bg-transparent px-8 md:px-16 flex flex-col justify-center pt-8 z-10">
      <nav className="flex items-center justify-between">
        <div className="user-info flex items-start gap-2">
          <img className="w-8 h-8 shadow-lg" src={images.avatar} alt="user" />
          <div>
            <h1 className="text-xs text-white">Welcome Dikshit👋</h1>
            <h1 className="text-sm text-white">Lets relax get your movies!</h1>
          </div>
        </div>
        {/* Desktop view */}

        <div className="menu hidden md:block">
          <NavList
            classes={{
              className: "text-white flex gap-8 uppercase",
            }}
          />
        </div>

        {/* Mobile view  */}
        <div className="menu-button md:hidden">
          <button className={`bg-transparent`} onClick={toggleMenu}>
            <IoMenuOutline className="text-white w-8 h-8 " />
          </button>
        </div>
        <motion.div
          initial={{
            x: "100%",
            opacity: 0,
          }}
          whileInView={{
            x: "0%",
            opacity: 1,
          }}
          className={`menu absolute bg-[#34353e] bg-opacity-10 backdrop-blur-sm shadow-sm right-0 top-0 w-1/2 h-screen  z-20 px-2 pt-24 ${
            !isOpen ? "hidden" : ""
          } md:hidden`}
        >
          <NavList
            classes={{
              className: "text-white flex flex-col gap-2",
            }}
          />

          <button
            className="bg-transparent absolute top-6 right-6  "
            onClick={toggleMenu}
          >
            <IoCloseOutline className="text-white w-8 h-8 " />
          </button>
        </motion.div>
      </nav>
      <div>
        <div className="search relative mx-auto w-full max-w-lg mt-8 flex items-center  gap-2 bg-[#34353e] p-2 rounded-full shadow-md">
          <button className="">
            <IoSearchOutline className="w-4 h-4 text-white" />
          </button>
          <input
            type="Search "
            value={searchInput}
            className="block flex-grow bg-transparent focus:outline-none text-white"
            placeholder="Search movies..."
            onChange={getSearchInputData}
          />

          {!isLoading && searchInput.length > 0 && noData && (
            <div className="absolute z-20 overflow-y-scroll w-full max-w-lg max-h-48 bg-[#34353e] top-12  -left-0 rounded-md bg-opacity-70 backdrop-blur-sm p-2 ">
              <ul>
                <li className="p-2 text-center text-white cursor-pointer">
                  No movie found
                </li>
              </ul>
            </div>
          )}

          {searchData.length > 0 && (
            <div className="absolute z-20 overflow-y-scroll w-full max-w-lg max-h-48 bg-[#34353e] top-12  -left-0 rounded-md bg-opacity-70 backdrop-blur-sm  p-2 ">
              <ul>
                {isLoading && <SearchLoading />}

                {!isLoading &&
                  searchData.length > 0 &&
                  searchData.map((m, index) => (
                    <Link to={`/movies/${m.slug.current}`}>
                      <li
                        key={index}
                        className={`p-2 ${
                          searchData.length <= 1
                            ? ""
                            : "border-b border-b-gray-500"
                        }  text-white  hover:text-blue-500 cursor-pointer     last:border-none`}
                      >
                        {m.title}
                      </li>
                    </Link>
                  ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
