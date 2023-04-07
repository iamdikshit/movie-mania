import React, { forwardRef } from "react";
import { urlFor } from "../../SanityConfig/client";
import { motion } from "framer-motion";

const CastCard = forwardRef(({ width, movieDetail, label }, ref) => {
  return (
    <div className="crew-members">
      <h1 className="text-sm text-white mt-2">{label}</h1>
      <motion.div ref={ref} className="Card py-4 overflow-x-hidden">
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
  );
});

export default CastCard;
