import React, { Suspense } from "react";

import Movies from "../UI/movieLayout/Movies";

import { defer } from "react-router-dom";
import { client } from "../SanityConfig/client";
import { useLoaderData, Await } from "react-router-dom";
import MovieLoading from "../UI/Loading/MovieLoading";
import Hero from "../UI/Hero/Hero";
const Home = () => {
  const { latestMovies, PopularMovies } = useLoaderData();

  return (
    <>
      {/* <Categories /> */}
      <Hero />
      <Suspense fallback={<MovieLoading />}>
        <Await resolve={latestMovies}>
          {(movies) => <Movies title={"Latest Movies"} movies={movies} />}
        </Await>
      </Suspense>

      <Suspense fallback={<MovieLoading />}>
        <Await resolve={PopularMovies}>
          {(movies) => <Movies title={"Popular Movies"} movies={movies} />}
        </Await>
      </Suspense>
    </>
  );
};

export default Home;

const getLatestMovie = async () => {
  try {
    const query = "*[_type=='movie']| order(releaseDate desc)[0...10]";
    const latestMovie = await client.fetch(query);

    return latestMovie;
  } catch (err) {
    console.log(err);
  }
};

const getPopularMovie = async () => {
  try {
    const query = "*[_type=='movie'] | order(popularity desc)[0...10]";
    const popularMovie = await client.fetch(query);
    return popularMovie;
  } catch (err) {
    console.log(err);
  }
};

export const loader = async () => {
  return defer({
    latestMovies: getLatestMovie(),
    PopularMovies: await getPopularMovie(),
  });
};
