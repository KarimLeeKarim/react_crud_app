import React from "react";
import { useDispatch } from "react-redux";
import { text } from "../configs/url";
import { DeleteCard } from "../redux/actions/itemActions";

export const ItemComponent = ({ item, setModalActive, setPicture }) => {
  const dispatch = useDispatch();

  return (
    <div className={"item__list"}>
      {item.map((element) => {
        //   console.log(element.albumId);
        //   console.log(element.id);
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
            <h3 className={"item-content__id"}>Album - {element.albumId}</h3>
            <p className={"item-content__title"}>{element.title}</p>

            <button
              className={"item-content__btn"}
              onClick={() => dispatch(DeleteCard(element.id))}
            >
              {text.delete}
            </button>
          </div>
        );
      })}
    </div>
  );
};
