import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const NewsCategorySelection = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2.8,
    },
  };

  return (
    <Carousel responsive={responsive} arrows={false} containerClass="mx-3 my-3">
      <div className="bg-red-600 text-center py-1 rounded-lg text-white text-xs mx-1">
        Berita Terkini
      </div>
      <div className="bg-[#0795ff] text-center py-1 rounded-lg text-white text-xs mx-1">
        Pelatihan
      </div>
      <div className="bg-[#0795ff] text-center py-1 rounded-lg text-white text-xs mx-1">
        Pendampingan
      </div>
      <div className="bg-[#0795ff] text-center py-1 rounded-lg text-white text-xs mx-1">
        Event
      </div>
      <div className="bg-[#0795ff] text-center py-1 rounded-lg text-white text-xs mx-1">
        Inovasi Desa
      </div>
    </Carousel>
  );
};

export default NewsCategorySelection;
