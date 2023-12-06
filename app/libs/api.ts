export const getAnimeResponse = async (resource: string, query?: string) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const result = await fetch(apiUrl + `/${resource}?${query}`);
  const anime = await result.json();
  return anime
}

export const getNestedAnimeResponse = async (resource: string, objectProperty: any) => {
  const result = await getAnimeResponse(resource)
  return result.data.flatMap((item: string) => item[objectProperty])
}

export const reproduce = (data: string | any[], gap: number) => {
  const first = ~~(Math.random() * (data.length - gap) + 1)
  const last = first + gap

  const result = {
    data: data.slice(first, last)
  }
  return result
}