import { TProductInfo, TProductInfoList } from "utils/types";
import {
  GET_PRODUCT_INFO_LIST_REQUEST,
  GET_PRODUCT_INFO_LIST_SUCCESS,
  GET_PRODUCT_INFO_LIST_FAILED,
} from "services/ProductInfo/type";
import { AppDispatch } from "index";
import { requestApi } from "utils/requestApi";

export interface IGetProductInfoListRequestAction {
  readonly type: typeof GET_PRODUCT_INFO_LIST_REQUEST;
}

export interface IGetProductInfoListSuccessAction {
  readonly type: typeof GET_PRODUCT_INFO_LIST_SUCCESS;
  readonly productInfoList: TProductInfoList;
}

export interface IGetProductInfoListFailedAction {
  readonly type: typeof GET_PRODUCT_INFO_LIST_FAILED;
}

export type TProductInfoListActions =
  | IGetProductInfoListRequestAction
  | IGetProductInfoListSuccessAction
  | IGetProductInfoListFailedAction;

export const getProductInfoList = () => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: GET_PRODUCT_INFO_LIST_REQUEST,
    });
    requestApi("/").then((res) => {
      if (res) {
        dispatch({
          type: GET_PRODUCT_INFO_LIST_SUCCESS,
          productInfoList: res,
        });
      } else {
        dispatch({
          type: GET_PRODUCT_INFO_LIST_FAILED,
        });
      }
    });
  };
};