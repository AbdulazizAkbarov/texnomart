import React, { useState } from "react";
import { Link, useParams } from "react-router";
import rasm1 from "../assets/yurak_border.svg";
import rasm2 from "../assets/yurak_qizil.svg";
import ShoppingCart02Icon from "../Navbar/icons/shopping-cart-02-stroke-rounded";
import useMyStore from "../Navbar/my-store";

function Product({ item }) {
  const { counter,count } = useMyStore();

  const [like, setLike] = useState({});

  const onclikLike = (id) => {
    setLike((prevLiked) => ({
      ...prevLiked,
      [id]: !prevLiked[id],
    }));
  };
  const state =useMyStore()

  const savatgaQoshish = (item) => {
    const topish = counter.find((prod) => prod.id === item.id);

    if (topish) {
      const updatedCounter = counter.map((prod) =>
        prod.id === item.id ? { ...prod, soni: prod.soni + 1 } : prod
      );
      useMyStore.setState({
        counter: updatedCounter,
      });
    } else {
      const newProduct = {
        ...item,
        soni: 1,
      };
      useMyStore.setState({
        counter: [...counter, newProduct],
      });
    }
  };

  return (
    <div className="w-[220px] mt-6 relative hover:shadow-2xl p-3 rounded-xl">
      <Link to={`/about/${item.id}`}>
        <img
          className="w-[200px] h-[190px] bg-[#F7F7F7] mb-4"
          src={item.image}
          alt=""
        />
      </Link>

      <img
        className="w-[20px] absolute top-0 right-1 cursor-pointer"
        src={like[item.id] ? rasm2 : rasm1}
        alt="heart"
        onClick={() => {
          onclikLike(item.id);

          const nom = count.concat({
            id: item.id,
            name: item.name,
            image: item.image,
            sale_price: item.sale_price,
            axiom_monthly_price: item.axiom_monthly_price,
          });
          useMyStore.setState({
            count: nom,
          });
        }}
      />

      <h2>{item.name.slice(0, 20)}</h2>

      <h2 className="bg-[lightgrey] px-2 inline-block rounded text-md my-4">
        {item.axiom_monthly_price}
      </h2>

      <div className="flex items-center justify-between">
        <h2>{item.sale_price} so'm</h2>

        <div
          className="border-2 border-[#FBC100] p-1 rounded cursor-pointer"
          onClick={() => {
            savatgaQoshish(item);
            // useMyStore.setState({
            //   counter: nom,
            // });
          }}
        >
          <ShoppingCart02Icon />
        </div>
      </div>
    </div>
  );
}

export default Product;
