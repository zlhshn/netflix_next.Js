import React from "react";
import { getMovies } from "@/helpers/movieFunctions";
import HeroSection from "./components/HeroSection";
import MovieSection from "./components/MovieSection";

export const metadata = {
  title: "Movies",
  description: "a movie platform",
};

const Main = async () => {
  const movies = await getMovies("now_playing");


  return (
    <>
      <HeroSection
        title={movies[0]?.title}
        overview={movies[0]?.overview}
        id={movies[0]?.id}
      />
      <div className="px-4 md:px-12 mt-4">
        <MovieSection title="NOW PLAYING" type="now_playing" />
        <MovieSection title="POPULAR" type="popular" />
        <MovieSection title="TOP RATED" type="top_rated" />
        <MovieSection title="UPCOMING" type="upcoming" />
      </div>
    </>
  );
};

export default Main;
