import React, { ReactElement } from "react";
import { useRouter } from "next/dist/client/router";
import requests from "src/utils/requests";

export default function Nav(): ReactElement {
  const router = useRouter();

  return (
    <nav className="relative">
      <div className="absolute z-10 top-0 left-0 bg-gradient-to-r from-[#06202A] h-full w-1/25"></div>
      <div className="flex relative pb-4 px-10 sm:px-20 sm:space-x-20 text-2xl whitespace-nowrap space-x-10 hide-scrollbar overflow-x-scroll">
        {Object.entries(requests).map(([key, { title }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-full w-1/25 "></div>
    </nav>
  );
}
