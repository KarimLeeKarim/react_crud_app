import { url } from "../../configs/url";
import {
  ITEM_LIST_FAILED,
  ITEM_LIST_LOADING,
  ITEM_LIST_SUCCESS,
  ITEM_DELETE,
  CURRENT_PAGE,
  PAGE_COUNT,
} from "../constant";

export const GetItemList = () => async (dispatch) => {
  try {
    dispatch({
      type: ITEM_LIST_LOADING,
    });

    const res = await fetch(url.getDataList);
    const json = await res.json();

    dispatch({
      type: ITEM_LIST_SUCCESS,
      payload: json,
    });
  } catch (e) {
    dispatch({
      type: ITEM_LIST_FAILED,
    });
  }
};

export const DeleteCard = (cardId) => async (dispatch) => {
  try {
    dispatch({
      type: ITEM_LIST_LOADING,
    });

    const res = await fetch(`${url.getDataList}/${cardId}`, {
      method: "DELETE",
    });
    const status = res.status;

    if (status === 200)
      dispatch({
        type: ITEM_DELETE,
        payload: cardId,
      });
  } catch (e) {
    dispatch({
      type: ITEM_LIST_FAILED,
    });
  }
};

export const CurrentPage = (page) => (dispatch) => {
  dispatch({
    type: CURRENT_PAGE,
    payload: page,
  });
};

export const PageCount = (countPage) => (dispatch) => {
    dispatch({
      type: PAGE_COUNT,
      payload: countPage,
    });
  };
