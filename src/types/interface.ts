/* eslint-disable camelcase */
export interface MovieResponseInterface {
  page: number;
  results?: MovieInterface[] | null;
  total_pages: number;
  total_results: number;
}
export interface MovieInterface {
  adult: boolean;
  backdrop_path?: string | null;
  genre_ids?: number[] | null;
  id: number;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
