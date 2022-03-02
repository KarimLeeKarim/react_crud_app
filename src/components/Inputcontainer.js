import React from "react";
import { text } from "../configs/url";

export const Inputcontainer = ({
  inputValue,
  filterListItemById,
  setInputValue,
  setUpdatedData,
  itemList,
}) => {
  const onChangeHandler = (event) => {
    event.preventDefault();
    setInputValue(() => event.target.value);
    if (event.target.value === "") {
      return setUpdatedData(itemList.data);
    }
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
