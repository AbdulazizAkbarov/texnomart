import Modal from "antd/es/modal/Modal";
import React, { useState } from "react";
import UserIcon from "./icons/user-stroke-rounded";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Button, message } from "antd";
// import { data } from "react-router-dom";

function Login() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [bosqich,setBosqich] =useState('ism_nomer')

  const { register, handleSubmit } = useForm();
  function onSubmit(data) {
    console.log(data);
    axios
      .post(`https://gateway.texnomart.uz/api/common/v1/user/register`, data)
      .then((res) => {
        message.success("Ishladi")
        setBosqich('keyingisi')
        setLoading(false)
      });
  }
  return (
    <>
      <div
        className="flex flex-col items-center cursor-pointer"
        onClick={() => {
          setOpen(true);
        }}
      >
        <UserIcon />
        Kirish
      </div>

      <div>
        <Modal
          open={open}
          onCancel={() => {
            setOpen(false);
          }}
          footer={false}
        >
         {bosqich === 'ism_nomer' ? 
           (<form
            onSubmit={handleSubmit(onSubmit)}
            className="m-4 flex flex-col gap-2"
          >
            <h2 className="font-bold">Abdulaziz</h2>

            <div>
              <label>Telefon</label>
              <br />
              <input
                type="number"
                className="my-2 border w-full p-1 rounded"
                size="large"
                {...register("phone")}
              />
            </div>

            <div>
              <label>Ism</label>
              <br />
              <input
                className="my-2 border w-full p-1 rounded"
                size="large"
                {...register("first_name")}
              />
            </div>

            <div>
              <Button
              loading ={loading}
              htmlType="submit"
                style={{
                  background: "#FBC100",
                  width: "400px",
                  padding: "4px",
                  color: "white",
                  borderRadius: "5px",
                  marginLeft: "20px",
                }}
              >
               {loading && "Loading..."} Kirish
              </Button>
            </div>
          </form>) :(<>
          
            <label className="font-bold text-xl text-center">SMS Code </label><br /><br />
            <input className="border-1 outline-none border-[lightgrey] p-1 w-full rounded " type="text" placeholder="Sms Code" />
            <button className="bg-[#FBC100] px-8 py-1 rounded text-white mt-2">Jonatish</button>
          </> )}
        </Modal>
      </div>
    </>
  );
}

export default Login;
