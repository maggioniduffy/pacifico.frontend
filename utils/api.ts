const BASE_API_URL = "http://localhost:5000/";

export class ApiNew {
  constructor(
    public title: string,
    public subtitle: string,
    public id: string,
    public body: string,
    public time: Date,
    public image: Image
  ) {}
}

interface Image {
  id: string;
}

export async function getMainNews(): Promise<ApiNew[] | undefined> {
  try {
    const res = await fetch(BASE_API_URL + "news?skip=0&limit=3");
    const mainNews: ApiNew[] = await res.json();
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
