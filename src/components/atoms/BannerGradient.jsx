import React from "react";
import arsadaya from "../../assets/img/banner-kadaya.png";

const BannerGradient = () => {
  return (
    <div className="mt-5 bg-gradient-to-r from-[#26671fe8] to-[#143216] rounded-2xl text-white py-4 px-4 flex gap-3 items-center">
      <div className="shrink-0">
        <h3 className="text-2xl font-semibold leading-none">Kadaya</h3>
        <h3 className="text-2xl font-semibold leading-none">Internasional</h3>
        <p className="text-xs mt-3">
          Pengembangan UMKM <br /> Perempuan Indonesia
        </p>
      </div>
      <div>
        <img src={arsadaya} alt="" />
      </div>
    </div>
  );
};

export default BannerGradient;
