import React, { useEffect, useRef, useState, Suspense } from "react";
import { client, urlFor } from "../SanityConfig/client";
import { useLoaderData, Await } from "react-router-dom";
import CastCard from "../UI/Card/CastCard";
import MovieDetailLayout from "../UI/movieLayout/MovieDetailLayout";
import CarouselLoading from "../UI/Loading/CarouselLoading";
const MovieDetails = () => {
  const [movieDetail] = useLoaderData();

  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <>
      <Suspense fallback={<CarouselLoading />}>
        <Await resolve={movieDetail}>
          {(movie) => (
            <section className=" px-8 md:px-16 mt-12 ">
              <MovieDetailLayout
                image={urlFor(movie.poster && movie.poster).url()}
                title={movie.title}
                description={movie.overview[0].children[0].text}
                releaseDate={movie.releaseDate.substr(0, 10)}
              >
                <CastCard
                  movieDetail={movie}
                  ref={carousel}
                  label={"Cast Member"}
                  width={width}
                />
              </MovieDetailLayout>
            </section>
          )}
        </Await>
      </Suspense>
    </>
  );
};

export default MovieDetails;

export const loader = async ({ req, params }) => {
  try {
    const query = `*[slug.current == "${params.slug}"]{title,poster,releaseDate,overview,'cast': castMembers[].person->{name,slug,image}}`;
    const movieDetail = await client.fetch(query);
    return movieDetail;
  } catch (err) {
    console.log(err);
    return err;
  }
};
