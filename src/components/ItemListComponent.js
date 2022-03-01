import React, { useEffect, useState } from "react";
import { Modal } from "./ModalWindow/Modal";
import _ from "lodash";
import { useSelector } from "react-redux";
import { ItemComponent } from "./ItemComponent";
import ReactPaginate from "react-paginate";
import { text } from "../configs/url";

export const ItemListComponent = () => {
  const itemList = useSelector((state) => state.ItemList);

  const [modalActive, setModalActive] = useState(false);
  const [picture, setPicture] = useState("");
  const [itemsPerPage] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    setPageCount(Math.ceil(itemList.data.length / itemsPerPage));
  }, [itemList]);

  const sliceData = itemList.data.slice(
    currentPage - 1,
    currentPage - 1 + itemsPerPage
  );

  const handlePageClick = (event) => {
    const selectedPage = event.selected;
    setCurrentPage(selectedPage + 1);
  };



  if (itemList.loading) {
    return <p>{text.load}</p>;
  }

  if (!_.isEmpty(itemList.data)) {
    return (
      <>
        <ItemComponent
          item={sliceData}
          setModalActive={setModalActive}
          setPicture={setPicture}
        />
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-pages"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active__page"}
        />
        <Modal
          active={modalActive}
          setActive={setModalActive}
          picture={picture}
        />
      </>
    );
  }

  if (itemList.errorMsg !== "") {
    return <p>{itemList.errorMsg}</p>;
  }

  return <p>{text.noData}</p>;
};
