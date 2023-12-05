export const getAnimeResponse = async (resource: string, query?: string) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const result = await fetch(apiUrl + `/${resource}?${query}`);
  const anime = await result.json();
  return anime
}