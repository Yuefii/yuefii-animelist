import Image from "next/image";
import Link from "next/link";

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
  return (
    <>
      <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 p-3">
        {topAnime.data?.map((anime, index) => {
          return (
            <Link
              key={index}
              href={`/${anime.mal_id}`}
              className="cursor-pointer"
            >
              <Image
                className="w-full h-[200px]"
                src={anime.images.webp.image_url}
                alt="img"
                width={200}
                height={200}
              />
              <h3 className="p-2 text-xs font-semibold">{anime.title}</h3>
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default TopAnime;
