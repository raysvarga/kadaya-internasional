import React, { useEffect, useState } from "react";
import { useMainContext } from "../../context/MainContext";
import { useLocation, useNavigate } from "react-router-dom";
import ModalProductCategory from "./ModalProductCategory";

const CategorySelection = ({ category, selected }) => {
  const { setSearchQuery } = useMainContext();
  const { activeCategory, setActiveCategory, otherSelected, setOtherSelected } =
    useMainContext();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setSearchQuery(null);
  }, []);

  useEffect(() => {
    setActiveCategory("");
  }, [otherSelected]);

  return (
    <div className="relative">
      <ModalProductCategory isVisible={isVisible} setState={setIsVisible} />
      <div className="px-2 mt-4">
        <h2 className={`font-semibold text-lg ${category ? null : "hidden"}`}>
          Kategori
        </h2>
        <div className="mt-3 flex justify-between">
          <div className="flex flex-col items-center w-fit">
            <button
              className={`w-12 h-12 bg-[#276b1e] rounded-full grid place-content-center ${
                activeCategory === "Ikan Segar" ? "bg-red-600" : null
              }`}
              onClick={() => {
                navigate("/find/ikan-segar");
                setOtherSelected(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                width={64}
                height={64}
                fill="#fff"
                stroke="#fff"
                viewBox="0 0 492.863 492.863"
                className="w-8 h-8"
              >
                <path d="M465.218 250.518c-12.205-3.241-25.626-5.247-31.061-5.247-11.033 0-20.388 7.315-23.475 17.349-38.783 3.271-69.348 35.86-69.348 75.475v25.601c0 9.981-8.12 18.102-18.102 18.102-9.98 0-18.101-8.12-18.101-18.102V287.27c.002-.128.01-.256.01-.385s-.008-.256-.01-.385v-26.249h1.03a7.502 7.502 0 0 0 7.457-8.299c-.014-.125-1.283-11.933-3.58-29.971l38.017-31.391c9.239-7.629 14.187-18.867 13.574-30.833-.607-11.871-6.587-22.473-16.417-29.129l-18.657-14.441a42.348 42.348 0 0 1-10.251-11.446l-47.061-77.004c-6.969-14.719-14.314-21.413-22.813-21.413-8.491 0-15.773 6.69-22.684 21.216l-47.201 77.221a42.342 42.342 0 0 1-10.221 11.422l-18.7 14.498c-9.83 6.657-15.808 17.258-16.416 29.129-.612 11.966 4.336 23.204 13.575 30.832l38.038 31.408c-2.293 17.991-3.551 29.641-3.579 29.904a7.501 7.501 0 0 0 7.458 8.299h1.031v26.23c-.002.135-.01.269-.01.404s.008.269.01.404v76.406c0 9.981-8.12 18.102-18.101 18.102s-18.101-8.12-18.101-18.102v-25.601c0-39.615-30.565-72.203-69.348-75.475-3.087-10.034-12.442-17.349-23.476-17.349-5.435 0-18.856 2.006-31.061 5.247C8.268 255.664 0 261.439 0 269.829c0 8.389 8.268 14.164 27.646 19.31 12.205 3.241 25.625 5.247 31.061 5.247 10.809 0 20.002-7.021 23.274-16.741 30.597 3.124 54.549 29.043 54.549 60.451v25.601c0 18.252 14.849 33.102 33.101 33.102s33.101-14.85 33.101-33.102v-37.66a59.214 59.214 0 0 0 6.333 6.097v53.029a42.427 42.427 0 0 1-22.5 37.501l-37.53 20.016a7.498 7.498 0 0 0-3.088 10.146 7.5 7.5 0 0 0 10.147 3.089l37.53-20.017a57.397 57.397 0 0 0 30.44-50.735V341.16a58.446 58.446 0 0 0 4.332 1.592v74.015c0 4.106-.408 8.23-1.213 12.256a7.898 7.898 0 0 0-.065.374l-7.174 48.547a7.501 7.501 0 0 0 7.428 8.598 7.502 7.502 0 0 0 7.41-6.404l7.147-48.364a77.694 77.694 0 0 0 1.466-15.006v-71.247a58.737 58.737 0 0 0 6.069 0v71.247c0 5.022.493 10.07 1.467 15.005l7.148 48.365a7.5 7.5 0 0 0 8.515 6.322 7.498 7.498 0 0 0 6.322-8.516l-7.175-48.547a7.85 7.85 0 0 0-.064-.373 62.64 62.64 0 0 1-1.214-12.257V342.75a58.446 58.446 0 0 0 4.332-1.592v44.003a57.396 57.396 0 0 0 30.441 50.735l37.529 20.016a7.496 7.496 0 0 0 10.146-3.088 7.498 7.498 0 0 0-3.088-10.146l-37.529-20.016a42.427 42.427 0 0 1-22.5-37.501v-53.028a59.224 59.224 0 0 0 6.334-6.097v37.66c0 18.252 14.85 33.102 33.102 33.102s33.101-14.85 33.101-33.102v-25.601c0-31.408 23.952-57.327 54.549-60.451 3.273 9.719 12.465 16.741 23.274 16.741 5.435 0 18.855-2.006 31.061-5.247 19.378-5.146 27.646-10.921 27.646-19.31.002-8.389-8.265-14.164-27.643-19.31zM58.706 279.385c-8.841 0-32.337-5.105-41.25-9.557 8.913-4.451 32.409-9.558 41.25-9.558 5.268 0 9.554 4.285 9.557 9.553v.01c-.003 5.268-4.289 9.552-9.557 9.552zm221.859 17.077c-5.281 0-9.577-4.296-9.577-9.577s4.296-9.577 9.577-9.577c5.215 0 9.462 4.193 9.566 9.385v.203c0 .122-.008.242-.009.364-.199 5.107-4.403 9.202-9.557 9.202zM246.417 21.323c.199.023 20.154 4.21 43.55 164.522.598 4.099 4.401 6.923 8.504 6.339a7.5 7.5 0 0 0 6.338-8.505c-5.626-38.559-11.529-71.335-17.59-97.766l16.287 26.65a57.27 57.27 0 0 0 13.868 15.485l18.855 14.595c.14.108.283.212.431.31 5.981 3.988 9.622 10.393 9.989 17.571.367 7.18-2.601 13.923-8.145 18.5l-41.222 34.037c-.037.031-.069.065-.106.097-.063.054-.122.111-.183.167a7.52 7.52 0 0 0-.384.373l-.039.043a7.5 7.5 0 0 0-1.873 6.552 1996.043 1996.043 0 0 1 3.067 24.959H195.095c2.123-18.231 7.735-63.763 15.783-109.133 6.042-34.067 12.241-61.315 18.424-80.987 10.096-32.11 17.076-33.8 17.115-33.809zm-92.082 157.752c-5.543-4.577-8.512-11.319-8.145-18.499s4.008-13.584 9.99-17.572a7.04 7.04 0 0 0 .435-.313l18.901-14.654a57.28 57.28 0 0 0 13.829-15.454l16.297-26.662c-3.12 13.621-6.214 28.991-9.26 46.049-4.582 25.661-8.395 51.463-11.253 72.533l-30.794-25.428zm48.406 108.205c-.001-.128-.01-.255-.01-.384v-.213c.109-5.187 4.354-9.375 9.567-9.375 5.281 0 9.577 4.296 9.577 9.577s-4.296 9.577-9.577 9.577c-5.147 0-9.348-4.085-9.557-9.182zm7.505 24.09a24.87 24.87 0 0 0 2.052.092c13.552 0 24.577-11.025 24.577-24.577s-11.025-24.577-24.577-24.577a24.44 24.44 0 0 0-9.567 1.939v-3.995h87.4v3.995a24.439 24.439 0 0 0-9.566-1.938c-13.552 0-24.577 11.025-24.577 24.577s11.025 24.577 24.577 24.577c.692 0 1.375-.036 2.052-.092-7.866 11.593-21.151 19.226-36.186 19.226-15.034-.001-28.319-7.634-36.185-19.227zm223.911-31.985c-5.27 0-9.557-4.287-9.557-9.557 0-5.271 4.287-9.558 9.557-9.558 8.842 0 32.338 5.106 41.25 9.558-8.913 4.452-32.408 9.557-41.25 9.557z" />
              </svg>
            </button>
            <p className="text-xs mt-2 text-center">
              Ikan <br /> Segar
            </p>
          </div>
          <div className="flex flex-col items-center w-fit">
            <button
              onClick={() => {
                navigate("/find/produk-olahan");
                setOtherSelected(false);
              }}
              className={`w-12 h-12 ${
                activeCategory === "Produk Olahan" ? "bg-red-600" : null
              } bg-[#276b1e] rounded-full grid place-content-center`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                width={64}
                height={64}
                fill="#fff"
                viewBox="0 0 512 512"
                className="w-8 h-8"
              >
                <path d="M445.859 250.713c-8.56-40.213-30.354-77.475-61.37-104.919a7.837 7.837 0 0 0-10.386 11.737c28.521 25.237 48.561 59.489 56.427 96.445a7.84 7.84 0 0 0 9.296 6.034 7.836 7.836 0 0 0 6.033-9.297zM362.715 129.097a193.946 193.946 0 0 0-39.198-19.923 7.837 7.837 0 0 0-5.467 14.689 178.38 178.38 0 0 1 36.026 18.312 7.831 7.831 0 0 0 10.858-2.219 7.837 7.837 0 0 0-2.219-10.859zM168.185 245.552h-35.438a7.837 7.837 0 0 0 0 15.674h35.438a7.837 7.837 0 0 0 0-15.674zM440.188 375.872c-6.071-6.072-14.145-9.416-22.733-9.416-8.586 0-16.659 3.344-22.733 9.416l-39.887 39.888-131.474.104v-9.423h61.049c17.727 0 32.149-14.422 32.149-32.149s-14.423-32.149-32.149-32.149h-87.952a18.287 18.287 0 0 0-11.971 4.464l-44.642 38.666c-2.04-8.082-9.351-14.09-18.058-14.09H75.864c-10.28 0-18.643 8.362-18.643 18.642v97.251c0 10.28 8.363 18.642 18.643 18.642h45.923c10.28 0 18.643-8.362 18.643-18.642v-7.021h38.247a7.837 7.837 0 0 0 0-15.674h-38.248V405.5l54.319-47.047a2.603 2.603 0 0 1 1.709-.637h87.952c9.084 0 16.476 7.391 16.476 16.476 0 9.084-7.392 16.476-16.476 16.476h-5.945v-21.053a7.837 7.837 0 0 0-15.674 0v21.053h-47.267a7.837 7.837 0 0 0-7.837 7.837v25.103a7.836 7.836 0 0 0 7.837 7.837h.006l142.56-.113a7.833 7.833 0 0 0 5.535-2.296l42.179-42.18c3.113-3.112 7.251-4.825 11.652-4.825s8.539 1.714 11.651 4.825c6.423 6.424 6.423 16.877 0 23.301l-2.055 2.055-12.955-12.955a7.837 7.837 0 0 0-11.082 11.082l12.955 12.955-40.223 40.223a2.597 2.597 0 0 1-1.847.765h-167.01a7.837 7.837 0 0 0 0 15.674h167.009c4.884 0 9.476-1.902 12.93-5.356l53.361-53.361c12.533-12.536 12.533-32.933-.001-45.467zM124.757 487.077a2.973 2.973 0 0 1-2.97 2.969h-15.125v-35.864a7.837 7.837 0 0 0-15.674 0v35.864H75.864a2.973 2.973 0 0 1-2.97-2.969v-97.251a2.973 2.973 0 0 1 2.97-2.969h45.923a2.973 2.973 0 0 1 2.97 2.969v97.251z" />
                <circle cx={98.826} cy={412.109} r={10.157} />
                <path d="M493.714 270.63h-18.455c-2.152-23.44-7.991-46.177-17.48-67.817-11.819-26.953-28.673-50.944-50.097-71.304a7.836 7.836 0 1 0-10.797 11.361c19.904 18.917 35.562 41.202 46.54 66.237a202.361 202.361 0 0 1 16.104 61.524h-68.738a7.837 7.837 0 0 0 0 15.674h102.922a2.615 2.615 0 0 1 2.612 2.612v12.015a2.615 2.615 0 0 1-2.612 2.612H18.286a2.615 2.615 0 0 1-2.612-2.612v-12.016a2.615 2.615 0 0 1 2.612-2.612h334.89a7.837 7.837 0 0 0 0-15.674H52.492c.316-3.156.706-6.291 1.165-9.404h52.923a7.837 7.837 0 0 0 0-15.674H56.606C77.387 154.648 158.887 86.615 256 86.615c43.789 0 85.545 13.635 120.754 39.43a7.838 7.838 0 0 0 9.263-12.644c-30.214-22.135-64.903-35.945-101.603-40.646l-3.201-10.443a12.906 12.906 0 0 0 4.373-4.523l18.357-32.17a12.961 12.961 0 0 0-.047-12.898 12.966 12.966 0 0 0-11.18-6.439h-73.431a12.963 12.963 0 0 0-11.178 6.435 12.963 12.963 0 0 0-.05 12.9l18.359 32.171a12.895 12.895 0 0 0 4.372 4.523L227.58 72.78C126.223 85.903 46.274 168.199 36.757 270.63H18.286C8.203 270.63 0 278.833 0 288.915v12.016c0 10.082 8.203 18.286 18.286 18.286h475.429c10.082 0 18.286-8.203 18.286-18.286v-12.016c-.001-10.082-8.204-18.285-18.287-18.285zM256 70.941c-3.878 0-7.73.109-11.561.308l2.126-6.939h18.868l2.125 6.937A225.28 225.28 0 0 0 256 70.941zm-31.989-48.985h63.976l-15.224 26.68h-33.528l-15.224-26.68z" />
              </svg>
            </button>
            <p className="text-xs mt-2 text-center">
              Produk <br /> Olahan
            </p>
          </div>
          <div className="flex flex-col items-center w-fit">
            <button
              onClick={() => {
                navigate("/find/rumput-laut");
                setOtherSelected(false);
              }}
              className={`w-12 h-12 ${
                activeCategory === "Rumput Laut" ? "bg-red-600" : null
              } bg-[#276b1e] rounded-full grid place-content-center`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                width={64}
                height={64}
                viewBox="0 0 512 512"
                className="w-8 h-8"
              >
                <path
                  d="M463.791 243.222c-2.969-7.578-7.453-14.141-12.938-19.234-5.484-5.109-11.844-9.266-18.938-10.766-42.047-8.938-62.079 13.594-70.313 32.094-2.328 5.266-4.328 10.406-4.688 16.047-.422 6.719 3.25 13.625 6.875 19.328 3.656 5.656 7.344 9.922 7.344 9.922 2.922 4.234 3.844 7.391 3.234 9.781-.625 2.375-2.813 4-6.188 5.344 0 0-4.188 1.422-8.859 4.281-4.703 2.891-9.891 7.094-12.219 13.406-2.297 6.234-1.422 14.125-.234 20.75 1.219 6.609 2.859 11.828 2.859 11.828.047 4.453-2.016 8.828-5.469 11.656 0 0-2.328.922-5.219 2.688-2.891 1.797-6.359 4.422-8.719 8.047-1.141 1.766-1.969 3.672-2.547 5.625a44.091 44.091 0 0 0-3.375-6.25c-3.516-5.391-6.75-7.891-6.734-7.906-5.141-9.453-8.125-21.406-7.438-31.266 0 .016 3.141-6.359 4.828-16.125 1.734-9.734 1.875-22.766-2.938-34.75a56.114 56.114 0 0 0-2.422-5.172l-.313-.594-.281-.5-.594-.938a45.461 45.461 0 0 0-1.172-1.813c-1.594-2.344-3.266-4.453-4.797-6.25-3.063-3.594-5.531-5.922-5.531-5.922-3.375-5.359-4.516-12.344-3.047-18.234.016.016 3.484-6.094 7.375-14.016 1.922-3.984 3.984-8.422 5.672-13 1.703-4.594 3.047-9.313 3.469-14.109.453-4.813.016-9.391-.844-13.703-.875-4.297-2.188-8.297-3.547-11.781-2.734-6.953-5.688-11.766-5.703-11.75-3.203-10.344-2.047-17.109 8.719-23.047.016.016 6.125-4.609 15.156-8.047 12.984-4.938 25.734-14.906 38.766-37.406 13.047-22.5 9.359-62.453-18.547-83.156-7.078-5.25-14.234-9.375-22.484-12.297C287.556-6.2 256.525.519 238.306 23.3c-33.453 41.813-7.891 89.484-7.891 89.469.984 8.734.719 14.766-1 19.5s-4.875 8.141-9.391 11.516c.016.016-5.578 3.563-11.906 11.469-3.172 3.938-6.484 9-9.25 15.188a71.629 71.629 0 0 0-5.859 21.734c-.859 8.125-.281 16.594 1.25 24.516 1.516 7.938 3.953 15.328 6.563 21.516 5.25 12.422 11.047 20 11.016 20.016 3.516 8.125 5.781 17.875 6.281 26.938.016 0-.75 4.469-.563 11.297a75.655 75.655 0 0 0 1.25 11.688 68.745 68.745 0 0 0 1.563 6.578l.516 1.656.516 1.563c.313.922.641 1.844 1.016 2.766 4.875 12.109 13.281 20.141 20.422 25.547 7.141 5.359 13.125 8.141 13.141 8.141 5.984 6.328 9 16.422 7.188 24.531-.016 0-2.125 2.75-4.125 7.11-1.984 4.375-3.875 10.156-3.594 16.969.188 4.625.859 9.031 1.906 13.328a28.184 28.184 0 0 0-3-.125c-4.406.016-7.578.906-7.578.906-7.172-1.313-13.5-6.828-15.578-13.563 0 0 .625-5.891-.094-13.156-.734-7.313-2.656-15.907-8.438-22.079-3.5-3.719-8.063-6.156-11.813-7.75-3.719-1.594-6.625-2.297-6.625-2.297-4.578-2.734-7.859-7.484-8.656-12.625.016 0 .906-6.25 1.078-14.063.125-7.828-.359-17.109-4.203-24.156-3.859-7.078-10.578-11.391-16.469-14.219-5.859-2.797-10.875-3.953-10.875-3.953-8.203-4.375-11.063-8.875-6.047-18.469.016.016 3.688-5.703 7.031-13.281 3.328-7.625 6.406-16.984 4.656-25.594-1.453-7.078-4.359-13.578-8.453-19.5s-9.391-11.25-15.609-15.781c-12.438-9.016-28.641-15-46.25-14.141-17.578.844-33.234 8.828-43.594 22.359-5.172 6.734-8.984 14.828-10.984 23.766s-2.188 18.734-.156 28.672c2.422 11.953 10.375 22.234 17.688 29.063 7.328 6.859 13.953 10.422 13.953 10.438 5.813 4.125 8.984 7.563 10.219 11.125s.531 7.203-1.328 11.594c0 0-2.594 5.078-3.781 12.984-1.188 7.875-.875 18.719 4.797 29.266 5.563 10.406 15.766 18.609 24.469 23.672 8.703 5.125 15.891 7.328 15.875 7.344 5.484 3.594 10.094 9.172 12.688 15.266.016 0 .438 3.469 2.094 8.234 1.625 4.75 4.516 10.844 9.188 15.859 7.766 8.359 18.422 11.891 26.844 13.047 8.469 1.188 14.781.188 14.781.188 7.844 1.984 15.188 7.703 19 14.813 0 0 .078 3.422 1.734 7.984s4.953 10.281 11.234 14.594c10.281 7.063 22.234 9.422 32.656 7.547a37.376 37.376 0 0 0 6.078-1.609c2.625 13.25 15.172 23.313 30.234 23.313 15.594 0 28.453-10.75 30.484-24.672 8.188-.469 16.563-4.188 23.094-11.063 4.266-4.516 5.922-9.797 6.453-13.875.547-4.109 0-7.031 0-7.031 1.844-6.516 6.859-12.281 12.922-14.844 0 0 5.313.125 12.016-1.766 6.703-1.875 14.828-5.875 19.906-13.625 3.063-4.656 4.531-10.031 5.188-14.172.656-4.156.531-7.109.531-7.109 1.266-5.359 4.313-10.406 8.391-13.859-.016-.016 5.641-2.406 12.25-7.313 6.594-4.859 14.11-12.406 17.547-21.563 3.453-9.172 2.484-18.234.578-24.719-1.922-6.5-4.672-10.531-4.656-10.531-3.016-8.906-2.859-13.797 5.375-20.406-.016-.016 5.453-3.531 11.172-10.078 2.859-3.266 5.75-7.297 8.016-11.906 2.281-4.594 3.906-9.781 4.234-15.203.56-8.896-.862-17.489-3.831-25.052zM261.65 462.363c-1.844 2.922-5.906 3.672-9.016 1.609-19.766-13-38.5-27.703-55.578-44.172-17.078-16.453-32.469-34.703-45.641-54.438-13.156-19.719-24.078-40.875-32.625-62.891s-14.75-44.844-18.859-67.953c-.656-3.641 1.641-7.031 5.063-7.578 3.422-.531 6.641 1.891 7.266 5.391 4 22.391 9.984 44.422 18.219 65.609 8.234 21.203 18.719 41.531 31.375 60.484s27.453 36.5 43.922 52.375 34.594 30.094 53.766 42.734c3.014 1.971 3.967 5.908 2.108 8.83zm37.062-45.25c-.281 4.859-3.547 8.406-6.969 7.953-3.438-.438-5.797-4.375-5.531-8.813.844-14.219-.313-28.547-3.156-42.719-2.813-14.172-7.25-28.172-12.375-42.156-2.563-6.984-5.281-13.984-8.031-21.016l-4.172-10.672a218.255 218.255 0 0 1-3.875-11.156 212.616 212.616 0 0 1-9.172-46.234c-2.734-31.344 1.609-62.906 10.984-92.484 9.375-29.641 23.625-57.391 40.797-82.875 2.688-4.016 7.25-5.563 10.047-3.531s2.875 6.766.281 10.625c-16.609 24.672-30.281 51.375-39.219 79.672-8.938 28.234-12.984 58.125-10.391 87.656a200.837 200.837 0 0 0 12.312 54.016l4.109 10.516c2.766 7.063 5.516 14.141 8.141 21.297 5.234 14.297 9.891 28.938 12.875 44.016 3.017 15.062 4.283 30.546 3.345 45.905zm111.532-103.547c-4.844 19.109-11.813 37.594-20.484 55.188-17.359 35.204-41.422 66.61-68.984 94.016a5.425 5.425 0 0 1-3.891 1.594 30.661 30.661 0 0 0-5.234-4.25 5.44 5.44 0 0 1 1.453-5.078c26.859-26.719 50.172-57.188 66.891-91.11 8.359-16.953 15.047-34.719 19.688-53.047 4.641-18.313 7.219-37.156 7.547-56.094.063-2.969 2.484-5.391 5.484-5.406 3.016-.031 5.469 2.484 5.406 5.609-.345 19.781-3.033 39.484-7.876 58.578z"
                  style={{
                    fill: "#fff",
                  }}
                />
              </svg>
            </button>
            <p className="text-xs mt-2 text-center">
              Rumput <br />
              Laut
            </p>
          </div>
          <div className="flex flex-col items-center w-fit">
            <button
              onClick={() => {
                navigate("/find/kopi");
                setOtherSelected(false);
              }}
              className={`w-12 h-12 ${
                activeCategory === "Kopi" ? "bg-red-600" : null
              } bg-[#276b1e] rounded-full grid place-content-center`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                width={64}
                height={64}
                fill="#fff"
                viewBox="0 0 512.036 512.036"
                className="w-8 h-8 ps-1"
              >
                <path d="M273.108 314.855c0-60.655 49.766-110.003 110.933-110.003 54.426 0 93.926-35.627 93.926-84.71v-16.887c-10.103-5.897-21.811-9.335-34.33-9.335h-8.533c-98.739 0-179.063 80.333-179.063 179.072 0 17.263 6.477 33.007 17.067 45.056v-3.193z" />
                <path d="M495.037 117.339v2.799c0 58.982-46.686 101.786-111.002 101.786-51.755 0-93.858 41.694-93.858 92.928v17.246c10.086 5.871 21.768 9.293 34.253 9.293h8.533c98.748 0 179.072-80.333 179.072-179.072.001-17.229-6.451-32.939-16.998-44.98zM126.937 148.747a7.32 7.32 0 0 1-.7 1.263c-14.029 20.983-18.475 46.251-12.186 69.333 6.084 22.374 21.905 40.713 44.544 51.644l16.777 7.159c9.779-6.383 18.099-15.07 23.663-25.924l3.9-7.612c21.427-41.813 24.858-89.199 9.677-133.427C196.8 65.137 162.982 28.094 117.38 6.872c-16.282-7.578-34.15-8.525-50.355-4.07l2.85 1.434c57.301 26.666 81.937 88.839 57.062 144.511z" />
                <path d="M104.561 283.339a72.726 72.726 0 0 0 30.771 6.801c6.409 0 12.757-.862 18.876-2.475l-2.671-1.143c-27.52-13.286-46.558-35.49-53.956-62.694-7.518-27.622-2.389-57.711 14.054-82.679 20.489-46.763-.563-98.918-49.186-121.549L46.85 11.783c-9.924 6.391-18.312 15.223-23.945 26.214l-3.9 7.603C-2.422 87.413-5.853 134.807 9.328 179.036c15.813 46.037 49.64 83.089 95.233 104.303zM162.548 402.707c42.24 42.453 88.457 43.58 130.159 3.157.23-.222.469-.427.725-.623l11.597-8.96c-3.217-12.39-10.018-23.663-19.942-32.58l-6.306-5.76c-75.034-69.478-191.454-66.603-259.354 6.221C7.71 375.998 1.02 391.188.184 407.367l3.157-2.449c54.46-49.238 111.173-50.176 159.207-2.211z" />
                <path d="M150.466 414.757c-41.779-41.719-87.603-40.644-136.175 3.234l-12.083 9.387c3.208 12.322 9.916 23.552 19.712 32.503l6.349 5.794c.06.06.128.111.196.171 35.866 30.788 81.468 46.063 126.771 46.063 48.597 0 96.845-17.587 132.318-52.471 11.819-11.844 18.586-26.999 19.473-43.127l-2.79 2.15c-48.708 46.941-104.721 45.593-153.771-3.704z" />
              </svg>
            </button>
            <p className="text-xs mt-2 text-center">Kopi</p>
          </div>
        </div>
      </div>
      <hr className="mt-4" />
    </div>
  );
};

export default CategorySelection;
