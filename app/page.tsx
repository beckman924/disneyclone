import CarrouselBannerWrapper from "@/components/CarrouselBannerWrapper";
import MoviesCarrousel from "@/components/MoviesCarrousel";
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/lib/getMovies";

export default async function Home() {
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();

  return (
    <main className="">
      <CarrouselBannerWrapper />

      <div className="flex flex-col space-y-2 xl:-mt-48">
        <MoviesCarrousel movies={upcomingMovies} title="Upcoming" />
        <MoviesCarrousel movies={topRatedMovies} title="Top Rated" />
        <MoviesCarrousel movies={popularMovies} title="Popular" />
      </div>
    </main>
  );
}
