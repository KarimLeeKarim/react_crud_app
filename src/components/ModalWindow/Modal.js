import React from "react";
import { v4 as uuidv4 } from "uuid";


// IF YOU WANT YOU CAN MAKE IT AS REUSABLE COMPONENT FOR DIFFERENT CONTENT WITH CHILDREN PROPS
export const Modal = ({ active, setActive, picture, children }) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <img src={picture} alt={uuidv4()} />
      </div>
    </div>
  );
};
