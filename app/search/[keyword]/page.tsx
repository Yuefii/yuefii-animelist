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

interface Params {
  keyword: string;
}

const Page = async ({ params }: { params: Params }) => {
  const { keyword } = params;
  const decodeKeyword = decodeURI(keyword);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const result = await fetch(apiUrl + `/anime?q=${decodeKeyword}`);
  const searchAnime: AnimeResponse = await result.json();
  return (
    <>
      <div className="container mx-auto">
        <section>
          <Header title={`Result for ${decodeKeyword}...`} />
          <TopAnime topAnime={searchAnime} />
        </section>
      </div>
    </>
  );
};

export default Page;
