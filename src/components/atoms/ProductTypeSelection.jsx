import React from "react";

const ProductTypeSelection = () => {
  return (
    <div className="mt-4 flex justify-between px-2 mb-5">
      <div className="flex flex-col items-center w-fit">
        <p className="text-[#ff914d] text-xs font-medium">Rekomendasi</p>
        <p className="w-[6px] h-[6px] bg-[#ff914d] rounded-full mt-1"></p>
      </div>
      <div className="flex flex-col items-center w-fit">
        <p className="text-xs opacity-40 font-medium text-center">
          Produk Inovasi
        </p>
      </div>
      <div className="flex flex-col items-center w-fit">
        <p className="text-xs opacity-40 font-medium text-center">
          Produk Unggulan
        </p>
      </div>
    </div>
  );
};

export default ProductTypeSelection;
