import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="bg-[#fafafa] h-14 rounded-full flex justify-evenly items-center drop-shadow-md fixed w-80 left-1/2 bottom-4 z-50 transform -translate-x-1/2">
      <Link
        to={"/stats"}
        className={`rounded-full p-2 ${
          location.pathname === "/stats" ? "bg-[#0795ff]" : "bg-[#fafafa]"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={64}
          height={64}
          fill="none"
          stroke="#000"
          strokeWidth={0}
          viewBox="0 0 24 24"
          className="w-8 h-8"
        >
          <path
            fill={`${location.pathname === "/stats" ? "#ffffff" : "#0795ff"}`}
            stroke="none"
            d="M20 13.75a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v6.75H14V4.25c0-.728-.002-1.2-.048-1.546-.044-.325-.115-.427-.172-.484-.057-.057-.159-.128-.484-.172C12.949 2.002 12.478 2 11.75 2c-.728 0-1.2.002-1.546.048-.325.044-.427.115-.484.172-.057.057-.128.159-.172.484-.046.347-.048.818-.048 1.546V20.5H8V8.75A.75.75 0 0 0 7.25 8h-3a.75.75 0 0 0-.75.75V20.5H1.75a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5H20v-6.75Z"
          />
        </svg>
      </Link>
      <Link
        to={"/"}
        className={`${
          location.pathname === "/" ? "bg-[#0795ff]" : "bg-[#fafafa]"
        } w-fit h-fit p-2 rounded-full grid place-items-center`}
      >
        <svg
          width="64px"
          height="64px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.5192 7.82274C2 8.77128 2 9.91549 2 12.2039V13.725C2 17.6258 2 19.5763 3.17157 20.7881C4.34315 22 6.22876 22 10 22H14C17.7712 22 19.6569 22 20.8284 20.7881C22 19.5763 22 17.6258 22 13.725V12.2039C22 9.91549 22 8.77128 21.4808 7.82274C20.9616 6.87421 20.0131 6.28551 18.116 5.10812L16.116 3.86687C14.1106 2.62229 13.1079 2 12 2C10.8921 2 9.88939 2.62229 7.88403 3.86687L5.88403 5.10813C3.98695 6.28551 3.0384 6.87421 2.5192 7.82274ZM9 17.25C8.58579 17.25 8.25 17.5858 8.25 18C8.25 18.4142 8.58579 18.75 9 18.75H15C15.4142 18.75 15.75 18.4142 15.75 18C15.75 17.5858 15.4142 17.25 15 17.25H9Z"
              fill={location.pathname === "/" ? "#ffffff" : "#0795ff"}
            ></path>
             
          </g>
        </svg>
      </Link>
      <Link
        to={"/news"}
        className={`${
          location.pathname === "/news" ? "bg-[#0795ff]" : "bg-[#fafafa]"
        } rounded-full p-2`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={64}
          height={64}
          viewBox="0 0 28 28"
          className="w-8 h-8"
        >
          <title>{"ic_fluent_news_28_filled"}</title>
          <path
            fill={location.pathname === "/news" ? "#fafafa" : "#0795ff"}
            fillRule="nonzero"
            strokeWidth={0}
            d="M22 5.75V20.5a.5.5 0 0 0 .992.09L23 20.5V7h1.25a1.75 1.75 0 0 1 1.744 1.606L26 8.75v12a3.25 3.25 0 0 1-3.066 3.245L22.75 24H5.25a3.25 3.25 0 0 1-3.245-3.066L2 20.75v-15a1.75 1.75 0 0 1 1.606-1.744L3.75 4h16.5a1.75 1.75 0 0 1 1.744 1.606L22 5.75V20.5 5.75ZM9.747 13.003H7.25a1.75 1.75 0 0 0-1.744 1.607l-.006.143v2.497a1.75 1.75 0 0 0 1.606 1.744L7.25 19h2.497a1.75 1.75 0 0 0 1.744-1.606l.006-.144v-2.497A1.75 1.75 0 0 0 9.89 13.01l-.143-.006ZM17.75 17.5h-3.5l-.102.007a.75.75 0 0 0 0 1.486l.102.007h3.5l.102-.007a.75.75 0 0 0 0-1.486l-.102-.007Zm-10.5-2.997h2.497a.25.25 0 0 1 .243.193l.007.057v2.497a.25.25 0 0 1-.193.243l-.057.007H7.25a.25.25 0 0 1-.243-.193L7 17.25v-2.497a.25.25 0 0 1 .193-.243l.057-.007h2.497H7.25Zm10.5-1.5h-3.5l-.102.007a.75.75 0 0 0 0 1.487l.102.006h3.5l.102-.006a.75.75 0 0 0 0-1.487l-.102-.007Zm0-4.506H6.25l-.102.007a.75.75 0 0 0 0 1.486l.102.007h11.5l.102-.007a.75.75 0 0 0 0-1.486l-.102-.007Z"
          />
        </svg>
      </Link>
    </div>
  );
};

export default Navbar;
