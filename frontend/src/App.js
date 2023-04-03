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
  return <RouterProvider router={router} />;
}

export default App;
