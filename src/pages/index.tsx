import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Movies from "src/components/movies/Movies";
import { MovieResponseInterface } from "src/types/interface";
import requests from "src/utils/requests";

interface HomeProps {
  movies: MovieResponseInterface;
}

const Home: NextPage<HomeProps> = ({ movies }: HomeProps) => {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <meta name="description" content="Hulu 2.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Movies movies={movies.results} />
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { genre } = context.query;
  const request: MovieResponseInterface = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre as string]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      movies: request,
    },
  };
};
