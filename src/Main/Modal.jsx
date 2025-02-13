import React, { useState } from "react";
import FavouriteIcon from "../Navbar/icons/favourite-stroke-rounded";
import Delete03Icon from "./delete-03-stroke-rounded";
import Cancel01Icon from "./cancel-01-stroke-rounded";
import useMystore from "../Navbar/my-store";

function Modal({ modal, setModal }) {
  const [tolov, setTolov] = useState(false);
  const { counter } = useMystore();

  const handleDel = (id) => {
    const del = counter.filter((item) => item.id !== id);
    useMystore.setState({ counter: del });
  };

  const minus = (item) => {
    if (item.soni > 1) {
      const update = counter.map((item_counter) =>
        item_counter.id === item.id
          ? { ...item_counter, soni: item_counter.soni - 1 }
          : item_counter
      );
      useMystore.setState({ counter: update });
    }
  };

  const plus = (item) => {
    console.log();
    const update = counter.map((item_counter) =>
      item_counter.id === item.id
        ? { ...item_counter, soni: item_counter.soni + 1 }
        : item_counter
    );
    useMystore.setState({ counter: update });
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-[black]/60 z-10" onClick={()=>{
      setModal(false)
    }}>
     <div>
     <div className="w-[1300px] h-[440px] bg-white mx-auto mt-28 rounded-2xl">
        <div className="flex items-center justify-between pr-12">
          <h2 className="font-semibold text-2xl p-6">Korzina</h2>
          <div onClick={() => setModal(false)}>
            <Cancel01Icon />
          </div>
        </div>
        <div className="p-5 flex justify-between">
          <div className="w-[750px]">
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <h2>Выбрать все</h2>
              </div>
              <h2>Удалить выбранные</h2>
            </div>
            <div className="bg-[lightgrey] h-[1px] w-full mt-5"></div>
            <div className="scrol">
              {counter.map((item) => (
                <div
                  className="flex items-center justify-between mt-6"
                  key={item.id}
                >
                  <input type="checkbox" />
                  <img className="w-[80px]" src={item.image} alt="" />
                  <h2>{item.name}</h2>
                  <div className="flex gap-2 cursor-pointer ">
                    <button onClick={() => minus(item)}>-</button>
                    <h2>{item.soni}</h2>
                    <button onClick={() => plus(item)}>+</button>
                  </div>
                  <div>{item.salary_price}</div>
                  <div className="flex flex-col gap-2">
                    <FavouriteIcon />
                    <div onClick={() => handleDel(item.id)}>
                      <Delete03Icon />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="w-[450px] h-[250px] border border-[lightgrey] rounded-xl">
              <div className="bg-[lightgrey] flex w-[300px] justify-between px-3 rounded py-1.5 mx-auto mt-3">
                <h2
                  onClick={() => {
                    setTolov(true);
                  }}
                  className={`${
                    tolov ? "bg-white" : ""
                  } px-4 rounded cursor-pointer`}
                >
                  Tolov oldindan
                </h2>
                <h2
                  onClick={() => {
                    setTolov(false);
                  }}
                  className={`${
                    !tolov ? "bg-white" : ""
                  } px-4 rounded  cursor-pointer`}
                >
                  Muddatli tolov
                </h2>
              </div>
              {tolov ? (
                <>
                  <div className="flex p-2 justify-between mt-2 mb-1">
                    <h2>1 товар на сумму</h2>
                    <h2></h2>
                  </div>
                  <div className="h-[1px] w-full bg-[lightgrey] my-2"></div>
                  <div className="flex p-4 justify-between">
                    <h2 className="font-semibold text-xl">Итого</h2>
                    <h2 className="font-semibold text-xl">3 999 000 сум</h2>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex p-2 justify-between mt-2 mb-1 flex-col">
                    <h2>1 товар на сумму</h2>
                    <h2>
                      Вы можете выбрать рассрочку на срок от 12 до 24 месяцев
                      при оформлении заказа
                    </h2>
                  </div>
                  <div className="h-[1px] w-full bg-[lightgrey] my-2"></div>
                  <div className="flex p-4 justify-between">
                    <h2 className="font-semibold text-xl">Итого</h2>
                    <h2 className="font-semibold text-xl">3 999 000 сум</h2>
                  </div>
                </>
              )}
            </div>
            <button className="bg-[#FBC100] w-[450px] h-[40px] rounded-lg mt-4 cursor-pointer">
              salom
            </button>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
}

export default Modal;
