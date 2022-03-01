import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import ReduxThunk from "redux-thunk";
import RootReducer from "./RootReducer";

const store= createStore(RootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));

export default store;