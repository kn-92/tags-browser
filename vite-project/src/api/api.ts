import axios from "axios";

export const getTags = (url: string) => axios.get(url).then((res) => res.data);
