import React from 'react'
import Image from 'next/image'
const Navbar2 = () => {
  return (
    <>
      <div className="px-24 flex items-center justify-center bg-slate-50">
        <div className="w-full">
          <nav className="py-6 w-full flex items-center justify-center">
            <Image src="/assets/logo02.svg"  width={207} height={60} alt="" />
            <ul className="flex justify-end items-center flex-1 list-none">
              <li className="text-black mr-4 text-[16px] font-semibold">Our Technologies</
              li>
              <li className="text-black mr-4 text-[16px] font-semibold">Ecommerce</li>
              <li className="text-black mr-4 text-[16px] font-semibold">Ux & intreactive</li>
              <li className="text-black mr-4 text-[16px] font-semibold">Who We Are</li>
              <button className="bg-[#00A256] border-2 border-[#151515] px-5 py-3 rounded-[40px] text-white text-[13px] font-bold">Let’s Talk <span><Image src="/assets/send.svg" className="inline " width={21} height={20} alt="" /></span></button>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Navbar2
