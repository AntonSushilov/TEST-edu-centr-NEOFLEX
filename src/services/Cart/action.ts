import { TProductInCart, TProductInCartList } from "utils/types";
import {
  ADD_PRODUCT_CART,
  DELETE_PRODUCT_CART,
  INCREMENT_PRODUCT_CART,
  DECREMENT_PRODUCT_CART,
} from "services/Cart/type";
import { AppDispatch } from "index";
import { requestApi } from "utils/requestApi";

export interface IAddProductCartAction {
  readonly type: typeof ADD_PRODUCT_CART;
  readonly productInCart: TProductInCart;
}

export interface IDeleteProductCartAction {
  readonly type: typeof DELETE_PRODUCT_CART;
  readonly id: number;
}

export interface IIncrementProductCartAction {
  readonly type: typeof INCREMENT_PRODUCT_CART;
  readonly id: number;
}

export interface IDecrementProductCartAction {
  readonly type: typeof DECREMENT_PRODUCT_CART;
  readonly id: number;
}

export type TProductInCartActions =
  | IAddProductCartAction
  | IDeleteProductCartAction
  | IIncrementProductCartAction
  | IDecrementProductCartAction;

export const addProductInCart = (productInCart: TProductInCart) => ({
  type: ADD_PRODUCT_CART,
  productInCart: productInCart,
});

export const incrementProductInCart = (id: number) => {
  return {
    type: INCREMENT_PRODUCT_CART,
    id: id,
  };
};

export const decrementProductInCart = (id: number) => {
  return {
    type: DECREMENT_PRODUCT_CART,
    id: id,
  };
};

export const deleteProductInCart = (id: number) => {
  return {
    type: DELETE_PRODUCT_CART,
    id: id,
  };
};
