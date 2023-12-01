import TopAnime from "@/app/components/TopAnime";
import Header from "@/app/components/TopAnime/header";

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

const Page = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const result = await fetch(apiUrl + "/top/anime?limit=10");
  const topAnime: AnimeResponse = await result.json();
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
