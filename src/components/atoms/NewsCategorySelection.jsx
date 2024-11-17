import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

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
      <Link to={"/news/berita-terkini"}>
        <div className="bg-red-600 text-center py-1 rounded-lg text-white text-xs mx-1">Berita Terkini</div>
      </Link>
      <Link to={"/news/pelatihan"}>
      <div className="bg-[#0795ff] text-center py-1 rounded-lg text-white text-xs mx-1">Pelatihan</div>
      </Link>
      <Link to={"/news/pendampingan"} >
      <div className="bg-[#0795ff] text-center py-1 rounded-lg text-white text-xs mx-1">Pendampingan</div>
      </Link>
      <Link to={"/news/event"}>
      <div className="bg-[#0795ff] text-center py-1 rounded-lg text-white text-xs mx-1">Event</div>
      </Link>
      <Link to={"/news/inovasi-desa"}>
      <div className="bg-[#0795ff] text-center py-1 rounded-lg text-white text-xs mx-1">Inovasi Desa</div>
      </Link>
    </Carousel>
  );
};

export default NewsCategorySelection;
