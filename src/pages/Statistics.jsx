import React, { useEffect, useState } from "react";
import Header from "../components/molecules/Header";
import StatisticDots from "../components/atoms/StatisticDots";
import StatisticPerson from "../components/atoms/StatisticPerson";
import triangle from "../assets/img/triangle.png";
import Navbar from "../components/atoms/Navbar";
import { Chart } from "react-google-charts";
import ProgressBar from "@ramonak/react-progress-bar";

const Statistics = () => {
  const [statistics, setStatistics] = useState({
    data: [],
    data2023: [],
    data2024: [],
    progressBars: [],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch("/data/statistics.json")
      .then((response) => response.json())
      .then((data) => setStatistics(data))
      .catch((error) =>
        console.error("Error fetching statistics data:", error)
      );
  }, []);

  const options = {
    pieHole: 0.4,
    is3D: false,
    legend: "none",
    chartArea: { width: "90%", height: "90%" },
    colors: ["#f2981b", "#f05556", "#30addb", "#2e8799", "#2c3c46"],
    pieSliceText: "none",
  };

  const optionChart = {
    legend: "none",
    chartArea: {
      left: 40,
      right: 20,
    },
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
            Menyajikan data dan statistik terkini mengenai berbagai program yang
            telah dilakukan oleh Arrum Samudra. Dari peningkatan kesejahteraan
            masyarakat hingga distribusi produk perikanan.
          </p>
        </div>

        <div className="bg-white mt-3 p-4 rounded-xl shadow-sm">
          <div className="-mt-2">
            {statistics.data.length > 0 && (
              <Chart
                chartType="PieChart"
                width="100%"
                height="200px"
                data={statistics.data}
                options={options}
              />
            )}
          </div>
          <StatisticDots />
          <h4 className="font-medium mt-2">Masyarakat Terpapar Program</h4>
          <p className="text-xs mt-1">
            Grafik ini menunjukkan persentase masyarakat yang telah terpapar
            oleh berbagai program yang dilaksanakan oleh Arrum Samudra.
            Menyediakan wawasan tentang jangkauan dan dampak program terhadap
            komunitas lokal.
          </p>
        </div>

        <div className="bg-white mt-3 rounded-xl p-4 shadow-sm">
          <StatisticPerson />
          <div className="bg-[#231f20] text-white mt-3 px-3 py-1 pb-2 rounded-xl">
            <h4 className="font-semibold">Kelompok Terbesar</h4>
            <p className="text-xs">
              Kelompok terbesar yang menerima manfaat dari program-program ini
              mencakup berbagai demografi. Ini memberikan gambaran tentang
              kelompok mana yang paling banyak terlibat dan terpengaruh.
            </p>
          </div>
        </div>

        <div
          className="flex gap-2 mt-3"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="bg-white shadow-sm p-3 rounded-xl">
            <img src={triangle} alt="" className="w-28 mx-auto" />
            <div className="bg-[#231f20] text-white mx-auto rounded-xl p-3 mt-3 w-fit">
              <h4 className="font-semibold text-center leading-tight">
                Kluster <br /> Perikanan
              </h4>
              <p className="text-xs mt-[2px] text-center mx-auto">
                Kluster perikanan merupakan salah satu fokus utama kami dalam
                meningkatkan taraf hidup masyarakat melalui program-program yang
                berkelanjutan dan inovatif.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-sm p-3 rounded-xl">
            <div className="h-24 flex flex-col gap-3 justify-center">
              {statistics.progressBars.map((bar, index) => (
                <ProgressBar
                  key={index}
                  completed={bar.completed}
                  baseBgColor={bar.baseBgColor}
                  bgColor={bar.bgColor}
                  height="25px"
                />
              ))}
            </div>
            <div className="bg-[#231f20] text-white mx-auto rounded-xl p-3 mt-3 w-fit">
              <h4 className="font-semibold text-center leading-tight">
                Kluster <br /> Perikanan
              </h4>
              <p className="text-xs mt-[2px] text-center mx-auto">
                Kluster perikanan adalah area fokus utama dalam usaha kami untuk
                meningkatkan ekonomi lokal melalui pendekatan inovatif dan
                berkelanjutan.
              </p>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="p-6 mt-3 bg-white rounded-xl shadow-sm"
        >
          <p className="font-semibold">Data 2023</p>
          <div>
            {statistics.data2023.length > 0 && (
              <Chart
                chartType="ColumnChart"
                width="100%"
                height="100%"
                data={statistics.data2023}
                options={optionChart}
              />
            )}
          </div>
          <div className="bg-[#231f20] text-white rounded-lg p-3">
            <p className="font-semibold mb-1">Produk Terserap oleh Pasar</p>
            <p className="text-xs">
              Data ini menunjukkan jumlah produk yang berhasil diserap oleh
              pasar selama tahun 2023. Menyediakan wawasan tentang keberhasilan
              distribusi dan penerimaan pasar terhadap produk-produk kami.
            </p>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="p-6 mt-3 bg-white rounded-xl shadow-sm"
        >
          <p className="font-semibold">Data 2024</p>
          <div>
            {statistics.data2024.length > 0 && (
              <Chart
                chartType="ColumnChart"
                width="100%"
                height="100%"
                data={statistics.data2024}
                options={optionChart}
              />
            )}
          </div>
          <div className="bg-[#231f20] text-white rounded-lg p-3">
            <p className="font-semibold mb-1">
              Peningkatan Pendapatan Masyarakat
            </p>
            <p className="text-xs">
              Statistik ini menunjukkan peningkatan pendapatan masyarakat
              sepanjang tahun 2024. Menyoroti keberhasilan program-program kami
              dalam meningkatkan ekonomi lokal dan kualitas hidup masyarakat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
