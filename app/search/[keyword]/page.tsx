import TopAnime from "@/app/components/TopAnime";
import Header from "@/app/components/TopAnime/header";
import { getAnimeResponse } from "@/app/libs/api";

interface Params {
  keyword: string;
}

const Page = async ({ params }: { params: Params }) => {
  const { keyword } = params;
  const decodeKeyword = decodeURI(keyword);
  const searchAnime = await getAnimeResponse("anime", `q=${decodeKeyword}`);
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
