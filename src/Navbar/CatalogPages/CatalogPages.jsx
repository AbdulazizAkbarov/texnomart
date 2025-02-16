import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useSmthStore from "../my-store";
import Product from "../../Main/Product";
import { Pagination } from "antd";
import { Button } from "antd";
import Menu05Icon from "../../Main/menu-05-stroke-rounded (1)";
import Menu11Icon from "../../Main/menu2";

function CatalogPages() {
  const { slug } = useParams();
  const [catalog, setCatalog] = useState();
  const { counter } = useSmthStore();
  const params = useParams();
  const [active, setActive] = useState(1);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://gw.texnomart.uz/api/common/v1/search/filters?category_all=${slug}&sort=-order_count&page=${active}`
      )

      .then((res) => {
        setCatalog(res.data.data);
      });
  }, [slug, active]);

  if (!catalog) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = (item) => {
    const topish = counter.find((prod) => prod.id === item.id);

    if (topish) {
      const updatedCounter = counter.map((prod) =>
        prod.id === item.id ? { ...prod, soni: prod.soni + 1 } : prod
      );
      useSmthStore.setState({
        counter: updatedCounter,
      });
    } else {
      const newProduct = {
        ...item,
        soni: 1,
      };
      useSmthStore.setState({
        counter: [...counter, newProduct],
      });
    }
  };
  return (
    <div className=" mx-auto container px-8">
      <div className="flex justify-evenly mt-5">
        <h2 className="cursor-pointer">Narx boyicha</h2>
        <h2 className="cursor-pointer">Reyting boyicha</h2>
        <h2 className="cursor-pointer">Yangi kelganlar</h2>
        <div className="flex gap-2">
          <h2>Ommabopligi bo'yicha</h2>
          <button
            onClick={() => {
              setMenu(menu === true ? false :true)
            }}
          >
            {menu === false ? <Menu05Icon /> : <Menu11Icon />}
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-6 mt-8 mb-10">
        {catalog.products.map((item, index) => {
          return <Product key={index} item={item} />;
        })}
      </div>

      <div className="flex justify-center gap-1 mb-11 mt-6">
        {Array(catalog.pagination.total_page)
          .fill(1)
          .map((_, i) => {
            const page = i + 1;
            return (
              <Button
                type={active === page ? "primary" : "default"}
                onClick={() => {
                  setActive(page);
                }}
                key={i}
                className="border px-4 py-1"
              >
                {i + 1}
              </Button>
            );
          })}
      </div>
    </div>
  );
}

export default CatalogPages;
