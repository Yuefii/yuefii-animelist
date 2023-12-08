import DetailsAnime from "@/app/components/Anime/DetailsAnime";
import SynopsisComponent from "@/app/components/Anime/Synopsis";
import ButtonFavorite from "@/app/components/Anime/ButtonFavorite";
import { getAnimeResponse } from "@/app/libs/api";
import VideoPlayer from "@/app/utils/videoPlayer";
import Image from "next/image";
import { authSession } from "@/app/libs/auth";
import prisma from "@/app/libs/prisma";
interface PageProps {
  params: {
    mal_id: string;
  };
}

const Page: React.FC<PageProps> = async ({ params: { mal_id } }) => {
  const { data } = await getAnimeResponse(`anime/${mal_id}`);
  const user = await authSession();
  const favorite = await prisma.favorite.findFirst({
    where: {
      user_email: user?.email as string,
      mal_id: mal_id,
    },
  });

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
        <div className="flex gap-2 mx-10">
          <VideoPlayer youtubeId={data.trailer.youtube_id} />
          {!favorite && user && (
            <ButtonFavorite
              mal_id={mal_id}
              user_email={user?.email as string}
              title={data.title}
              image={data.images.webp.image_url}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
