import React from "react";
import { motion } from "framer-motion";
import { images } from "../../assets";
const About = () => {
  return (
    <div className="py-16  mt-8 md:mt-16">
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1,
        }}
        className="container m-auto px-6 bg-slate-800 py-12 text-gray-600 md:px-12 xl:px-6"
      >
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img src={images.movie} loading="lazy" alt="" />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-white font-bold md:text-4xl">
              About Us
            </h2>
            <h2 className="text-xxl text-white font-semibold md:text-2xl mt-4">
              Welcome to our movie website, where we bring you the latest news,
              reviews, and updates from the world of cinema.
            </h2>
            <motion.p
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
              className="mt-6 text-white"
            >
              Our team of dedicated writers and movie enthusiasts is committed
              to providing you with a comprehensive and entertaining platform
              that caters to all your movie needs. At our website, we cover a
              wide range of movies, from Hollywood blockbusters to indie films,
              and everything in between. Our mission is to help you stay
              up-to-date with the latest releases, so you never miss a movie
              that's worth watching.
            </motion.p>
            <motion.p
              initial={{
                opacity: 0,
                y: -100,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.5,
              }}
              className="mt-4 text-white"
            >
              Thank you for visiting our website, and we hope you enjoy
              exploring our content as much as we enjoy creating it for you.
            </motion.p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
