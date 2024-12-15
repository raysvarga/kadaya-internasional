import React from "react";
import { useMainContext } from "../../context/MainContext";

const ProductTypeSelection = () => {
  const { updateTypeSelected, typeSelected } = useMainContext();

  return (
    <div className="mt-4 flex justify-between px-2 mb-5">
      <div
        className="flex flex-col items-center w-fit"
        onClick={() => updateTypeSelected("rekomendasi")}
      >
        {typeSelected === "rekomendasi" ? (
          <>
            <p className="text-[#ff914d] text-xs font-medium">Rekomendasi</p>
            <p className="w-[6px] h-[6px] bg-[#ff914d] rounded-full mt-1"></p>
          </>
        ) : (
          <>
            <p className="text-xs opacity-40 font-medium">Rekomendasi</p>
          </>
        )}
      </div>
      <div
        className="flex flex-col items-center w-fit"
        onClick={() => updateTypeSelected("produk inovasi")}
      >
        {typeSelected === "produk inovasi" ? (
          <>
            <p className="text-[#ff914d] text-xs font-medium">Produk Inovasi</p>
            <p className="w-[6px] h-[6px] bg-[#ff914d] rounded-full mt-1"></p>
          </>
        ) : (
          <>
            <p className="text-xs opacity-40 font-medium">Produk Inovasi</p>
          </>
        )}
      </div>
      <div
        className="flex flex-col items-center w-fit"
        onClick={() => updateTypeSelected("produk unggulan")}
      >
        {typeSelected === "produk unggulan" ? (
          <>
            <p className="text-[#ff914d] text-xs font-medium">
              Produk Unggulan
            </p>
            <p className="w-[6px] h-[6px] bg-[#ff914d] rounded-full mt-1"></p>
          </>
        ) : (
          <>
            <p className="text-xs opacity-40 font-medium">Produk Unggulan</p>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductTypeSelection;
