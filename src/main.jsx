import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Pokedex from "./Pokedex.jsx";
import PokemonDetails from "./PokemonDetails.jsx";
import About from "./About.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Pokedex /> },
      { path: "/pokemon/:name", element: <PokemonDetails /> },
      { path: "/about", element: <About /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
