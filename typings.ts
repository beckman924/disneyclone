export type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path?: string;
  genre_ids: number[];
  release_date: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
  adult: boolean;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  video: boolean;
};

export type SearchResults = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type Genre = {
  id: number;
  name: string;
};

export type Genres = {
  genres: Genre[];
};
