import { getMovies } from "@/helpers/moviesFunction";
import React from "react";

const Movies = async () => {
  const movies = await getMovies("now_playing");
  return <div>Movies</div>;
};

export default Movies;
