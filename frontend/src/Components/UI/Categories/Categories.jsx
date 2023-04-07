import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
const Categories = () => {
  const [width, setWidth] = useState();
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const categories = [
    "All",
    "Action",
    "Comedy",
    "Romance",
    "Drama",
    "Thriller",
    "Horror",
    "Bollywood",
    "Tollywood",
    "Hollywood",
  ];
  return (
    <section className="categories  pt-8">
      <h1 className="px-8 md:px-16 text-xl font-semibold text-slate-200">
        Categories
      </h1>
      <motion.div ref={carousel} className="Carousel py-4 overflow-x-hidden">
        <motion.ul
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="pl-8 md:px-16 inner-carousel cursor-grab text-slate-200  flex gap-4"
        >
          {categories.map((category, index) => (
            <li
              className={`py-2 px-4 text-slate-200 text-sm bg-[#34353e] rounded-full `}
              key={category + index}
            >
              {category}
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
};

export default Categories;
