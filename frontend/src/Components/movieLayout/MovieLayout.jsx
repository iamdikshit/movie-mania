import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const MovieLayout = React.forwardRef((props, ref) => {
  return (
    <section className={`${props.label}`}>
      <div className="mt-12 px-8 md:px-16 flex items-center justify-between">
        <h1 className=" text-xl font-semibold text-slate-200 ">
          {props.label}
        </h1>
        <Link>
          <span className="text-white hover:text-blue-500 text-sm">
            View All
          </span>
        </Link>
      </div>
      <motion.div
        ref={ref}
        className="Card py-4 pl-8 md:px-16 overflow-x-hidden"
      >
        <motion.ul
          drag="x"
          dragConstraints={{ right: 0, left: -props.width }}
          className="inner-card flex gap-6 md:gap-8 cursor-grab"
        >
          {props.children}
        </motion.ul>
      </motion.div>
    </section>
  );
});

export default MovieLayout;
