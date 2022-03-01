import {combineReducers} from "redux";
import ItemListReducer from "../redux/reducers/itemListReducer";

const RootReducer = combineReducers({
  ItemList: ItemListReducer,
});

export default RootReducer;