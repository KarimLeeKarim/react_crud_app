import React from "react";
import { useDispatch } from "react-redux";
import { text } from "../configs/url";
import { CurrentPage, DeleteCard } from "../redux/actions/itemActions";

export const ItemComponent = ({
  item,
  setModalActive,
  setPicture,
  currentPage,
  itemsPerPage,
}) => {
  const dispatch = useDispatch();

  const sliceData = item.slice(
    (currentPage - 1) * itemsPerPage + 0,
    (currentPage - 1) * itemsPerPage + itemsPerPage
  );

  return (
    <div className={"item__list"}>
      {sliceData.map((element) => {
        return (
          <div key={element.id} className={"item-content"}>
            <img
              onClick={() => {
                setModalActive(true);
                setPicture(element.url);
              }}
              src={element.thumbnailUrl}
              alt={element.id}
              className={"item-content__img"}
            />
            <h3 className={"item-content__id"}>
              {text.albumId} - {element.albumId}
            </h3>
            <p className={"item-content__title"}>{element.title}</p>

            <button
              className={"item-content__btn"}
              onClick={() => {
                dispatch(DeleteCard(element.id));
                dispatch(CurrentPage(currentPage));
              }}
            >
              {text.delete}
            </button>
          </div>
        );
      })}
    </div>
  );
};
