import React from "react";
import Menu01Icon from "./icons/menu-01-stroke-rounded (1)";
import UserIcon from "./icons/user-stroke-rounded";
import FavouriteIcon from "./icons/favourite-stroke-rounded";
import ShoppingCart02Icon from "./icons/shopping-cart-02-stroke-rounded";
import Modal from "../Main/Modal";
import Modal2 from "../Main/Modal2";
import { Link } from "react-router";

import { useState } from "react";
import Cancel01Icon from "../Main/cancel-01-stroke-rounded";
import useSmthStore from "./my-store";
import Login from "./Login";

function Navbar() {
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);

  const [change, setChange] = useState(false);
  const { counter, count } = useSmthStore();

  return (
    <div className="flex justify-between container px-8 mx-auto items-center mt-4">
      <Link to={"/"}>
        <img
          src={"https://texnomart.uz/_nuxt/img/texnomart-logo.3b2791c.svg"}
          alt=""
        />
      </Link>

      <div className="flex items-center justify-between gap-2">
        <button
          className="flex gap-2 bg-[#FBC100] px-4 py-2 rounded-md font-semibold"
          onClick={() => {
            setChange(!change);
          }}
        >
          {!change ? <Menu01Icon /> : <Cancel01Icon />} Katalog
        </button>

        <div className="flex border border-amber-200  w-[800px] p-2 pl-3 rounded gap-2">
          <img
            src={"https://texnomart.uz/_nuxt/img/search-18.4301eba.svg"}
            alt=""
          />
          <input
            type="text"
            placeholder="Qidirish"
            className="outline-none w-full"
          />
        </div>

        <div className="flex gap-5 pl-8">
          <Login/>
     
          
          <div
            className="flex flex-col items-center"
            onClick={() => {
              setModal2(modal2 === false ? true : false);
            }}
          >
            <div className="flex gap-2">
              <FavouriteIcon />
              <span className="bg-[#FBC100] text-[white] px-2 rounded-full">
                {count.length}
              </span>
            </div>
            Sevimlilar
          </div>

          <div
            className="flex flex-col items-center"
            onClick={() => {
              setModal(modal === false ? true : false);
            }}
          >
            <div className="flex gap-2">
              <ShoppingCart02Icon />

              <span className="bg-[#FBC100] text-[white] px-2 rounded-full">
                {counter.length}
              </span>
            </div>
            Savatcha
          </div>
        </div>
      </div>

      {modal && <Modal modal={modal} setModal={setModal} />}
      {modal2 && <Modal2 modal={modal2} setModal2={setModal2} />}
    </div>
  );
}

export default Navbar;
