import React from "react";
import { useSearchParams } from "react-router-dom";

export default function Pagination({ totalProducts, productsSeil, paginate }) {
  const [searchParams, setSearchParams] = useSearchParams();

  let pageNumbers = [];
  for (let i = 1; i <= totalProducts / productsSeil; i++) {
    pageNumbers.push(i);
  }

  const numberClickHandler = (number) => {
    paginate(number);
    setSearchParams({ page:number});
  };

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        {pageNumbers.map((number) => {
          return (
            <li
              key={number}
              onClick={numberClickHandler.bind(null, number)}
              className="page-item"
            >
              <p className="page-link" style={{ color: "#e63129" }}>
                {number}
              </p>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
