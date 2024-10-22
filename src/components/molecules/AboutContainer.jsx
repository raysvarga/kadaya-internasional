import React from "react";
import AboutCard from "../atoms/AboutCard";
import PartnerCard from "../atoms/PartnerCard";
import Astra from "../../assets/img/astra.png";
import KBA from "../../assets/img/kampung-berseri-astra.png";
import Testimoni from "../atoms/Testimoni";

const AboutContainer = () => {
  const AboutIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={64}
      height={64}
      className="icon w-10"
      viewBox="-204.8 -204.8 1433.6 1433.6"
    >
      <rect
        width={1433.6}
        height={1433.6}
        x={-204.8}
        y={-204.8}
        strokeWidth={0}
        rx={716.8}
      />
      <path
        fill="#fff"
        d="M789.333 853.333H234.667l-128 128V256c0-70.4 57.6-128 128-128h554.666c70.4 0 128 57.6 128 128v469.333c0 70.4-57.6 128-128 128z"
      />
      <path d="M469.333 426.667h85.334v234.666h-85.334zM469.33299999999997 320a42.667 42.667 0 1 0 85.334 0 42.667 42.667 0 1 0-85.334 0Z" />
    </svg>
  );
  const VisiIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={64}
      height={64}
      fill="#0795ff"
      stroke="#0795ff"
      strokeWidth={0}
      viewBox="-3.2 -3.2 22.4 22.4"
      className="w-10"
    >
      <rect
        width={22.4}
        height={22.4}
        x={-3.2}
        y={-3.2}
        fill="#fff"
        stroke="none"
        rx={11.2}
      />
      <path
        stroke="none"
        d="M16 8.001a8 8 0 1 1-8-8 .5.5 0 0 1 0 1 7 7 0 1 0 7 7 .5.5 0 0 1 1 0Zm-8-4a.5.5 0 0 0 0-1 5 5 0 1 0 5 5 .5.5 0 0 0-1 0 4 4 0 1 1-4-4Zm.671 4.731a1 1 0 0 1-.288.192.991.991 0 0 1-.766 0 1 1 0 0 1-.288-.192c-.011-.01-.025-.013-.036-.024s-.012-.022-.021-.032a.97.97 0 0 1 0-1.35c.009-.01.011-.023.021-.032l1.218-1.218A1.96 1.96 0 0 0 8 6.001 2.034 2.034 0 1 0 9.926 7.49L8.707 8.708c-.007.011-.025.014-.036.024ZM9 5.587V3.501a.5.5 0 0 1 .146-.354l3-3A.5.5 0 0 1 13 .501v1.793l1.146-1.147a.5.5 0 0 1 .708.708l-1.147 1.146H15.5a.5.5 0 0 1 .354.854l-3 3a.5.5 0 0 1-.354.146H9.707L8.354 8.355a.5.5 0 0 1-.708-.708L9 6.294Zm1-1.879v1.586l2-2V1.708Zm.707 2.293h1.586l2-2h-1.586Z"
        data-name="Path 189"
      />
    </svg>
  );
  const MisiIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      id="_x32_"
      width={64}
      height={64}
      fill="#000"
      stroke="#000"
      viewBox="-153.6 -153.6 819.2 819.2"
      className="w-10"
    >
      <rect
        id="SVGRepo_bgCarrier"
        width={819.2}
        height={819.2}
        x={-153.6}
        y={-153.6}
        fill="#000000"
        strokeWidth={0}
        rx={409.6}
      />
      <g id="SVGRepo_iconCarrier">
        <style>{".st0{fill:#fff}"}</style>
        <path
          d="m127.083 247.824 50.031-76.906S102.38 141.23 67.567 167.84C32.755 194.465.005 268.184.005 268.184L37.114 289.7c0-.001 46.969-91.016 89.969-41.876zM264.177 384.918l76.906-50.031s29.688 74.734 3.078 109.547c-26.625 34.797-100.344 67.563-100.344 67.563l-21.5-37.109c0-.001 91.016-46.97 41.86-89.97zM206.692 362.887l-13.203-13.188c-24 62.375-80.375 49.188-80.375 49.188s-13.188-56.375 49.188-80.375l-13.188-13.188c-34.797-6-79.188 35.984-86.391 76.766-7.188 40.781-8.391 75.563-8.391 75.563s34.781-1.188 75.578-8.391 82.782-51.578 76.782-86.375zM505.224 6.777C450.786-18.738 312.927 28.98 236.255 130.668c-58.422 77.453-89.688 129.641-89.688 129.641l46.406 46.406 12.313 12.313 46.391 46.391s52.219-31.25 129.672-89.656C483.005 199.074 530.739 61.215 505.224 6.777zM274.63 237.371c-12.813-12.813-12.813-33.594 0-46.406s33.578-12.813 46.406.016c12.813 12.813 12.813 33.578 0 46.391-12.828 12.812-33.594 12.812-46.406-.001zm76.922-76.906c-16.563-16.578-16.563-43.422 0-59.984 16.547-16.563 43.406-16.563 59.969 0s16.563 43.406 0 59.984c-16.563 16.547-43.422 16.547-59.969 0z"
          className="st0"
        />
      </g>
    </svg>
  );
  return (
    <div className="pb-16">
      <AboutCard
        title="Tentang Arrum"
        svg={AboutIcon}
        desc={
          <>
            <p>
              PT Arrum Samudra Nusantara Berdiri Sejak 2023, Saat ini telah
              memiliki 3 Kluster Binaan:
            </p>
            <ul className="list-disc list-inside">
              <li>Kluster Nelayan - 59 Anggota</li>
              <li>Kluster Rumput Laut - 74 Anggota</li>
              <li>Kluster Pengolahan - 102 Anggota</li>
            </ul>
            <p>Yang Tersebar di 13 Desa di Kabupaten Jepara.</p>
          </>
        }
        bgColor="bg-white"
        fontColor="text-black"
      />
      <AboutCard
        title="Visi"
        svg={VisiIcon}
        desc="Menjadi Perusahaan Yang Menciptakan Ekosistem UMKM Melalui Akselerasi dan Distribusi yang Berkelanjutan."
        bgColor="bg-[#0795ff]"
        fontColor="text-white"
      />
      <AboutCard
        title="Misi"
        svg={MisiIcon}
        desc={
          <>
            <ul className="list-disc list-inside">
              <li>
                Memberikan pelatihan dan pendampingan berkelanjutan kepada
                pelaku UMKM
              </li>
              <li>
                Mengoptimalkan penggunaan teknologi untuk mendukung akselerasi
                dan distribusi UMKM
              </li>
              <li>
                Membangun jaringan distribusi yang efisien untuk meningkatkan
                akses pasar UMKM
              </li>
            </ul>
          </>
        }
        bgColor="bg-white"
        fontColor="text-black"
      />
      <div className="flex flex-col items-center bg-[#0795ff] p-3">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            width={64}
            height={64}
            viewBox="-99.12 -99.12 693.86 693.86"
            className="w-10 mr-2"
          >
            <rect
              width={693.86}
              height={693.86}
              x={-99.12}
              y={-99.12}
              fill="#fff"
              strokeWidth={0}
              rx={346.93}
            />
            <path
              d="M495.622 113.089v150.03s-32.11 6.326-38.725 7.158c-6.594.83-27.316 7.521-42.334-6.914-23.16-22.197-105.447-104.03-105.447-104.03s-14.188-13.922-36.969-1.89c-20.912 11.022-51.911 27.175-64.859 33.465-24.477 13.028-44.764-7.642-44.764-23.387 0-12.213 7.621-20.502 18.515-26.598 29.524-17.898 91.752-52.827 117.67-66.598 15.754-8.379 27.105-9.097 48.734 9.124 26.638 22.403 50.344 42.824 50.344 42.824s7.732 6.453 20.063 3.854c30.28-6.402 77.772-17.038 77.772-17.038zM168.098 367.3c3.985-10.238 2.653-21.689-4.987-29.545-6.865-7.027-16.888-8.879-26.445-6.689 2.673-9.479 1.197-19.568-5.705-26.688-6.886-7.009-16.89-8.898-26.446-6.688 2.653-9.465 1.181-19.553-5.725-26.652-10.814-11.092-29.519-10.616-41.807 1.097-12.223 11.729-20.053 32.979-9.144 45.487 10.891 12.445 23.405 4.873 32.945 2.699-2.654 9.465-10.606 18.269-.813 30.658 9.784 12.395 23.404 4.875 32.954 2.721-2.663 9.429-10.268 19.117-.851 30.604 9.502 11.522 25.065 5.383 35.344 2.19-3.967 10.199-12.458 21.193-1.549 33.513 10.892 12.409 36.063 6.668 48.358-5.063 12.262-11.729 13.439-30.318 2.654-41.445-7.446-7.634-18.546-9.41-28.783-6.199zm224.344-78.054c-88.88-88.881-47.075-47.058-94.906-94.992 0 0-14.375-14.311-33.321-5.998-13.3 5.828-30.423 13.771-43.307 19.835-14.158 7.424-24.347 9.722-29.131 9.69-27.37-.179-49.576-22.178-49.576-49.521 0-17.738 9.417-33.181 23.462-41.947 19.75-13.667 65.21-37.847 65.21-37.847s-13.849-17.549-44.187-17.549c-30.329 0-93.695 41.512-93.695 41.512s-17.976 11.514-43.601 1.143L0 96.373V268.05s14.103 4.082 26.775 9.258c2.862-8.162 7.48-15.699 13.886-21.924 21.023-20.024 55.869-20.232 74.996-.537 5.762 5.987 9.783 13.129 11.835 21.024 7.707 2.379 14.688 6.593 20.298 12.373a47.226 47.226 0 0 1 11.854 20.984c7.698 2.381 14.669 6.611 20.298 12.395 6.339 6.537 10.562 14.433 12.534 22.988a48.588 48.588 0 0 1 21.176 12.693c11.495 11.807 15.575 27.826 13.103 43.278.02 0 .058 0 .076.035.188.246 7.122 7.976 11.446 12.336 8.474 8.482 22.311 8.482 30.811 0 8.444-8.479 8.481-22.289 0-30.811-.304-.303-30.572-31.963-28.136-34.418 2.418-2.438 40.981 37.688 41.699 38.422 8.463 8.465 22.291 8.465 30.792 0 8.481-8.479 8.463-22.289 0-30.791-.416-.396-2.152-2.059-2.796-2.721 0 0-38.234-34.06-35.324-36.97 2.946-2.928 50.438 41.392 50.515 41.392 8.537 7.688 21.687 7.631 29.9-.586 7.991-7.99 8.162-20.629 1.078-29.146-.15-.453-36.194-38.121-33.381-40.955 2.854-2.871 38.519 33.853 38.594 33.929 8.444 8.463 22.291 8.463 30.792 0 8.463-8.464 8.463-22.291 0-30.83-.115-.072-.266-.148-.379-.222z"
              style={{
                fill: "#0795ff",
              }}
            />
          </svg>
          <h2 className="text-xl font-bold text-white">Partner</h2>
        </div>
        <div className="flex gap-3 mt-2">
          <PartnerCard
            imageSrc={Astra}
            altText="Astra Logo"
            bgColor="bg-white"
          />
          <PartnerCard
            imageSrc={KBA}
            altText="Kampung BerseriAstra Logo"
            bgColor="bg-white"
          />
        </div>
      </div>
      <div className="flex flex-col p-3">
        <div className="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={64}
            height={64}
            fill="#fff"
            stroke="#fff"
            strokeWidth={0}
            viewBox="-4 -4 28 28"
            className="w-10 mr-2"
          >
            <rect
              width={28}
              height={28}
              x={-4}
              y={-4}
              fill="#000"
              stroke="none"
              rx={14}
            />
            <path fill="none" stroke="none" d="M0 0h20v20H0z" />
            <path
              stroke="none"
              d="M4 3h12c.55 0 1.02.2 1.41.59S18 4.45 18 5v7c0 .55-.2 1.02-.59 1.41S16.55 14 16 14h-1l-5 5v-5H4c-.55 0-1.02-.2-1.41-.59S2 12.55 2 12V5c0-.55.2-1.02.59-1.41S3.45 3 4 3zm11 2H4v1h11V5zm1 3H4v1h12V8zm-3 3H4v1h9v-1z"
            />
          </svg>
          <h2 className="text-xl font-bold">Testimoni</h2>
        </div>
        <div>
          <Testimoni />
        </div>
      </div>
    </div>
  );
};

export default AboutContainer;
