import React from "react";
import { useSelector } from "react-redux";

const Head = () => {
  const title = useSelector((store: any) => store.title.title);

  return (
    <div className="flex justify-between items-center">
      <h1
        className={
          "text-2xl " + (!title && " h-8 w-28 bg-gray-200 animate-pulse")
        }
      >
        {title}
      </h1>
      <div className="flex">
        <input
          className="px-5 border p-2 rounded-md bg-gray-100"
          type="text"
          placeholder="🔍  Search..."
        />
        <div className="border w-28 mx-4 border-gray-200 rounded-md" />
      </div>
    </div>
  );
};

export default Head;
