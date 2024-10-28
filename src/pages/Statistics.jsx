import React from "react";
import Header from "../components/molecules/Header";
import StatisticDots from "../components/atoms/StatisticDots";
import StatisticPerson from "../components/atoms/StatisticPerson";
import triangle from "../assets/img/triangle.png";
import Navbar from "../components/atoms/Navbar";

const Statistics = () => {
  return (
    <div className="pb-20">
      <Header />
      <Navbar />
      <div className="mt-5 mx-5">
        <div>
          <h2 className="text-2xl font-bold leading-tight">
            Arrum Samudra <br /> dalam Angka
          </h2>
          <p className="text-xs mt-1 w-72">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero,
            incidunt.
          </p>
        </div>

        <div className="bg-white mt-3 p-4 rounded-xl shadow-sm">
          <h4 className="font-medium">Masyarakat terpapar program</h4>
          <p className="text-xs mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste minima
            rem molestias rerum dolores suscipit!
          </p>
          <StatisticDots />
        </div>

        <div className="bg-white mt-3 rounded-xl p-4 shadow-sm">
          <StatisticPerson />
          <div className="bg-[#231f20] text-white mt-3 px-3 py-1 pb-2 rounded-xl">
            <h4 className="font-semibold">Kelompok Terbesar</h4>
            <p className="text-xs">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur,
              molestias!
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="bg-white shadow-sm mt-3 p-3 rounded-xl">
            <img src={triangle} alt="" className="w-20 mx-auto" />
            <div className="bg-[#231f20] text-white mx-auto rounded-xl p-3 mt-3 w-fit">
              <h4 className="font-semibold text-center leading-tight">
                Kluster <br /> Perikanan
              </h4>
              <p className="text-xs mt-[2px] text-center mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda, eius.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-sm mt-3 p-3 rounded-xl">
            <img src={triangle} alt="" className="w-20 mx-auto" />
            <div className="bg-[#231f20] text-white mx-auto rounded-xl p-3 mt-3 w-fit">
              <h4 className="font-semibold text-center leading-tight">
                Kluster <br /> Perikanan
              </h4>
              <p className="text-xs mt-[2px] text-center mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda, eius.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
