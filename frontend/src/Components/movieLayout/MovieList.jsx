import React from "react";
import { motion } from "framer-motion";

const MovieList = (props) => {
  return (
    <motion.li
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.5 },
      }}
      className=""
    >
      {props.children}
    </motion.li>
  );
};

export default MovieList;
