import React from "react";
import { text } from "../configs/url";

export const Loading = () => {
  return (
    <div className={"loading"}>
      <p>{text.load}</p>
    </div>
  );
};
