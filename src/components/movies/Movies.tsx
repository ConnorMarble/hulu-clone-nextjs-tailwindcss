import React, { ReactElement } from "react";
import { MovieInterface } from "src/types/interface";
import Thumbnail from "./Thumbnail";

interface MoviesProps {
  movies: MovieInterface[];
}

export default function Movies({ movies }: MoviesProps): ReactElement {
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {movies.map((movie) => (
        <Thumbnail key={movie.title} movie={movie} />
      ))}
    </div>
  );
}
