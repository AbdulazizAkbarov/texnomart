import axios from "axios";
import React, { useEffect, useState } from "react";

function CatalogPages() {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://gw.texnomart.uz/api/common/v1/search/filters?category_all=${catalog.slug}&sort=-order_count&page=1`
      )
      .then((res) => {
        setCatalog(res.data.data);
        console.log(res.data.data);
      });
  }, []);
  return <div></div>;
}

export default CatalogPages;
