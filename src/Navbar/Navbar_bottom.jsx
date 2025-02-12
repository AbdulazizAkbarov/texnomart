import React from 'react'
import FireIcon from "./icons/fire-stroke-rounded"
import { Link } from 'react-router'

function Navbar_bottom() {
  return (
    <div className='flex justify-between px-8 container mx-auto mt-5 font-semibold'>

        <h2 className='flex items-center gap-1'><FireIcon/>Aksiyalar</h2>
        <h2 className='flex items-center gap-2'> <img width={20} src={"https://texnomart.uz/_nuxt/img/oneplusone.70371be.svg"} alt="" /> Aksiyalar</h2>
        <Link to={"/catalog"}>HAVO SOVUTGICHLAR</Link>
        <Link to={"/catalog"}>ISITGICHLAR</Link>
        <Link to={"/catalog"}>SMARTFONLAR</Link>
        <Link to={"/catalog"}>MUZLATGICHLAR</Link>
        <Link to={"/catalog"}>CHANGYUTGICHLAR</Link>
        <Link to={"/catalog"}>NOUTBOOKLAR</Link>
        <Link to={"/catalog"}>TELEVIZORLAR</Link>
        <Link to={"/catalog"}>BARCHA KATEGORIYALAR</Link>


    </div>
  )
}

export default Navbar_bottom