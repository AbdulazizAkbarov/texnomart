import React from "react";

function Navbar_top() {
  return (
    <div className="bg-[#333333] flex justify-between p-2 text-white px-8 container mx-auto">
      <div className="flex justify-between gap-8">
        <div
          className="flex
            gap-2 items-center"
            
        >
          <img
            src={"https://texnomart.uz/_nuxt/img/header-location.c6b9bf0.svg"}
            alt=""
          />
          <h2>Toshkent</h2>
        </div>
        <div className="flex justify-between gap-4 text-sm items-center">
          <h2>Bizning dokonimiz </h2>

          <h2 className="bg-[grey] rounded px-1 cursor-pointer">
            Yaxshi shaxslar uchun
          </h2>

          <h2>To'lov usullari</h2>
        </div>
      </div>

      <div className="flex justify-between gap-8">
        <h2>
          Aloqa markazi : <span className="font-bold text-lg">+998 93 823 11 77</span>
        </h2>

        <select name="" id="" className="border rounded-full px-1">
          <option value="" className="text-black p-0 rounded-full">
            Uz
          </option>
          <option value="" className="text-black p-0 rounded-full">
            Ru
          </option>
          <option value="" className="text-black p-0 rounded-full">
            Eng
          </option>
        </select>
      </div>
    </div>
  );
}

export default Navbar_top;
