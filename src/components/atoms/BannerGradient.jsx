import React from "react";
import seafood from "../../assets/img/seafood.png";

const BannerGradient = () => {
  return (
    <div className="mt-5 bg-gradient-to-r from-[#5de0e6] to-[#004aad] rounded-2xl text-white py-6 ps-6 flex items-center justify-between">
      <div className="shrink-0">
        <h3 className="text-2xl font-semibold leading-none">Arsadaya</h3>
        <p className="text-sm mt-3">
          Jaringan Pengembangan <br /> UMKM Indonesia
        </p>
      </div>
      <div>
        <img src={seafood} alt="" className="w-36" />
      </div>
    </div>
  );
};

export default BannerGradient;
