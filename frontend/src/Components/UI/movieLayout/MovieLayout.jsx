import React from "react";
import { motion } from "framer-motion";

const MovieLayout = React.forwardRef((props, ref) => {
  return (
    <section className={`${props.label}`}>
      <div className="mt-12 px-8 md:px-16 ">
        <h1 className=" text-xl font-semibold text-slate-200 ">
          {props.label}
        </h1>
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
