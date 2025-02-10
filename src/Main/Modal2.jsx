import React from "react";
import FavouriteIcon from "../Navbar/icons/favourite-stroke-rounded";
import Delete03Icon from "./delete-03-stroke-rounded";
import Cancel01Icon from "./cancel-01-stroke-rounded";
import useSmthStore from "../Navbar/my-store";

function Modal({ modal2, setModal2 }) {
  const { count } = useSmthStore();
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-[#d7d7d7] z-10">
      <div className="w-[1300px] h-[440px] bg-white mx-auto mt-28 rounded-2xl ">
        <div className="flex items-center justify-between pr-12">
          <h2 className="font-semibold text-2xl p-6">Yoqimlilar</h2>
          <div
            onClick={() => {
              setModal2(false);
            }}
          >
            <Cancel01Icon />
          </div>
        </div>
        <div className="p-5 flex justify-between">
          <div className="w-[750px] mx-auto">
            <div className="flex justify-between">
              <div className="flex items-center gap-2 ">
                <input type="checkbox" className="" />
                <h2>Выбрать все</h2>
              </div>

              <h2>Удалить выбранные</h2>
            </div>

            <div className="bg-[lightgrey] h-[1px] w-full mt-5"></div>

            <div className="scrol ">
            {count.map((item, index) => {
                  console.log(item);

              return (
                <div className="flex items-center justify-between mt-6 ">
                  <input type="checkbox" />

                  <img className="w-[80px]" src={item.image} alt="" />

                  <h2>{item.name}</h2>

                  <div> - 1 +</div>
                  <div>{item.salary_price}</div>

                  <div className="flex flex-col gap-2">
                    <FavouriteIcon />

                    <Delete03Icon />
                  </div>
                </div>
              );
            })}
            </div>
          </div>

          {/* <div>
            <div className="w-[450px] h-[200px] border-1 border-[lightgrey] rounded-xl">
              <div className="bg-[lightgrey] flex w-[300px] justify-between px-3 rounded py-1.5 mx-auto mt-3">
                <h2 className="bg-white px-4 rounded">Tolov oldindan</h2>
                <h2>Muddatli tolov</h2>
              </div>

              <div className="flex p-2 justify-between mt-2 mb-1">
                <h2>1 товар на сумму</h2>
                <h2>3 999 000 сум</h2>
              </div>

              <div className="h-[1px] w-full bg-[lightgrey] my-2"></div>

              <div className="flex p-4 justify-between">
                <h2 className="font-semibold text-xl">Итого</h2>

                <h2 className="font-semibold text-xl">3 999 000 сум</h2>
              </div>
            </div>

            <button className="bg-[#FBC100] w-[450px] h-[40px] rounded-lg mt-4 cursor-pointer">
              salom
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Modal;
