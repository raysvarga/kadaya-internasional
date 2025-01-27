import React from "react";
import AboutCard from "../atoms/AboutCard";
import PartnerCard from "../atoms/PartnerCard";
import KBA from "../../assets/img/kampung-berseri-astra.jpg";
import UNDIP from "../../assets/img/logo-undip.png";
import PEMDAJEPARA from "../../assets/img/pemda-jepara.png";
import BALAIBESAR from "../../assets/img/balai-besar.png";
import Testimoni from "../atoms/Testimoni";
import ContactCard from "../atoms/SocialMediaCard";
import SocialMediaCard from "../atoms/SocialMediaCard";

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
  const Instagram = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={64}
      height={64}
      fill="none"
      viewBox="-4.8 -4.8 33.6 33.6"
      className="w-10"
    >
      <rect
        width={33.6}
        height={33.6}
        x={-4.8}
        y={-4.8}
        fill="#fff"
        strokeWidth={0}
        rx={16.8}
      />
      <g fill="#0795ff">
        <path
          fillRule="evenodd"
          d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
          clipRule="evenodd"
        />
        <path d="M18 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" />
        <path
          fillRule="evenodd"
          d="M1.654 4.276C1 5.56 1 7.24 1 10.6v2.8c0 3.36 0 5.04.654 6.324a6 6 0 0 0 2.622 2.622C5.56 23 7.24 23 10.6 23h2.8c3.36 0 5.04 0 6.324-.654a6 6 0 0 0 2.622-2.622C23 18.44 23 16.76 23 13.4v-2.8c0-3.36 0-5.04-.654-6.324a6 6 0 0 0-2.622-2.622C18.44 1 16.76 1 13.4 1h-2.8c-3.36 0-5.04 0-6.324.654a6 6 0 0 0-2.622 2.622ZM13.4 3h-2.8c-1.713 0-2.878.002-3.778.075-.877.072-1.325.202-1.638.361a4 4 0 0 0-1.748 1.748c-.16.313-.29.761-.36 1.638C3.001 7.722 3 8.887 3 10.6v2.8c0 1.713.002 2.878.075 3.778.072.877.202 1.325.361 1.638a4 4 0 0 0 1.748 1.748c.313.16.761.29 1.638.36.9.074 2.065.076 3.778.076h2.8c1.713 0 2.878-.002 3.778-.075.877-.072 1.325-.202 1.638-.361a4 4 0 0 0 1.748-1.748c.16-.313.29-.761.36-1.638.074-.9.076-2.065.076-3.778v-2.8c0-1.713-.002-2.878-.075-3.778-.072-.877-.202-1.325-.361-1.638a4 4 0 0 0-1.748-1.748c-.313-.16-.761-.29-1.638-.36C16.278 3.001 15.113 3 13.4 3Z"
          clipRule="evenodd"
        />
      </g>
    </svg>
  );
  const Whatsapp = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={64}
      height={64}
      fill="#0795ff"
      viewBox="-6.4 -6.4 44.8 44.8"
      className="w-10"
    >
      <rect
        width={44.8}
        height={44.8}
        x={-6.4}
        y={-6.4}
        fill="#fff"
        strokeWidth={0}
        rx={22.4}
      />
      <title>{"whatsapp"}</title>
      <path d="M26.576 5.363a14.818 14.818 0 0 0-10.511-4.354C7.856 1.009 1.2 7.664 1.2 15.874c0 2.732.737 5.291 2.022 7.491l-.038-.07-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h.006c8.209-.003 14.862-6.659 14.862-14.868a14.82 14.82 0 0 0-4.349-10.507zM16.062 28.228h-.006c-2.319 0-4.489-.64-6.342-1.753l.056.031-.451-.267-4.675 1.227 1.247-4.559-.294-.467a12.23 12.23 0 0 1-1.889-6.565c0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353-5.53 12.353-12.353 12.353zm6.776-9.251c-.371-.186-2.197-1.083-2.537-1.208-.341-.124-.589-.185-.837.187-.246.371-.958 1.207-1.175 1.455-.216.249-.434.279-.805.094a10.23 10.23 0 0 1-2.997-1.852l.01.009a11.236 11.236 0 0 1-2.037-2.521l-.028-.052c-.216-.371-.023-.572.162-.757.167-.166.372-.434.557-.65.146-.179.271-.384.366-.604l.006-.017a.678.678 0 0 0-.033-.653l.002.003c-.094-.186-.836-2.014-1.145-2.758-.302-.724-.609-.625-.836-.637-.216-.01-.464-.012-.712-.012-.395.01-.746.188-.988.463l-.001.002a4.153 4.153 0 0 0-1.299 3.102v-.004a7.233 7.233 0 0 0 1.527 3.857l-.012-.015a16.693 16.693 0 0 0 6.251 5.564l.094.043c.548.248 1.25.513 1.968.74l.149.041a5.103 5.103 0 0 0 2.368.143l-.031.004a3.837 3.837 0 0 0 2.497-1.749l.009-.017a3.122 3.122 0 0 0 .214-1.784l.003.019c-.092-.155-.34-.247-.712-.434z" />
    </svg>
  );
  const TikTok = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={64}
      height={64}
      fill="#0795ff"
      viewBox="-6.4 -6.4 44.8 44.8"
      className="w-10"
    >
      <rect
        width={44.8}
        height={44.8}
        x={-6.4}
        y={-6.4}
        fill="#fff"
        strokeWidth={0}
        rx={22.4}
      />
      <title>{"tiktok"}</title>
      <path d="M16.656 1.029c1.637-.025 3.262-.012 4.886-.025a7.762 7.762 0 0 0 2.189 5.213l-.002-.002A8.77 8.77 0 0 0 29 8.45l.028.002v5.036a13.327 13.327 0 0 1-5.331-1.247l.082.034a15.385 15.385 0 0 1-2.077-1.196l.052.034c-.012 3.649.012 7.298-.025 10.934a9.513 9.513 0 0 1-1.707 4.954l.02-.031c-1.652 2.366-4.328 3.919-7.371 4.011h-.014a9.071 9.071 0 0 1-5.139-1.31l.04.023C5.05 28.185 3.32 25.603 3 22.6l-.004-.041a23.163 23.163 0 0 1-.012-1.862c.49-4.779 4.494-8.476 9.361-8.476.547 0 1.083.047 1.604.136l-.056-.008c.025 1.849-.05 3.699-.05 5.548a4.29 4.29 0 0 0-5.465 2.619l-.009.03c-.133.427-.21.918-.21 1.426 0 .206.013.41.037.61l-.002-.024a4.26 4.26 0 0 0 4.382 3.586h-.009a4.198 4.198 0 0 0 3.451-1.994l.01-.018c.267-.372.45-.822.511-1.311l.001-.014c.125-2.237.075-4.461.087-6.698.012-5.036-.012-10.06.025-15.083z" />
    </svg>
  );
  const Email = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width={64}
      height={64}
      fill="#0795ff"
      viewBox="-102.4 -102.4 716.8 716.8"
      className="w-10"
    >
      <rect
        width={716.8}
        height={716.8}
        x={-102.4}
        y={-102.4}
        fill="#fff"
        strokeWidth={0}
        rx={358.4}
      />
      <path d="M410.272 243.145c-3.63-4.486-10.211-5.179-14.695-1.548l-3.636 2.942c-4.485 3.631-5.177 10.211-1.546 14.696a10.43 10.43 0 0 0 8.128 3.875c2.309 0 4.634-.762 6.568-2.328l3.635-2.942c4.484-3.631 5.177-10.21 1.546-14.695zM380.363 267.357c-3.63-4.486-10.211-5.179-14.695-1.549l-74.708 59.674c-4.485 3.631-5.177 10.21-1.546 14.695a10.425 10.425 0 0 0 8.127 3.875 10.41 10.41 0 0 0 6.568-2.327l74.708-59.674c4.484-3.63 5.177-10.208 1.546-14.694z" />
      <path d="M449.742 62.685H62.258C27.929 62.685 0 90.614 0 124.942v262.117c0 34.329 27.929 62.257 62.258 62.257h387.484c34.33 0 62.258-27.928 62.258-62.257V124.942c0-34.328-27.928-62.257-62.258-62.257zm-29.83 20.897L255.859 216.19 91.806 83.582h328.106zm8.214 344.836H83.592V184.382l165.712 133.49a10.45 10.45 0 0 0 13.11 0l165.711-133.49v244.036zm62.976-41.36c0 22.806-18.554 41.359-41.36 41.359h-.717v-265.87a10.447 10.447 0 0 0-17.004-8.137L255.859 296.318 79.697 154.41a10.448 10.448 0 0 0-17.004 8.137v265.87h-.436c-22.805.001-41.359-18.553-41.359-41.358V124.942c0-21.626 16.688-39.418 37.861-41.2l190.532 154.012a10.426 10.426 0 0 0 6.568 2.323c2.327 0 4.653-.774 6.568-2.323L452.983 83.721c21.295 1.66 38.119 19.507 38.119 41.22v262.117z" />
    </svg>
  );
  return (
    <div className="pb-20">
      <AboutCard
        title="Tentang Arsadaya"
        svg={AboutIcon}
        desc={
          <>
            <p className="mb-4">
              Arsadaya sebagai mitra terpercaya dalam mendistribusikan berbagai
              produk makanan, minuman, dan kerajinan tangan dari UMKM yang
              berpotensi.
            </p>
            <p className="mb-4">
              Kami hadir untuk menjembatani kreativitas para UMKM dengan pasar
              yang lebih luas, membantu mereka tumbuh, dan memperkenalkan
              produk-produk berkualitas asli Indonesia ke dunia.
            </p>
            <p className="mb-4">
              Arsayadaya berfokus pada pengembangan pemberdayaan UMKM, dan lebih
              dari 85 mitra UMKM menjadi bagian dari Arsadaya.
            </p>
            <p className="">
              Kami percaya bahwa setiap produk memiliki cerita dan potensi yang
              luar biasa, dan kami berkomitmen untuk mendukung pengusaha lokal
              agar bisa bersaing di pasar yang lebih besar. Melalui kolaborasi
              yang erat dengan UMKM, kami membantu mengolah, mengemas, dan
              mendistribusikan produk mereka ke berbagai kalangan didalam negeri
              maupun internasional.
            </p>
          </>
        }
        bgColor="bg-white"
        fontColor="text-black"
      />
      <AboutCard
        title="Visi"
        svg={VisiIcon}
        desc={
          <>
            <div>
              <p>
                Menjadi Perusahaan Yang Menciptakan Ekosistem UMKM Melalui
                Akselerasi dan Distribusi yang Berkelanjutan.
              </p>
            </div>
          </>
        }
        bgColor="bg-[#0795ff]"
        fontColor="text-white"
      />
      <AboutCard
        title="Misi"
        svg={MisiIcon}
        desc={
          <>
            <div>
              <div className="flex gap-3">
                <span>&bull;</span>
                <p>
                  Memberikan pelatihan dan pendampingan berkelanjutan kepada
                  pelaku UMKM
                </p>
              </div>
              <div className="flex gap-3">
                <span>&bull;</span>
                <p>
                  Mengoptimalkan penggunaan teknologi untuk mendukung akselerasi
                  dan distribusi UMKM
                </p>
              </div>
              <div className="flex gap-3">
                <span>&bull;</span>
                <p>
                  Membangun jaringan distribusi yang efisien untuk meningkatkan
                  akses pasar UMKM
                </p>
              </div>
            </div>
          </>
        }
        bgColor="bg-white"
        fontColor="text-black"
      />
      <div className="flex flex-col items-center bg-[#0795ff] py-5">
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
        <div className="flex gap-3 mt-2 flex-wrap px-3 justify-center">
          <PartnerCard imageSrc={KBA} bgColor="bg-white" />
          <PartnerCard imageSrc={UNDIP} bgColor="bg-white" />
          <PartnerCard imageSrc={PEMDAJEPARA} bgColor="bg-white" />
          <PartnerCard imageSrc={BALAIBESAR} bgColor="bg-white" />
        </div>
      </div>
      <div className="flex flex-col py-5">
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
      <div>
        <ContactCard />
      </div>
      <div className="bg-[#0795ff] py-3">
        <div className="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={64}
            height={64}
            fill="#0795ff"
            stroke="#0795ff"
            strokeWidth={0}
            viewBox="-4.8 -4.8 33.6 33.6"
            className="w-10 mr-2"
          >
            <rect
              width={33.6}
              height={33.6}
              x={-4.8}
              y={-4.8}
              fill="#fff"
              stroke="none"
              rx={16.8}
            />
            <path
              stroke="none"
              d="M21 2H6a2 2 0 0 0-2 2v3H2v2h2v2H2v2h2v2H2v2h2v3a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-8 2.999c1.648 0 3 1.351 3 3A3.012 3.012 0 0 1 13 11c-1.647 0-3-1.353-3-3.001 0-1.649 1.353-3 3-3zM19 18H7v-.75c0-2.219 2.705-4.5 6-4.5s6 2.281 6 4.5V18z"
            />
          </svg>
          <h2 className="text-xl font-bold text-white">Kontak</h2>
        </div>
        <div>
          <div className="flex justify-center">
            <p className="text-base mt-2 text-white text-center">
              Alamat: MSTP Kampus UNDIP Jepara, Jalan UNDIP, Telukawur, Kec.
              Tahunan, Kabupaten Jepara, Jawa Tengah 59427
            </p>
          </div>
          <div className="flex justify-center mt-4 px-3">
            <iframe
              style={{ border: 0, width: "100%", height: "200px" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.023547922144!2d110.6391087!3d-6.6218739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e711e6aa6f4aac5%3A0x27acfb8fefa2dc43!2sMarine%20Science%20Techno%20Park%20UNDIP!5e0!3m2!1sen!2sid!4v1633406511176!5m2!1sen!2sid"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="flex justify-center gap-5">
          <SocialMediaCard
            link="https://www.instagram.com/dsa_arrumsamudra?igsh=eGVlcDA0NXdmd2kx"
            svg={Instagram}
          />
          <SocialMediaCard link="https://wa.me/6281575249021" svg={Whatsapp} />
          <SocialMediaCard
            link="https://www.tiktok.com/@arrumsamudranusantara?_t=8qCLXG5lkeK&_r=1"
            svg={TikTok}
          />
          <SocialMediaCard
            link="https://mail.google.com/mail/?view=cm&fs=1&to=ptarrumsamudranusantara@gmail.com"
            svg={Email}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutContainer;
