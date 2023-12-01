interface GetAnimeResProps {
    resource: string
    query:string
  }

export const getAnimeResponse: React.FC<GetAnimeResProps> = async (resource, query) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const result = await fetch(apiUrl + `/${resource}?${query}`);
    const anime = await result.json();
    return anime
}