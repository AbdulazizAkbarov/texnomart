import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import { Button } from "antd";
import Product from "../Product";

function Cardlar({ productId }) {
  const [malumot, setMalumot] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    axios
      .get(
        `https://gw.texnomart.uz/api/web/v1/product/accessories?id=${productId}`
      )
      .then((res) => {
        setMalumot(res.data.data.data);
      });
  }, []);

  if (malumot.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-9">
      <h2 className="font-bold text-3xl mb-3">Aksesuarlar</h2>
      <div className="flex gap-2 justify-between mb-4">
        {malumot.map((item, index) => (
          <Button
            onClick={() => {
              setActive(index);
            }}
            type={active === index ? "primary" : "default"}
            className="border px-5 py-1 rounded cursor-pointer"
            key={item.id}
          >
            {item.name}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-5">
        {malumot[active].products.map((item, index) => {
          return <Product key={index} item={item} />;
        })}
      </div>
    </div>
  );
}

export default Cardlar;
