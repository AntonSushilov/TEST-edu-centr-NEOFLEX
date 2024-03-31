import { IResponse, TProductInfoList } from "./types";
import { headphones } from "services/data";
const API_URL = "http://localhost:3000";
const checkResponse = <T>(res: Response): Promise<T> => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const requestApi = <T extends IResponse>(
  url: string,
  options?: RequestInit
): Promise<T | TProductInfoList> => {
  // Заглушка для данных
  if (url === "/") {
    return new Promise<T | TProductInfoList>((resolve) => {
      resolve(
        headphones
      )
    }).then((data) => {
      return data;
    });
  }

  // Основной запрос к API
  return fetch(API_URL + url, options)
    .then((res) => {
      return checkResponse<T>(res);
    })
    .then((data) => {
      return data;
    });
};
