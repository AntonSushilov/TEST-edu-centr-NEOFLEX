export interface IResponse {
  data?: any
}

export type TProductInfo = {
  id: number;
  img: string;
  title: string;
  price: number;
  rate: number;
  discount?: number;
  type?: "Default" | "Wireless";
};

export type TProductInfoList = TProductInfo[];


export type TProductInCart = {
  id: number;
  img: string;
  title: string;
  price: number;
  discount?: number;
  count: number;
};

export type TProductInCartList = TProductInCart[];