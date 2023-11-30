import TopAnime from "./components/TopAnime";

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

const Home = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const result = await fetch(apiUrl + "/top/anime?limit=10");
  const anime: AnimeResponse = await result.json();
  return (
    <>
      <div className="container mx-auto">
        <div className="text-2xl font-semibold p-3">
          <h1>Top Anime</h1>
        </div>
        <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 p-3">
          {anime.data.map((data: AnimeData) => {
            return (
              <div key={data.mal_id} className="shadow-xl">
                <TopAnime
                  title={data.title}
                  images={data.images.webp.image_url}
                  id={data.mal_id}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
