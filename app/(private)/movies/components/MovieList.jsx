"use client";
import React, { useRef } from "react";
import MovieCard from "./MovieCard";
import { useDraggable } from "react-use-draggable-scroll";

const MovieList = async ({ movies }) => {
  const ref = useRef(); 
  const { events } = useDraggable(ref); 

  return (
    <div
      className="grid grid-flow-col gap-2 overflow-x-scroll"
      ref={ref}
      {...events}
    >
      {movies.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );
};

export default MovieList;
