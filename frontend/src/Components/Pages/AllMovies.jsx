import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import Card from "../UI/Card/Card";
import { client, urlFor } from "../SanityConfig/client";
import { useLoaderData, Await } from "react-router-dom";
import MovieLoading from "../UI/Loading/MovieLoading";
const AllMovies = () => {
  const Allmovies = useLoaderData();
  return (
    <section className="px-8 md:px-16 mt-8 md:mt-12">
      <h1 className="text-white text-2xl md:text-4xl py-4">All Movies</h1>
      <div className="all-movies flex items-center justify-center md:justify-start  gap-6 md:gap-8 flex-wrap mt-8">
        <Suspense fallback={<MovieLoading />}>
          <Await resolve={Allmovies}>
            {(movies) =>
              movies.map((movie, index) => (
                <Link key={index} to={`/movies/${movie.slug.current}`}>
                  <Card
                    image={urlFor(movie.poster).url()}
                    title={movie.title}
                  />
                </Link>
              ))
            }
          </Await>
        </Suspense>
      </div>
    </section>
  );
};

export default AllMovies;

export const loader = async () => {
  try {
    const query = "*[_type=='movie']";
    const AllMovies = await client.fetch(query);

    return AllMovies;
  } catch (err) {
    console.log(err);
  }
};
