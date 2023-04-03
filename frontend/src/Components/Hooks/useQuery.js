import { client } from "../SanityConfig/client";
import { useState } from "react";
export const useQuery = () => {
  const [popularMovie, setPopularMovie] = useState([]);
  const fetchByQuery = async (query) => {
    // const query = "*[_type=='movie'] | order(popularity desc)[0...10]";
    const res = await client.fetch(query);
    setPopularMovie(res);
    // client
    //   .fetch(query)
    //   .then((data) => setPopularMovie(data))
    //   .catch((err) => console.log(err));
  };

  return {
    popularMovie,
    fetchByQuery,
  };
};
