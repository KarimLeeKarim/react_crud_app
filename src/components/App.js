import React from "react";
import { useDispatch } from "react-redux";
import "../assets/sass/main.scss";
import { GetItemList } from "../redux/actions/itemActions";
import { ItemListComponent } from "./ItemListComponent";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(GetItemList());
  }, []);

  return <ItemListComponent />;
}

export default App;
