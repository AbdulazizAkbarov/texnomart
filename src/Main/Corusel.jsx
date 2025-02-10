import React from "react";
import { useState } from "react";

function Corusel() {
  const url = [
    "https://olcha.uz/image/original/sliders/ru/cdn_1/2025-01-27/IzptTWkWE7LL54ElN7f3qxGK9MmPgz3yw5XsbTeLmWjzTgIiY3R9w7DvLf8a.png",
    "https://olcha.uz/image/original/sliders/ru/cdn_1/2025-01-27/dSTTzYxhmrx6Bit1f383FaiXQEDa8PLX5SNdYajZ0Z2215stK3xwuokyFgdx.jpg",
    "https://olcha.uz/image/original/sliders/ru/cdn_1/2025-01-27/S0cY9YmZ0qrT0kSZZH5Mc2TNm3EkmsDy6Uk72d6ddZbXzya0niEbAGZNdZ6t.jpg",
    "https://olcha.uz/image/original/sliders/ru/cdn_1/2025-01-27/FDNkTD2d1tbRruDHNCQdjRL6rdjEmu6fYJfFFgxhiNGWLCduyFqYkZe15N9V.jpg",
    "https://olcha.uz/image/original/sliders/ru/cdn_1/2025-01-27/59yw0f5OgsU9Rk36yilbLTzNTopvpBHvKshLGlVgG7TcgOJu52AVWKupHRzE.jpg",
    "https://olcha.uz/image/original/sliders/ru/cdn_1/2024-05-27/k7X3JwefY7NM2SLThBllXJK0WwjZZiMX0TTJel9mUvksAhtLyNCF93MvgYpQ.jpg",
  ];

  const [index, setIndex] = useState(0);

  const Next = () => {
    if (index < url.length - 1) {
      setIndex(index + 1);
    }
  };

  const Back = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="mt-8 ml-[180px] mx-auto container px-8">
      <div className="relative">
        {index > 0 && (
          <button className="absolute bg-white border top-[180px] left-[10px] w-[40px] h-[40px] flex items-center justify-center rounded-full text-xl pb-1 cursor-pointer shadow-xl border-none text-[#DA002B]" onClick={Back}>
            &#60;
          </button>
        )}
        <img className=" rounded-xl h-[400px]" onClick={Next} src={url[index]} alt="" />
        {index < url.length - 1 && (
          <button
          className="absolute bg-white border top-[180px] left-[1100px] w-[40px] h-[40px] flex items-center justify-center rounded-full text-xl pb-1 cursor-pointer shadow-xl border-none text-[#DA002B]"
            onClick={Next}
          >
            &#62;
          </button>
        )}
      </div>
      
    </div>
  );
}

export default Corusel;
