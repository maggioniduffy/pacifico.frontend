import { BASE_API_URL } from "./constants";

export class ApiNew {
  constructor(
    public title: string,
    public subtitle: string,
    public _id: string,
    public body: string,
    public time: string,
    public image: Image
  ) {}
}

interface Image {
  id: string;
}

export enum Category {
  U13 = "U13",
  U15 = "U15",
  U17 = "U17",
  U19 = "U19",
  FIRST_TEAM = "1ra",
}

export class ApiMatch {
  constructor(
    public gender: "F" | "M",
    public category: Category,
    public rival_name: string,
    public time: string,
    public condition: "Local" | "Visita",
    public played: boolean,
    public rival_icon: Image,
    public _id: string,
    public field: string,
    public stats_link?: string,
    public transmission_link?: string,
    public our_score?: number,
    public rival_score?: number
  ) {}
}

export async function getMainNews(): Promise<ApiNew[] | undefined> {
  return getNews();
}

export async function getNews(
  skip: number = 0,
  limit: number = 3
): Promise<ApiNew[] | undefined> {
  try {
    const res = await fetch(BASE_API_URL + `news?skip=${skip}&limit=${limit}`);
    const mainNews: ApiNew[] = await res.json();
    return mainNews;
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
    const mainNews: ApiMatch[] = await res.json();
    return mainNews;
  } catch (error) {
    console.error(error);
  }
}

export async function getImage(id: string) {
  try {
    const res = await fetch(BASE_API_URL + "attachment/files/" + id);
    const image = await res.blob();
    const src = URL.createObjectURL(image);
    return src;
  } catch (error) {
    console.error(error);
  }
}

interface SendEmailDto {
  email: string;
  name: string;
  subject: string;
  message: string;
}

export async function sendEmailToAPI(sendEmailDto: SendEmailDto) {
  try {
    const res = await fetch(BASE_API_URL + "email", {
      body: JSON.stringify(sendEmailDto),
    });
    return res;
  } catch (error) {
    console.error(error);
  }
}
