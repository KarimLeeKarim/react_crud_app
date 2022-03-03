import React, { useEffect } from "react";
import { text } from "../configs/url";

export const Inputcontainer = ({
  inputValue,
  filterListItemById,
  setInputValue,
  setUpdatedData,
  itemList,
}) => {
  const byPressEnterFilterId = (event) => {
    if (event.keyCode === 13 && inputValue.length > 0 && inputValue <= 100) {
      event.preventDefault();
      filterListItemById(inputValue);
    }
  };

  useEffect(() => {
    let input = document.querySelector(".input");
    input.addEventListener("keydown", byPressEnterFilterId);

    return () => {
      input.removeEventListener("keydown", byPressEnterFilterId);
    };
  });

  const onChangeHandler = (event) => {
    event.preventDefault();
    setInputValue(() => event.target.value);
  };

  return (
    <div className="input__container">
      <input
        type="text"
        onChange={onChangeHandler}
        value={inputValue}
        className="input"
      />
      <button
        className="input__container__btnDelete"
        disabled={!inputValue || inputValue === "0" || inputValue > 100}
        onClick={() => {
          filterListItemById(inputValue);
        }}
      >
        {text.find}
      </button>
      <button
        className="input__container__btnGetAll"
        onClick={() => setUpdatedData(itemList.data)}
      >
        {text.all}
      </button>
    </div>
  );
};
