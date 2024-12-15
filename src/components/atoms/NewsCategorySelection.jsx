import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link, useLocation } from "react-router-dom";

const NewsCategorySelection = () => {
  const location = useLocation();  // To get the current URL path
  const [selectedCategory, setSelectedCategory] = useState("");

  // Set the selected category based on the current location path
  useEffect(() => {
    if (location.pathname === "/news/berita-terkini") {
      setSelectedCategory("berita-terkini");
    } else if (location.pathname === "/news/pelatihan") {
      setSelectedCategory("pelatihan");
    } else if (location.pathname === "/news/pendampingan") {
      setSelectedCategory("pendampingan");
    } else if (location.pathname === "/news/event") {
      setSelectedCategory("event");
    } else if (location.pathname === "/news/inovasi-desa") {
      setSelectedCategory("inovasi-desa");
    }
  }, [location.pathname]);  // Dependency on location.pathname to update when path changes

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
      <Link to={"/news/berita-terkini"} onClick={() => setSelectedCategory("berita-terkini")}>
        <div
          className={`text-center py-1 rounded-lg text-white text-xs mx-1 ${
            selectedCategory === "berita-terkini" ? "bg-red-600" : "bg-[#0795ff]"
          }`}
        >
          Berita Terkini
        </div>
      </Link>
      <Link to={"/news/pelatihan"} onClick={() => setSelectedCategory("pelatihan")}>
        <div
          className={`text-center py-1 rounded-lg text-white text-xs mx-1 ${
            selectedCategory === "pelatihan" ? "bg-red-600" : "bg-[#0795ff]"
          }`}
        >
          Pelatihan
        </div>
      </Link>
      <Link to={"/news/pendampingan"} onClick={() => setSelectedCategory("pendampingan")}>
        <div
          className={`text-center py-1 rounded-lg text-white text-xs mx-1 ${
            selectedCategory === "pendampingan" ? "bg-red-600" : "bg-[#0795ff]"
          }`}
        >
          Pendampingan
        </div>
      </Link>
      <Link to={"/news/event"} onClick={() => setSelectedCategory("event")}>
        <div
          className={`text-center py-1 rounded-lg text-white text-xs mx-1 ${
            selectedCategory === "event" ? "bg-red-600" : "bg-[#0795ff]"
          }`}
        >
          Event
        </div>
      </Link>
      <Link to={"/news/inovasi-desa"} onClick={() => setSelectedCategory("inovasi-desa")}>
        <div
          className={`text-center py-1 rounded-lg text-white text-xs mx-1 ${
            selectedCategory === "inovasi-desa" ? "bg-red-600" : "bg-[#0795ff]"
          }`}
        >
          Inovasi Desa
        </div>
      </Link>
    </Carousel>
  );
};

export default NewsCategorySelection;
