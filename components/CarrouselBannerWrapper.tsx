import { getDiscoverMovies } from "@/lib/getMovies";
import CarrouselsBanner from "./CarrouselsBanner";

type Props = {
  id?: string;
  keywords?: string;
};

async function CarrouselBannerWrapper({ id, keywords }: Props) {
  const movies = await getDiscoverMovies(id, keywords);

  return <CarrouselsBanner movies={movies} />;
}

export default CarrouselBannerWrapper;
