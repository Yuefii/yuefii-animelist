import TopAnime from "@/app/components/TopAnime";
import Header from "@/app/components/TopAnime/header";
import { getAnimeResponse } from "@/app/libs/api";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=10");
  return (
    <>
      <div className="container mx-auto">
        <section>
          <Header title="Top Anime" linkTitle="See All" linkHref="/top-anime" />
          <TopAnime topAnime={topAnime} />
        </section>
      </div>
    </>
  );
};

export default Page;
