import { notFound } from "next/navigation";

import AISuggestion from "@/components/AISuggestion";
import MoviesCarrousel from "@/components/MoviesCarrousel";
import { getPopularMovies, getSearchedMovies } from "@/lib/getMovies";

type Props = {
  params: {
    term: string;
  };
};

async function SearchPage({ params: { term } }: Props) {
  if (!term) notFound();

  const termToUse = decodeURI(term);

  const movies = await getSearchedMovies(termToUse);
  const popularMovies = await getPopularMovies();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-4 mt-32 xl:mt-42">
        <h1 className="text-6xl font-bold px-10">Results for {termToUse}</h1>

        {process.env.OPENAI_API_KEY && <AISuggestion term={termToUse} />}

        <MoviesCarrousel title="Movies" movies={movies} isVertical />
        <MoviesCarrousel title="You may also like" movies={popularMovies} />
      </div>
    </div>
  );
}

export default SearchPage;
