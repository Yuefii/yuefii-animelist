"use client";
import { useCallback, useEffect, useState } from "react";
import TopAnime from "@/app/components/TopAnime";
import HeaderMenu from "@/app/utils/HeaderMenu";
import Pagination from "@/app/utils/Pagination";
import { getAnimeResponse } from "@/app/libs/api";

interface PaginationType {
  last_visible_page: number;
}
interface AnimeResponse {
  data: any[];
  pagination: PaginationType;
}

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState<AnimeResponse>({
    data: [],
    pagination: { last_visible_page: 0 },
  });

  const fetchData = useCallback(async () => {
    const topAnime = await getAnimeResponse("top/anime", `page=${page}`);
    setTopAnime(topAnime);
  }, [page]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <div className="container mx-auto">
        <HeaderMenu title={`Top Anime #${page}`} />
        <TopAnime topAnime={topAnime} />
        <Pagination
          page={page}
          lastPage={topAnime.pagination?.last_visible_page}
          setPage={setPage}
        />
      </div>
    </>
  );
};
export default Page;
