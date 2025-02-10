import React from 'react'
import FireIcon from "./icons/fire-stroke-rounded"

function Navbar_bottom() {
  return (
    <div className='flex justify-between px-8 container mx-auto mt-5 font-semibold'>


        <h2 className='flex items-center gap-1'><FireIcon/>Aksiyalar</h2>
        <h2 className='flex items-center gap-2'> <img width={20} src={"https://texnomart.uz/_nuxt/img/oneplusone.70371be.svg"} alt="" /> Aksiyalar</h2>
        <h2>HAVO SOVUTGICHLAR</h2>
        <h2>ISITGICHLAR</h2>
        <h2>SMARTFONLAR</h2>
        <h2>MUZLATGICHLAR</h2>
        <h2>CHANGYUTGICHLAR</h2>
        <h2>NOUTBOOKLAR</h2>
        <h2>TELEVIZORLAR</h2>
        <h2>BARCHA KATEGORIYALAR</h2>

    </div>
  )
}

export default Navbar_bottom