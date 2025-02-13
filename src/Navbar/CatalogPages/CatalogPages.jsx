import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ShoppingCart02Icon from "../icons/shopping-cart-02-stroke-rounded";
import useSmthStore from "../my-store";
import Cards from "../../Main/Cards";
import Product from "../../Main/Product";

function CatalogPages() {
  const { slug } = useParams();
  const [catalog, setCatalog] = useState([]);
  const { counter } = useSmthStore();


  useEffect(() => {
    axios
      .get(
        `https://gw.texnomart.uz/api/common/v1/search/filters?category_all=${slug}&sort=-order_count&page=1`
      )

      .then((res) => {
        setCatalog(res.data.data.products);
        console.log(res.data.data.products);
      });
  }, [slug]);

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
      <div className="flex flex-wrap justify-center gap-6 mt-8 mb-10">
        {catalog.map((item, index) => {
          return (
           <Product key={index} item={item}/>
          );
        })}
      </div>
    </div>
  );
}

export default CatalogPages;
