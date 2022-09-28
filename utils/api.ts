const BASE_API_URL = "http://localhost:5000/";

export interface ApiNew {
  title: string;
  subtitle: string;
  id: string;
  body: string;
  time: Date;
  image: Object;
}

export async function getMainNews(): Promise<ApiNew[] | undefined> {
  try {
    const res = await fetch(BASE_API_URL + "news/?skip=0&limit=4");
    const mainNews: ApiNew[] = await res.json();
    return mainNews;
  } catch (error) {
    console.error(error);
  }
}
