interface AnimeData {
  rank: number;
  score: number;
  members: number;
  episodes: number;
}

const DetailsAnime: React.FC<{ data: AnimeData }> = ({ data }) => {
  return (
    <>
      <div className="flex mx-10 py-3 items-center gap-4 text-xs overflow-x-auto">
        <div className="border-2 border-black rounded-md text-center py-1.5 px-10 font-semibold">
          <h1>Ranking</h1>
          <p> {data.rank}</p>
        </div>
        <div className="border-2 border-black rounded-md text-center py-1.5 px-10 font-semibold">
          <h1>Score</h1>
          <p>{data.score}</p>
        </div>
        <div className="border-2 border-black rounded-md text-center py-1.5 px-10 font-semibold">
          <h1>Members</h1>
          <p>{data.members}</p>
        </div>
        <div className="border-2 border-black rounded-md text-center py-1.5 px-10 font-semibold">
          <h1>Episode</h1>
          <p>{data.episodes}</p>
        </div>
      </div>
    </>
  );
};

export default DetailsAnime;
