import React from "react";
import { v4 as uuidv4 } from "uuid";

export const Pagination = ({ countriesPerPage, totalCountries, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul className="pagination">
        {pageNumbers.map((page) => (
          <li key={uuidv4()}>
            <a onClick={()=>paginate(page)} href="!#">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
