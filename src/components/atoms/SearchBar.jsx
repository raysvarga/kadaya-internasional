import React from "react";
import { useMainContext } from "../../context/MainContext";

const SearchBar = () => {
  const { setSearchQuery } = useMainContext();

  return (
    <div className="relative">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 absolute top-1/2 left-3 transform -translate-y-1/2"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g id="SVGRepo_iconCarrier">
          <path
            d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
            stroke="#276b1e"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
      <input
        type="text"
        placeholder="Cari"
        className="py-3 ps-11 pe-12 w-40 bg-white rounded-full outline-none focus:ring-2 focus:ring-[#276b1e] text-sm"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
