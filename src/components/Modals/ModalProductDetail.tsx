import React, { useState } from "react";
import { createPortal } from "react-dom";
import ProductDetail from "../ProductDetail";
import OrderList from "../OrderList";

const ModalProductDetail = ({ product, closeModal }: any) => {
  const [list, setList] = useState([]);

  return createPortal(
    <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/70 text-red-400 ">
      <div className="absolute right-0 bottom-0 top-0 w-3/4 bg-white z-10 flex p-4">
        <ProductDetail product={product} setList={setList} />
        <div className="h-full border border-gray-100" />
        <OrderList
          product={product}
          closeModal={closeModal}
          list={list}
          setList={setList}
        />
      </div>
    </div>,
    document.getElementById("portal") as HTMLElement
  );
};

export default ModalProductDetail;
