import React, { useEffect, useState } from "react";
import { Modal } from "./ModalWindow/Modal";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { ItemComponent } from "./ItemComponent";
import ReactPaginate from "react-paginate";
import { text } from "../configs/url";
import { Inputcontainer } from "./Inputcontainer";
import { CurrentPage } from "../redux/actions/itemActions";

export const ItemListComponent = () => {
  const itemList = useSelector((state) => state.ItemList);
  const dispatch = useDispatch();

  const [modalActive, setModalActive] = useState(false);
  const [picture, setPicture] = useState("");
  const [itemsPerPage] = useState(5);
  const [pageCount, setPageCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [updateData, setUpdatedData] = useState([]);

  useEffect(() => {
    setUpdatedData(itemList.data);
  }, [itemList.data]);

  useEffect(() => {
    setPageCount(Math.ceil(updateData.length / itemsPerPage));
  }, [updateData]);

  const handlePageClick = (event) => {
    const selectedPage = event.selected;
    dispatch(CurrentPage(selectedPage + 1));
  };
  const onChangeHandler = (event) => {
    event.preventDefault();
    setInputValue(() => event.target.value);
    if (event.target.value === "") {
      return setUpdatedData(itemList.data);
    }
  };

  const findAlbumId = () => {
    if (inputValue === "") {
      return setUpdatedData(itemList.data);
    } else {
      let x = updateData.filter((el) => {
        return el.albumId === +inputValue;
      });
      setUpdatedData(x);
    }
  };

  if (itemList.loading) {
    return <p>{text.load}</p>;
  }

  if (!_.isEmpty(itemList.data)) {
    return (
      <>
        <Inputcontainer
          inputValue={inputValue}
          onChangeHandler={onChangeHandler}
          findAlbumId={findAlbumId}
        />
        <ItemComponent
          item={updateData}
          setModalActive={setModalActive}
          setPicture={setPicture}
          currentPage={itemList.page}
          itemsPerPage={itemsPerPage}
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
