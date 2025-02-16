import React, { useEffect, useState } from "react";
import ShoppingCart02Icon from "../Navbar/icons/shopping-cart-02-stroke-rounded";
import axios from "axios";
import rasm1 from "../assets/yurak_border.svg";
import rasm2 from "../assets/yurak_qizil.svg";
import useSmthStore from "../Navbar/my-store";
import { Link, useParams } from "react-router";
import Product from "./Product";
import { Pagination } from "antd";

function Cards() {
  const [card, setCard] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://gw.texnomart.uz/api/web/v1/home/special-products?type=hit_products"
      )
      .then((res) => {
        setCard(res.data.data.data);
      });
  }, []);


  return (
    <div className="mx-auto container px-8 mt-5">
      <div className="flex justify-between my-3">
        <h2>Xit Savdo </h2>
        <h2 className="text-[blue] cursor-pointer">
          Barchasini ko‘rsatish {">"}
        </h2>
      </div>
      <div className="flex items-center justify-between flex-wrap mt-4 mx-auto container px-12 gap-4">
        {card.map((item) => {
          return (
            <Product key={item.id} item={item}/>
          );
        })}
      </div>


    </div>
  );
}

export default Cards;
