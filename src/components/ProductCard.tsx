import { useState } from "react";
import ModalProductDetail from "./Modals/ModalProductDetail";
import wishlistIcon from "../assets/icons/wishlist.png";
import placeHolderImg from "../assets/icons/image-placeholder.svg";

const ProductCard = ({ product }: any) => {
  console.log(product);
  const [isProductDetailOpen, setProductDetailOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setProductDetailOpen(true)}
        className="flex w-60 h-60 mb-10 mr-10 border border-gray-300 rounded-lg items-center justify-between flex-col pb-3 relative"
      >
        <img
          className="absolute right-4 top-4 h-4 w-4"
          src={wishlistIcon}
          alt="Wishlist-Icon"
        />
        <img
          className="w-40 h-40 mt-4"
          alt="empty-image"
          src={product.productImages[0] || placeHolderImg}
        />
        <div className="bottom-10 ">{product.itemDescription}</div>
      </button>
      {isProductDetailOpen && (
        <ModalProductDetail
          product={product}
          closeModal={() => setProductDetailOpen(false)}
        />
      )}
    </>
  );
};

export default ProductCard;
