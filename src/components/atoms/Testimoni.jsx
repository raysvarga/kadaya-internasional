import React, { useEffect, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

const Testimoni = () => {
  const [testimonials, setTestimonials] = useState();
  const fetchData = async () => {
    try {
      const response = await fetch("/data/testimoni.json"); // Tunggu fetch selesai
      const data = await response.json(); // Tunggu parsing JSON selesai

      if (data) {
        setTestimonials(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const CustomLeftArrow = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        className="absolute left-0 ml-2 top-1/2 transform -translate-y-1/2 bg-[#276b1e] text-white p-2 rounded-full w-8 h-8 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300"
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
        className="absolute right-0 mr-2 top-1/2 transform -translate-y-1/2 bg-[#276b1e] text-white p-2 rounded-full w-8 h-8 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300"
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
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <>
      {testimonials && (
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
          {testimonials?.map((testimonial, index) => (
            <div className="mx-5 my-5" key={index}>
              <div className="bg-[#444444] bg-opacity-5 p-5 rounded-t-md">
                <p className="mb-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    fill="#276b1e"
                    stroke="#276b1e"
                    strokeWidth={0.001}
                    viewBox="0 0 52 52"
                    width="20"
                    className="inline-block opacity-50"
                  >
                    <path d="M44.3 6.5c-9 0-15.9 7-15.9 16V44c0 .8.7 1.5 1.5 1.5h17c.8 0 1.5-.7 1.5-1.5V27c0-.8-.7-1.5-1.5-1.5H34.4v-3c0-5 4.9-10 9.9-10h2.6c.8 0 1.5-.7 1.5-1.5V8c0-.8-.7-1.5-1.5-1.5h-2.6zM19.5 6.5c-9 0-15.9 7-15.9 16V44c0 .8.7 1.5 1.5 1.5h17c.8 0 1.5-.7 1.5-1.5V27c0-.8-.7-1.5-1.5-1.5H9.6v-3c0-5 4.9-10 9.9-10h2.6c.8 0 1.5-.7 1.5-1.5V8c0-.8-.7-1.5-1.5-1.5h-2.6z" />
                  </svg>
                  <span className="px-3 text-black text-opacity-80 text-sm italic">
                    {testimonial.desc}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    fill="#276b1e"
                    stroke="#276b1e"
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
                  width={64}
                  height={64}
                  fill="none"
                  stroke="#000"
                  strokeWidth={0}
                  viewBox="-4.8 -4.8 33.6 33.6"
                  className="absolute -top-2 -translate-y-1/2"
                >
                  <rect
                    width={33.6}
                    height={33.6}
                    x={-4.8}
                    y={-4.8}
                    fill="#276b1e"
                    stroke="none"
                    rx={16.8}
                  />
                  <g
                    fill="#fff"
                    fillRule="evenodd"
                    stroke="none"
                    clipRule="evenodd"
                  >
                    <path d="M6.75 6.5a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0ZM4.25 18.571a5.321 5.321 0 0 1 5.321-5.321h4.858a5.321 5.321 0 0 1 5.321 5.321 4.179 4.179 0 0 1-4.179 4.179H8.43a4.179 4.179 0 0 1-4.179-4.179Z" />
                  </g>
                </svg>
                <h5 className="text-[#276b1e] mt-2 font-semibold pt-9">
                  {testimonial.name}
                </h5>
                <p className="opacity-80 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </Carousel>
      )}
    </>
  );
};

export default Testimoni;
