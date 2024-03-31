import { TProductInfoListActions } from "services/ProductInfo/action";
import {
  GET_PRODUCT_INFO_LIST_REQUEST,
  GET_PRODUCT_INFO_LIST_SUCCESS,
  GET_PRODUCT_INFO_LIST_FAILED,
} from "services/ProductInfo/type";

import { TProductInfo, TProductInfoList } from "utils/types";

type TProductInfoState = {
  productInfoList: TProductInfoList;
  productInfoListRequest: boolean;
  productInfoListFailed: boolean;
};

export const initialState: TProductInfoState = {
  productInfoList: [],
  productInfoListRequest: false,
  productInfoListFailed: false,
};

export const productInfoReducer = (
  state = initialState,
  action: TProductInfoListActions
): TProductInfoState => {
  switch (action.type) {
    case GET_PRODUCT_INFO_LIST_REQUEST: {
      return {
        ...state,
        productInfoListRequest: true,
        productInfoListFailed: false,
      };
    }
    case GET_PRODUCT_INFO_LIST_SUCCESS: {
      return {
        ...state,
        productInfoList: action.productInfoList,
        productInfoListRequest: false,
        productInfoListFailed: false,
      };
    }
    case GET_PRODUCT_INFO_LIST_FAILED: {
      return {
        ...state,
        productInfoList: state.productInfoList,
        productInfoListRequest: false,
        productInfoListFailed: true,
      };
    }
    default: {
      return state;
    }
  }
};
