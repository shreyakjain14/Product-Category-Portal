import React from "react";
import placeHolderImg from "../assets/icons/image-placeholder.svg";

const SHIMMER_LENGTH: number = 10;

const ShimmerGeneric = () => {
  return (
    <>
      {Array(SHIMMER_LENGTH)
        .fill(null)
        .map((_, index) => (
          <div
            key={index}
            className="w-60 h-60 mb-10 mr-10 flex border border-gray-300 rounded-lg items-center justify-between flex-col pb-3"
          >
            <img
              className="animate-pulse w-40 h-40"
              alt="empty-image"
              src={placeHolderImg}
            />
            <div className="animate-pulse bg-slate-300 w-4/5 h-4 bottom-10 " />
          </div>
        ))}
    </>
  );
};

export default ShimmerGeneric;
