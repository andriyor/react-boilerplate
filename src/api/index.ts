import { ofetch } from "ofetch";

export const httpbunAPI = ofetch.create({ baseURL: "https://httpbun.com" });
