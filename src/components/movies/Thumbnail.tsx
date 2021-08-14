import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { ReactElement, useEffect, useState } from "react";
import { MovieInterface } from "src/types/interface";
import Spinner from "../Spinner";

interface ThumbnailProps {
  movie: MovieInterface;
}

export default function Thumbnail({ movie }: ThumbnailProps): ReactElement {
  const [loading, setLoading] = useState(true);

  const BASE_URL = "https:/image.tmdb.org/t/p/original/";
  useEffect(() => {
    console.log("Rendered!");
  }, []);
  return (
    <div className="p-2  group cursor-pointer transition duration-200 ease-in-out transform sm:hover:scale-105 hover:z-50">
      <div className="relative">
        {loading && <Spinner />}
        <Image
          alt=""
          layout="responsive"
          src={
            `${BASE_URL}${movie.backdrop_path || movie.poster_path}` ||
            `${BASE_URL}${movie.poster_path}`
          }
          height={1000}
          width={1920}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>

      <div className="p-2">
        <p className="truncate max-w-md">{movie.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {movie.title || movie.original_name}
        </h2>
        <p className="flex item-center opacity-0 group-hover:opacity-100">
          {movie.release_date}
          <ThumbUpIcon className="h-5 mx-2" /> {movie.vote_count}
        </p>
      </div>
    </div>
  );
}
