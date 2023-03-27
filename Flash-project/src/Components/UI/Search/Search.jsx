import React from "react";
import { FaSearch, FaMicrophone } from "react-icons/fa";

export const Search = () => {
  return (
    <>
      <div className="boxSearch">
        <FaSearch className="searchColor"/>
        <input type="text" placeholder="Search" />
        <FaMicrophone className="microphoneColor"/>
      </div>
    </>
  );
};
