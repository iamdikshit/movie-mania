import React, { useEffect, useState } from "react";
import { client } from "../../SanityConfig/client";
import CarouselLoading from "../Loading/CarouselLoading";
import Carousel from "../Card/Carousel";
// import { motion } from "framer-motion";
const Hero = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const query = `*[_type=="screening" && published == true]{
        title,
          location,
          beginAt,
          endAt,
          allowedGuests,
          movie->{
            poster,
            slug,
            overview
          }
      }`;
      const result = await client.fetch(query);
      setData(result);
      setIsLoading(false);
      // console.log(result);
    };

    const timeIdentifier = setTimeout(getData, 1000);
    return () => {
      clearTimeout(timeIdentifier);
    };
  }, []);

  // const [width, setWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousHandler = () => {
    console.log(currentIndex);
    if (currentIndex === 0) {
      setCurrentIndex(data.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextHandler = () => {
    console.log(currentIndex);
    if (currentIndex === data.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentIndex(
          currentIndex === data.length - 1 ? 0 : currentIndex + 1
        ),
      3000
    );
    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, data.length]);

  return (
    <section className="section px-8 md:px-16 py-12" id="section--3">
      {isLoading && <CarouselLoading />}

      {!isLoading && (
        <Carousel
          data={data}
          currentIndex={currentIndex}
          OnClickNext={nextHandler}
          OnClickPrev={previousHandler}
        />
      )}
    </section>
  );
};

export default Hero;
