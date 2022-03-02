import React from "react";
import { text } from "../configs/url";

export const Inputcontainer = ({ inputValue, onChangeHandler, findAlbumId }) => {
  return (
    <div>
      <input
        type="number"
        pattern="^[0–9]$"
        min="1"
        max="100"
        onChange={onChangeHandler}
        value={inputValue}
        className="input"
      />
      <button 
    //   disabled={!inputValue || inputValue === "0" || !inputValue > "100"}
      onClick={()=>findAlbumId()}>{text.find}</button>
    </div>
  );
};
