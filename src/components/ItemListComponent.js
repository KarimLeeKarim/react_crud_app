import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CurrentPage, PageCount } from "../redux/actions/itemActions";
import ReactPaginate from "react-paginate";
import _ from "lodash";
import { Modal } from "./ModalWindow/Modal";
import { ItemComponent } from "./ItemComponent";
import { Inputcontainer } from "./Inputcontainer";
import { Loading } from "./Loading";
import { text } from "../configs/url";

export const ItemListComponent = () => {
  const itemList = useSelector((state) => state.ItemList);
  const dispatch = useDispatch();

  const [modalActive, setModalActive] = useState(false);
  const [picture, setPicture] = useState("");
  const [itemsPerPage] = useState(12);
  const [inputValue, setInputValue] = useState("");
  const [updateData, setUpdatedData] = useState([]);

  useEffect(() => {
    setUpdatedData(itemList.data);
  }, [itemList.data]);

  useEffect(() => {
    dispatch(PageCount(Math.ceil(updateData.length / itemsPerPage)));
  }, [updateData]);

  const handlePageClick = (event) => {
    const selectedPage = event.selected;
    dispatch(CurrentPage(selectedPage + 1));
  };

  const filterListItemById = (value) => {
    let filteredData = itemList.data.filter((el) => {
      return el.albumId === +value;
    });
    dispatch(CurrentPage(1));
    setUpdatedData(filteredData);
    setInputValue("");
  };

  if (_.isEmpty(itemList.data)) {
    <p>{text.noData}</p>;
  }

  if (!_.isEmpty(itemList.data)) {
    return (
      <>
        <Inputcontainer
          inputValue={inputValue}
          setInputValue={setInputValue}
          setUpdatedData={setUpdatedData}
          itemList={itemList}
          filterListItemById={filterListItemById}
        />
        <ItemComponent
          item={updateData}
          setModalActive={setModalActive}
          setPicture={setPicture}
          currentPage={itemList.page}
          itemsPerPage={itemsPerPage}
        />
        {!_.isEmpty(itemList.data) && (
          <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-pages"}
            pageCount={itemList.countPage}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active__page"}
          />
        )}
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

  return <Loading />;
};
