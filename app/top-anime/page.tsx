"use client";
import { useCallback, useEffect, useState } from "react";
import TopAnime from "../components/TopAnime";
import HeaderMenu from "../utils/HeaderMenu";
import Pagination from "../utils/Pagination";

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
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const result = await fetch(`${apiUrl}/top/anime?page=${page}`);
    const data = await result.json();
    setTopAnime(data);
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
