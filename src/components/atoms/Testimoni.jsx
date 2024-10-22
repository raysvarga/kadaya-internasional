import React from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

const Testimoni = () => {
  const CustomLeftArrow = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        className="absolute left-0 ml-2 top-1/2 transform -translate-y-1/2 bg-[#0795ff] text-white p-2 rounded-full w-8 h-8 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.707 14.707a1 1 0 010-1.414L9.414 10l3.293-3.293a1 1 0 10-1.414-1.414l-4 4a1 1 0 000 1.414l4 4a1 1 0 001.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    );
  };

  const CustomRightArrow = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        className="absolute right-0 mr-2 top-1/2 transform -translate-y-1/2 bg-[#0795ff] text-white p-2 rounded-full w-8 h-8 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    );
  };
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      infinite={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      customLeftArrow={<CustomLeftArrow />}
      customRightArrow={<CustomRightArrow />}
    >
      <div className="mx-5 my-5">
        <div className="bg-[#444444] bg-opacity-5 p-5 rounded-t-md">
          <p className="mb-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              fill="#0795ff"
              stroke="#0795ffE"
              strokeWidth={0.001}
              viewBox="0 0 52 52"
              width="20"
              className="inline-block opacity-50"
            >
              <path d="M44.3 6.5c-9 0-15.9 7-15.9 16V44c0 .8.7 1.5 1.5 1.5h17c.8 0 1.5-.7 1.5-1.5V27c0-.8-.7-1.5-1.5-1.5H34.4v-3c0-5 4.9-10 9.9-10h2.6c.8 0 1.5-.7 1.5-1.5V8c0-.8-.7-1.5-1.5-1.5h-2.6zM19.5 6.5c-9 0-15.9 7-15.9 16V44c0 .8.7 1.5 1.5 1.5h17c.8 0 1.5-.7 1.5-1.5V27c0-.8-.7-1.5-1.5-1.5H9.6v-3c0-5 4.9-10 9.9-10h2.6c.8 0 1.5-.7 1.5-1.5V8c0-.8-.7-1.5-1.5-1.5h-2.6z" />
            </svg>
            <span className="px-3 text-black text-opacity-80 text-sm italic">
            Arrum Samudra Nusantara memiliki potensi besar di bidang pemberdayaan UMKM. Dengan meningkatkan kualitas layanan dan memanfaatkan teknologi.
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              fill="#0795ff"
              stroke="#0795ff"
              strokeWidth={0.001}
              transform="rotate(180)"
              viewBox="0 0 52 52"
              width="20"
              className="inline-block opacity-50"
            >
              <path d="M44.3 6.5c-9 0-15.9 7-15.9 16V44c0 .8.7 1.5 1.5 1.5h17c.8 0 1.5-.7 1.5-1.5V27c0-.8-.7-1.5-1.5-1.5H34.4v-3c0-5 4.9-10 9.9-10h2.6c.8 0 1.5-.7 1.5-1.5V8c0-.8-.7-1.5-1.5-1.5h-2.6zM19.5 6.5c-9 0-15.9 7-15.9 16V44c0 .8.7 1.5 1.5 1.5h17c.8 0 1.5-.7 1.5-1.5V27c0-.8-.7-1.5-1.5-1.5H9.6v-3c0-5 4.9-10 9.9-10h2.6c.8 0 1.5-.7 1.5-1.5V8c0-.8-.7-1.5-1.5-1.5h-2.6z" />
            </svg>
          </p>
        </div>
        <div className="ps-8 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            width={200}
            height={200}
            stroke="#000"
            viewBox="-153.6 -153.6 819.2 819.2"
            className="w-20 absolute -top-2 -translate-y-1/2"
          >
            <rect
              width={819.2}
              height={819.2}
              x={-153.6}
              y={-153.6}
              fill="#0795ff"
              stroke="none"
              strokeWidth={0}
              rx={409.6}
            />
            <path
              d="M486.28 196.046C482.19 87.09 392.628 0 282.673 0 170.118 0 78.875 91.234 78.856 203.781 63.67 233.026 27.245 307.275 27.245 307.275a20.58 20.58 0 0 0-.281 17.83 20.623 20.623 0 0 0 13.731 11.387l33.308 8.334s16.968 76.612 20.839 94.388c5.853 26.919 14.56 32.754 40.024 32.754 25.483 0 55.6-8.253 55.6-8.253V512h218.366v-76.421c0-27.673 7.616-62.38 29.118-88.336 43.241-52.183 51.647-108.01 48.33-151.197z"
              style={{
                fill: "#fff",
              }}
            />
          </svg>
          <h5 className="text-[#0795ff] mt-2 font-semibold pt-9">
            Rays
          </h5>
          <p className="opacity-80 text-sm">Manusia</p>
        </div>
      </div>
      <div className="mx-5 my-5">
        <div className="bg-[#444444] bg-opacity-5 p-5 rounded-t-md">
          <p className="mb-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              fill="#0795ff"
              stroke="#0795ffE"
              strokeWidth={0.001}
              viewBox="0 0 52 52"
              width="20"
              className="inline-block opacity-50"
            >
              <path d="M44.3 6.5c-9 0-15.9 7-15.9 16V44c0 .8.7 1.5 1.5 1.5h17c.8 0 1.5-.7 1.5-1.5V27c0-.8-.7-1.5-1.5-1.5H34.4v-3c0-5 4.9-10 9.9-10h2.6c.8 0 1.5-.7 1.5-1.5V8c0-.8-.7-1.5-1.5-1.5h-2.6zM19.5 6.5c-9 0-15.9 7-15.9 16V44c0 .8.7 1.5 1.5 1.5h17c.8 0 1.5-.7 1.5-1.5V27c0-.8-.7-1.5-1.5-1.5H9.6v-3c0-5 4.9-10 9.9-10h2.6c.8 0 1.5-.7 1.5-1.5V8c0-.8-.7-1.5-1.5-1.5h-2.6z" />
            </svg>
            <span className="px-3 text-black text-opacity-80 text-sm italic">
            Arrum Samudra Nusantara memiliki potensi besar di bidang pemberdayaan UMKM. Dengan meningkatkan kualitas layanan dan memanfaatkan teknologi.
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              fill="#0795ff"
              stroke="#0795ff"
              strokeWidth={0.001}
              transform="rotate(180)"
              viewBox="0 0 52 52"
              width="20"
              className="inline-block opacity-50"
            >
              <path d="M44.3 6.5c-9 0-15.9 7-15.9 16V44c0 .8.7 1.5 1.5 1.5h17c.8 0 1.5-.7 1.5-1.5V27c0-.8-.7-1.5-1.5-1.5H34.4v-3c0-5 4.9-10 9.9-10h2.6c.8 0 1.5-.7 1.5-1.5V8c0-.8-.7-1.5-1.5-1.5h-2.6zM19.5 6.5c-9 0-15.9 7-15.9 16V44c0 .8.7 1.5 1.5 1.5h17c.8 0 1.5-.7 1.5-1.5V27c0-.8-.7-1.5-1.5-1.5H9.6v-3c0-5 4.9-10 9.9-10h2.6c.8 0 1.5-.7 1.5-1.5V8c0-.8-.7-1.5-1.5-1.5h-2.6z" />
            </svg>
          </p>
        </div>
        <div className="ps-8 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            width={200}
            height={200}
            stroke="#000"
            viewBox="-153.6 -153.6 819.2 819.2"
            className="w-20 absolute -top-2 -translate-y-1/2"
          >
            <rect
              width={819.2}
              height={819.2}
              x={-153.6}
              y={-153.6}
              fill="#0795ff"
              stroke="none"
              strokeWidth={0}
              rx={409.6}
            />
            <path
              d="M486.28 196.046C482.19 87.09 392.628 0 282.673 0 170.118 0 78.875 91.234 78.856 203.781 63.67 233.026 27.245 307.275 27.245 307.275a20.58 20.58 0 0 0-.281 17.83 20.623 20.623 0 0 0 13.731 11.387l33.308 8.334s16.968 76.612 20.839 94.388c5.853 26.919 14.56 32.754 40.024 32.754 25.483 0 55.6-8.253 55.6-8.253V512h218.366v-76.421c0-27.673 7.616-62.38 29.118-88.336 43.241-52.183 51.647-108.01 48.33-151.197z"
              style={{
                fill: "#fff",
              }}
            />
          </svg>
          <h5 className="text-[#0795ff] mt-2 font-semibold pt-9">
            Rays
          </h5>
          <p className="opacity-80 text-sm">Manusia</p>
        </div>
      </div>
      <div className="mx-5 my-5">
        <div className="bg-[#444444] bg-opacity-5 p-5 rounded-t-md">
          <p className="mb-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              fill="#0795ff"
              stroke="#0795ffE"
              strokeWidth={0.001}
              viewBox="0 0 52 52"
              width="20"
              className="inline-block opacity-50"
            >
              <path d="M44.3 6.5c-9 0-15.9 7-15.9 16V44c0 .8.7 1.5 1.5 1.5h17c.8 0 1.5-.7 1.5-1.5V27c0-.8-.7-1.5-1.5-1.5H34.4v-3c0-5 4.9-10 9.9-10h2.6c.8 0 1.5-.7 1.5-1.5V8c0-.8-.7-1.5-1.5-1.5h-2.6zM19.5 6.5c-9 0-15.9 7-15.9 16V44c0 .8.7 1.5 1.5 1.5h17c.8 0 1.5-.7 1.5-1.5V27c0-.8-.7-1.5-1.5-1.5H9.6v-3c0-5 4.9-10 9.9-10h2.6c.8 0 1.5-.7 1.5-1.5V8c0-.8-.7-1.5-1.5-1.5h-2.6z" />
            </svg>
            <span className="px-3 text-black text-opacity-80 text-sm italic">
            Arrum Samudra Nusantara memiliki potensi besar di bidang pemberdayaan UMKM. Dengan meningkatkan kualitas layanan dan memanfaatkan teknologi.
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              fill="#0795ff"
              stroke="#0795ff"
              strokeWidth={0.001}
              transform="rotate(180)"
              viewBox="0 0 52 52"
              width="20"
              className="inline-block opacity-50"
            >
              <path d="M44.3 6.5c-9 0-15.9 7-15.9 16V44c0 .8.7 1.5 1.5 1.5h17c.8 0 1.5-.7 1.5-1.5V27c0-.8-.7-1.5-1.5-1.5H34.4v-3c0-5 4.9-10 9.9-10h2.6c.8 0 1.5-.7 1.5-1.5V8c0-.8-.7-1.5-1.5-1.5h-2.6zM19.5 6.5c-9 0-15.9 7-15.9 16V44c0 .8.7 1.5 1.5 1.5h17c.8 0 1.5-.7 1.5-1.5V27c0-.8-.7-1.5-1.5-1.5H9.6v-3c0-5 4.9-10 9.9-10h2.6c.8 0 1.5-.7 1.5-1.5V8c0-.8-.7-1.5-1.5-1.5h-2.6z" />
            </svg>
          </p>
        </div>
        <div className="ps-8 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            width={200}
            height={200}
            stroke="#000"
            viewBox="-153.6 -153.6 819.2 819.2"
            className="w-20 absolute -top-2 -translate-y-1/2"
          >
            <rect
              width={819.2}
              height={819.2}
              x={-153.6}
              y={-153.6}
              fill="#0795ff"
              stroke="none"
              strokeWidth={0}
              rx={409.6}
            />
            <path
              d="M486.28 196.046C482.19 87.09 392.628 0 282.673 0 170.118 0 78.875 91.234 78.856 203.781 63.67 233.026 27.245 307.275 27.245 307.275a20.58 20.58 0 0 0-.281 17.83 20.623 20.623 0 0 0 13.731 11.387l33.308 8.334s16.968 76.612 20.839 94.388c5.853 26.919 14.56 32.754 40.024 32.754 25.483 0 55.6-8.253 55.6-8.253V512h218.366v-76.421c0-27.673 7.616-62.38 29.118-88.336 43.241-52.183 51.647-108.01 48.33-151.197z"
              style={{
                fill: "#fff",
              }}
            />
          </svg>
          <h5 className="text-[#0795ff] mt-2 font-semibold pt-9">
            Rays
          </h5>
          <p className="opacity-80 text-sm">Manusia</p>
        </div>
      </div>
    </Carousel>
  );
};

export default Testimoni;
