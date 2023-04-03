import React, { useState, useEffect, useRef } from "react";
import Card from "../Card/Card";
import MovieLayout from "./MovieLayout";
import MovieList from "./MovieList";
import { Link } from "react-router-dom";
import { urlFor } from "../SanityConfig/client";

const SearchResult = (props) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  console.log(props.movies[0].slug.current);
  //   console.log(carousel.current && carousel.current.scrollWidth);
  useEffect(() => {
    if (!carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);
  return (
    <MovieLayout width={width} ref={carousel} label={props.title}>
      {props.movies.map((movie) => (
        <MovieList
          key={movie._id}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.5 },
          }}
        >
          <Link to={`/movies/${movie.slug.current}`}>
            <Card
              image={urlFor(movie.poster && movie.poster).url()}
              title={movie.title}
            />
          </Link>
        </MovieList>
      ))}
    </MovieLayout>
  );
};

export default SearchResult;
