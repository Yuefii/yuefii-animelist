"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

interface AnimeData {
  mal_id: number;
  title: string;
  images: {
    webp: {
      image_url: string;
    };
  };
}
interface AnimeResponse {
  data: AnimeData[];
}
interface TopAnimeProps {
  topAnime: AnimeResponse;
}

const TopAnime: React.FC<TopAnimeProps> = ({ topAnime }) => {
  const router = useRouter();

  const handleAnimeClick = (malId: number) => {
    router.push(`/anime/${malId}`);
  };

  return (
    <>
      <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 p-3">
        {topAnime.data?.map((anime, index) => (
          <div key={index} className="cursor-pointer" onClick={() => handleAnimeClick(anime.mal_id)}>
            <Image
              className="w-full h-[200px]"
              src={anime.images.webp.image_url}
              alt="img"
              width={200}
              height={200}
            />
            <h3 className="p-2 text-xs font-semibold">{anime.title}</h3>
          </div>
        ))}
      </div>
    </>
  );
};
export default TopAnime;
