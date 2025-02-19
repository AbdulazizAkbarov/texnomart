import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Cardlar from "./Main/Cardlar/Cardlar";

function Aboute() {
  const [about, setAbout] = useState();
  const { id } = useParams();
  const params = useParams();

  useEffect(() => {
    axios
      .get(`https://gw.texnomart.uz/api/web/v1/product/detail?id= ${id}`)
      .then((res) => {
        setAbout(res.data.data.data);
      });
  }, [about]);

  if (!about) {
    return <div>Yuklanmoqda...</div>;
  }
  return (
    <div className="mx-auto container px-8 mt-5">
      <div>
        <div>
          <h2 className="text-3xl font-bold mt-6">{about.name}</h2>
        </div>

        <div className="flex items-center justify-evenly mt-7">
          <div>
            <img className="w-[300px]" src={about.large_images[0]} alt="" />
          </div>
          
          <div>

            <h2 className="font-semibold mb-4">Mahsulot haqida qisqacha</h2>

            <div className=" flex flex-col gap-4">

              <div className="flex gap-1">
                <h2 className="text-[grey]">Brend</h2>
                <h2 className="text-[grey]">
                  ..........................................
                </h2>
                <h2>Janome</h2>
              </div>

              <div className="flex gap-1">
                <h2 className="text-[grey]">Ish paytida shovqin darajasi</h2>
                <h2 className="text-[grey]">
                  ..........................................
                </h2>
                <h2>Janome</h2>
              </div>

              <div className="flex gap-1">
                <h2 className="text-[grey]">Chang yig'ish hajmi</h2>
                <h2 className="text-[grey]">
                  ..........................................
                </h2>
                <h2>Janome</h2>
              </div>

              <div className="flex gap-1">
                <h2 className="text-[grey]">So‘rish quvvati</h2>
                <h2 className="text-[grey]">
                  ..........................................
                </h2>
                <h2>Janome</h2>
              </div>

              <div className="flex gap-1">
                <h2 className="text-[grey]">Tozalash</h2>
                <h2 className="text-[grey]">
                  ..........................................
                </h2>
                <h2>Janome</h2>
              </div>
            </div>
          </div>

          <div className="border-1 border-[lightgrey] rounded-lg w-[400px] h-[200px] p-3">
            <h2 className="font-bold text-2xl">
              {about.loan_price.toLocaleString("ru")} so'm
            </h2>

            <button className="bg-[#FBC100] text-white w-full py-1.5 rounded-lg cursor-pointer mt-5">
              Savatchaga
            </button>
          </div>
        </div>
      </div>

      <div>
        <Cardlar ar productId={params.id} />
      </div>
    </div>
  );
}

export default Aboute;
