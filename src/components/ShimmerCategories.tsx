import React from "react";
import { PLACEHOLDER_IMAGE_URL } from "../utils/constants";

const LENGTH = 10;

const ShimmerCategories = () => {
  return (
    <>
      {Array(LENGTH)
        .fill(null)
        .map((_, index) => (
          <div
            key={index}
            className="animate-pulse inline-block flex-shrink-0 relative"
          >
            <img className=" w-40 h-40 mr-10" src={PLACEHOLDER_IMAGE_URL} />
            <div className="animate-pulse absolute bottom-10 text-center w-3/5 h-4 translate-x-0 left-5 bg-white" />
          </div>
        ))}
    </>
  );
};

export default ShimmerCategories;
