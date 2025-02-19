import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useSmthStore from "../my-store";
import Product from "../../Main/Product";
import { Button } from "antd";
import Sidebar from "../../Main/Sidebar";
import MenuSquareIcon from "../../Main/menu4";
import Menu09Icon from "../../Main/menu2.2";

import Sort from "../../Main/Sort/Sort";
import useMyStore from "../my-store";

function CatalogPages({ filter }) {
  const { slug } = useParams();
  const [catalog, setCatalog] = useState();
  const { counter } = useSmthStore();
  const params = useParams();
  const [active, setActive] = useState(1);

  const state = useMyStore();
  const { tartibi } = state;

  useEffect(() => {
    axios
      .get(
        `https://gw.texnomart.uz/api/common/v1/search/filters?category_all=${slug}&sort=${
          tartibi ? "-" : ""
        }${state.currentSort}&page=${active}`
      )

      .then((res) => {
        setCatalog(res.data.data);
        console.log(res.data.data);
      });
  }, [slug, active, state.currentSort, tartibi]);

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

  function onChange(name) {
    return useMyStore.setState({
      currentSort: name,
    });
  }
  return (
    <div className=" mx-auto container px-8">
      <div className="flex   justify-between ">
        <div className="w-[350px]">
          <Sidebar catalog={catalog} />{" "}
        </div>

        <div className="mt-5">
          <div className="flex justify-between items-center">
            <div className="flex justify-evenly gap-10 mt-5">
              <Sort
                currentSort={state.currentSort}
                onChangeSort={onChange}
                name={"Price"}
                title={"Narxi Boyicha"}
              />
              <Sort
                currentSort={state.currentSort}
                onChangeSort={onChange}
                name={"rating"}
                title={"Reyting Boyicha"}
              />
              <Sort
                currentSort={state.currentSort}
                onChangeSort={onChange}
                name={"new"}
                title={"Yangi kelgani Boyicha"}
              />
              <Sort
                currentSort={state.currentSort}
                onChangeSort={onChange}
                name={"order_count"}
                title={"OmmaBopligi Boyicha"}
              />
            </div>

            <div className="flex gap-5">
              <div>
                <MenuSquareIcon />
              </div>
              <div>
                <Menu09Icon />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap w-[1050px] gap-6 mt-8 mb-10">
            {catalog.products.map((item, index) => {
              return <Product key={index} item={item} />;
            })}
          </div>
        </div>
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
