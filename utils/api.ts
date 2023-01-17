import { BASE_API_URL } from "./constants";

export class ApiNew {
  constructor(
    public title: string,
    public subtitle: string,
    public _id: string,
    public body: string,
    public time: string,
    public image: string,
    public imageName: string,
    public imageDesc: string
  ) {}
}

export enum Category {
  U13 = "U13",
  U15 = "U15",
  U17 = "U17",
  U19 = "U19",
  FIRST_TEAM = "1ra",
}

export type Gender = "F" | "M";
export type Condition = "Local" | "Visita";

export class ApiMatch {
  constructor(
    public gender: Gender,
    public category: Category,
    public tournament: string,
    public rival_name: string,
    public time: string,
    public condition: Condition,
    public played: boolean,
    public rival_icon: string,
    public _id: string,
    public field: string,
    public stats_link?: string,
    public transmission_link?: string,
    public our_score?: number,
    public rival_score?: number
  ) {}
}

export async function getNews(
  skip: number = 0,
  limit: number = 3,
  search = ""
): Promise<ApiNew[] | undefined> {
  try {
    const searchQuery = search.length > 2 ? `&search=${search}` : "";
    const res = await fetch(
      BASE_API_URL + `news?skip=${skip}&limit=${limit}${searchQuery}`
    );
    const mainNews: ApiNew[] = await await res.json();
    console.log("NEWS: ", mainNews[0]._id);
    return mainNews;
  } catch (error) {
    console.error(error);
  }
}

export async function getNew(id: string): Promise<ApiNew | undefined> {
  try {
    console.log("ID: ", id);
    const res = await fetch(BASE_API_URL + `news/` + id);
    const data: ApiNew = await res.json();
    console.log("NEW DOC: ", data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getMatchs(
  skip: number = 0,
  limit: number = 3
): Promise<ApiMatch[] | undefined> {
  try {
    const res = await fetch(
      BASE_API_URL + `matches?skip=${skip}&limit=${limit}`
    );
    const matches: ApiMatch[] = await res.json();
    return matches;
  } catch (error) {
    console.error(error);
  }
}

export async function addVideo(
  src: string,
  text: string,
  token: string | undefined
) {
  try {
    const res = await fetch(BASE_API_URL + "youtube", {
      method: "POST",
      body: JSON.stringify({ src, text }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function deleteVideo(id: string, token: string | undefined) {
  try {
    const res = await fetch(BASE_API_URL + "youtube/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
