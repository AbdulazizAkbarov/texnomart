import { Button } from "antd";
import React, { useState } from "react";
import SortByDown02Icon from "./sort-by-down-02-stroke-rounded";
import SortByUp02Icon from "./sort-by-up-02-stroke-rounded";
import useMyStore from "../../Navbar/my-store";

function Sort({ name, currentSort, onChangeSort, title }) {
  const state = useMyStore();
  const { tartibi } = state;
  return (
    <div>
      <div
        className="flex gap-2 items-center cursor-pointer select-none"
        onClick={() => {
          onChangeSort(name);
        }}
      >
        <h2>{title}</h2>
        <div className="border-[none]">
          {currentSort === name ? (
            <>{state.tartibi ? <SortByDown02Icon /> : <SortByUp02Icon />} </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Sort;
