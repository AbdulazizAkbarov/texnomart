import React, { useEffect, useState } from "react";
import FireIcon from "./icons/fire-stroke-rounded";
import { Link } from "react-router";
import axios from "axios";

function Navbar_bottom() {
  const [turi, setTuri] = useState([]);

  useEffect(() => {
    axios
      .get("https://gw.texnomart.uz/api/web/v1/header/top-categories")
      .then((res) => {
        setTuri(res.data.data.data);
      });
  }, []);
  return (
    <div className="flex justify-between px-8 container mx-auto mt-5 font-semibold">
      <h2 className="flex items-center gap-1">
        <FireIcon />
        Aksiyalar
      </h2>
      <h2 className="flex items-center gap-2">
        {" "}
        <img
          width={20}
          src={"https://texnomart.uz/_nuxt/img/oneplusone.70371be.svg"}
          alt=""
        />{" "}
        Aksiyalar
      </h2>

      {turi.map((item, index) => {
        return (
          <div key={index}>
            <Link to={`catalog/${item.slug}`}>{item.title}</Link>
          </div>
        );
      })}
    </div>
  );
}

export default Navbar_bottom;
