import DetailsAnime from "@/app/components/Anime/DetailsAnime";
import SynopsisComponent from "@/app/components/Anime/Synopsis";
import { getAnimeResponse } from "@/app/libs/api";
import VideoPlayer from "@/app/utils/videoPlayer";
import Image from "next/image";

interface AnimeItem {
  title: string;
  year: number;
  images: {
    webp: {
      image_url: string;
    };
  };
  synopsis: string;
  rank: number;
  score: number;
  members: number;
  episodes: number;
  trailer: {
    youtube_id: string;
  };
}

const Page = async ({ params: { mal_id } }: { params: { mal_id: string } }) => {
  const { data }: { data: AnimeItem } = await getAnimeResponse(`anime/${mal_id}`)

  return (
    <>
      <div className="container mx-auto">
        <h3 className="py-5 text-2xl font-semibold mx-10">
          {data.title} - {data.year}
        </h3>
        <div className="flex flex-wrap md:flex-nowrap gap-6 mx-10">
          <Image
            src={data.images.webp.image_url}
            alt="img"
            width={300}
            height={300}
            className="w-full rounded-md"
          />
          <SynopsisComponent data={data} />
        </div>
        <DetailsAnime data={data} />
        <VideoPlayer youtubeId={data.trailer.youtube_id} />
      </div>
    </>
  );
};

export default Page;
