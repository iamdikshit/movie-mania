import Root from "./Components/Pages/Root";
import Home from "./Components/Pages/Home";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { loader as Movies } from "./Components/Pages/Home";
import MovieDetails from "./Components/Pages/MovieDetails";
import AllMovies from "./Components/Pages/AllMovies";
import { loader as AllMoviesLoader } from "./Components/Pages/AllMovies";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import { loader as DetailMovie } from "./Components/Pages/MovieDetails";
import Screening from "./Components/Pages/Screening";
import { loader as screeningLoader } from "./Components/Pages/Screening";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { useEffect } from "react";
import { client } from "./Components/SanityConfig/client";
import { useDispatch } from "react-redux";
import { loggedIn, addUser } from "./Components/Store/UserSlice";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: Movies,
      },
      {
        path: "movies",
        children: [
          {
            index: true,
            element: <AllMovies />,
            loader: AllMoviesLoader,
          },
          {
            path: ":slug",
            element: <MovieDetails />,
            loader: DetailMovie,
          },
        ],
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },

      {
        path: "screening",
        children: [
          {
            path: ":slug",
            element: <Screening />,
            loader: screeningLoader,
          },
        ],
      },
    ],
  },
  // {
  //   path: "movies/:slug",
  //   element: <MovieDetails />,
  //   loader: DetailMovie,
  //   children: [{}],
  // },
]);
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    client
      .fetch(`*[_type=="user" && token=="${token}"]`)
      .then((res) => {
        if (res.length === 1) {
          dispatch(loggedIn());
          dispatch(addUser(res[0]));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  );
}

export default App;
