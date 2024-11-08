import React from "react";
import Header from "../components/molecules/Header";
import StatisticDots from "../components/atoms/StatisticDots";
import StatisticPerson from "../components/atoms/StatisticPerson";
import triangle from "../assets/img/triangle.png";
import Navbar from "../components/atoms/Navbar";
import { Chart } from "react-google-charts";
import ProgressBar from "@ramonak/react-progress-bar";

const Statistics = () => {
  const data = [
    ["Task", "Hours per Day"],
    ["Work", 10],
    ["Eat", 10],
    ["Commute", 10],
    ["Watch TV", 10],
    ["Sleep", 10], // CSS-style declaration
  ];

  const data2023 = [
    ["Element", "Value", { role: "style" }],
    ["Januari", 8.94, "#f2981b"], // RGB value
    ["Agustus", 10.49, "#f2981b"], // English color name
    ["Desember", 19.3, "#f2981b"],
  ];

  const data2024 = [
    ["Element", "Value", { role: "style" }],
    ["Januari", 8.94, "#2e8799"], // RGB value
    ["Agustus", 10.49, "#2e8799"], // English color name
    ["Desember", 19.3, "#2e8799"],
  ];

  const options = {
    pieHole: 0.4,
    is3D: false,
    legend: "none",
    chartArea: { width: "90%", height: "90%" },
    colors: ["#f2981b", "#f05556", "#30addb", "#2e8799", "#2c3c46"],
    pieSliceText: "none",
  };

  const optionChart = {
    // titleTextStyle: {
    //   fontSize: 13, // Memperbesar ukuran font title
    //   bold: true,
    //   color: "#333",
    // },
    legend: "none",
    // title: "Data 2023 | Produk terserap oleh Pasar",
    chartArea: {
      left: 40, // Mengatur margin kiri
      right: 20, // Mengatur margin kanan
      // top: 20, // Bisa disesuaikan atau dikurangi
      // bottom: 50, // Bisa disesuaikan atau dikurangi
      // width: "100%", // Mengatur area chart agar penuh secara horizontal
      // height: "85%", // Mengatur area chart agar penuh secara vertikal
    },
    // hAxis: {
    //   // title: "Population",
    //   minValue: 0,
    //   slantedText: true, // Membuat teks miring
    //   slantedTextAngle: 90, // Mengatur sudut kemiringan ke vertikal (90 derajat)
    // },
    // vAxis: {
    //   title: "City",
    //   slantedText: true, // Membuat teks miring
    //   slantedTextAngle: 90, // Mengatur sudut kemiringan ke vertikal (90 derajat)
    // },
  };

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
          <div className="-mt-2">
            {/* <PieChart

              data={[
                { title: "One", value: 10, color: "#E38627" },
                { title: "Two", value: 15, color: "#C13C37" },
                { title: "Three", value: 20, color: "#6A2135" },
              ]}
            /> */}
            <Chart
              chartType="PieChart"
              width="100%"
              height="200px"
              data={data}
              options={options}
            />
          </div>
          <StatisticDots />
          <h4 className="font-medium mt-2">Masyarakat terpapar program</h4>
          <p className="text-xs mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste minima
            rem molestias rerum dolores suscipit!
          </p>
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

        <div className="flex gap-2 mt-3">
          <div className="bg-white shadow-sm p-3 rounded-xl">
            <img src={triangle} alt="" className="w-28 mx-auto" />
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
          <div className="bg-white shadow-sm p-3 rounded-xl">
            <div className="h-24 flex flex-col gap-3 justify-center">
              <ProgressBar
                completed={60}
                baseBgColor="#ffc1c1"
                bgColor="#f05556"
                height="25px"
              />
              <ProgressBar
                completed={60}
                baseBgColor="#9bdcf4"
                bgColor="#30addb"
                height="25px"
              />
            </div>
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

        <div className="p-6 mt-3 bg-white rounded-xl shadow-sm">
          <p className="font-semibold">Data 2023</p>
          <div>
            <Chart
              chartType="ColumnChart"
              width="100%"
              height="100%"
              data={data2023}
              options={optionChart}
            />
          </div>
          <div className="bg-[#231f20] text-white rounded-lg p-3">
            <p className="font-semibold mb-1">Produk terserap oleh Pasar</p>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
              fugit? Atque, sit! Eaque quos ratione itaque temporibus
              recusandae? Reiciendis, aspernatur?
            </p>
          </div>
        </div>

        <div className="p-6 mt-3 bg-white rounded-xl shadow-sm">
          <p className="font-semibold">Data 2024</p>
          <div>
            <Chart
              chartType="ColumnChart"
              width="100%"
              height="100%"
              data={data2024}
              options={optionChart}
            />
          </div>
          <div className="bg-[#231f20] text-white rounded-lg p-3">
            <p className="font-semibold mb-1">
              Peningkatan pendapatan masyarakat
            </p>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
              fugit? Atque, sit! Eaque quos ratione itaque temporibus
              recusandae? Reiciendis, aspernatur?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
