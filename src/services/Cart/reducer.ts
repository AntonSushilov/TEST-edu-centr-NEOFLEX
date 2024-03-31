import { TProductInCartActions } from "services/Cart/action";
import {
  ADD_PRODUCT_CART,
  DELETE_PRODUCT_CART,
  INCREMENT_PRODUCT_CART,
  DECREMENT_PRODUCT_CART,
} from "services/Cart/type";
import { headphonesInCart } from "services/data";

import { TProductInCart, TProductInCartList } from "utils/types";

type TProductInCartState = {
  productInCartList: TProductInCartList;
};

export const initialState: TProductInCartState = {
  // productInCartList: headphonesInCart, // для тестовых данных
  productInCartList: [],
};

export const productInCartReducer = (
  state = initialState,
  action: TProductInCartActions
): TProductInCartState => {
  switch (action.type) {
    case ADD_PRODUCT_CART: {
      return {
        ...state,
        productInCartList: [...state.productInCartList, action.productInCart],
      };
    }
    case DELETE_PRODUCT_CART: {
      return {
        ...state,
        productInCartList: [
          ...state.productInCartList.filter((el) => el.id !== action.id),
        ],
      };
    }
    case INCREMENT_PRODUCT_CART: {
      return {
        ...state,
        productInCartList: [
          ...state.productInCartList.map((el) =>
            el.id === action.id
              ? {
                  ...el,
                  count: el.count + 1,
                }
              : el
          ),
        ],
      };
    }
    case DECREMENT_PRODUCT_CART: {
      return {
        ...state,
        productInCartList: [
          ...state.productInCartList.map((el) =>
            el.id === action.id ?  {
              ...el,
              count: el.count - 1,
            } : el
          ),
        ],
      };
    }
    default: {
      return state;
    }
  }
};
