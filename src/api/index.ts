import { ofetch } from "ofetch";

export const httpbunAPI = ofetch.create({ baseURL: "https://httpbun.com" });

export const get = () => httpbunAPI("/get");

export const example = () => httpbunAPI("/example");
