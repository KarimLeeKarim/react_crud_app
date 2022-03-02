import { text } from "../../configs/url";
import {
  ITEM_LIST_FAILED,
  ITEM_LIST_LOADING,
  ITEM_LIST_SUCCESS,
  ITEM_DELETE,
  CURRENT_PAGE,
  PAGE_COUNT,
} from "../constant";

const InitialState = {
  loading: false,
  data: [],
  errorMsg: "",
  page: 1,
  countPage: 0,
};

const ItemListReducer = (state = InitialState, { type, payload }) => {
  switch (type) {
    case ITEM_LIST_LOADING:
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };
    case ITEM_LIST_FAILED:
      return {
        ...state,
        loading: false,
        errorMsg: text.list,
      };
    case ITEM_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        errorMsg: "",
      };
    case ITEM_DELETE:
      const deletedItem = state.data.filter((el) => el.id !== payload);
      return {
        ...state,
        loading: false,
        data: deletedItem,
        errorMsg: "",
      };
    case CURRENT_PAGE:
      return {
        ...state,
        loading: false,
        page: payload,
      };
    case PAGE_COUNT:
      return {
        ...state,
        loading: false,
        countPage: payload,
      };

    default:
      return state;
  }
};

export default ItemListReducer;
