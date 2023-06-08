import React from 'react'
import Image from 'next/image'
const Navbar = () => {
  return (
    <>
      <div className="px-24 flex items-center justify-center bg-[#151515]">
          <div className="xl:max-w-[1440px] w-full">
              <nav className="py-6 w-full flex items-center justify-center">
                  <Image src="/assets/logo.svg" height={41} width={140}   alt="" />
                  <ul className="flex justify-end items-center flex-1 list-none">
                      <li className="text-white mr-4 text-[16px] font-semibold">Our Technologies</li>
                      <li className="text-white mr-4 text-[16px] font-semibold">Ecommerce</li>
                      <li className="text-white mr-4 text-[16px] font-semibold">Ux & intreactive</li>
                      <li className="text-white mr-4 text-[16px] font-semibold">Who We Are</li>
                      <button className="bg-[#00A256] px-5 py-3 rounded-[40px] text-white text-[13px] font-bold">Let’s Talk <span><Image src="/assets/Send.svg" className="inline" height={20} width={21} alt="" /></span></button>
                  </ul>
              </nav>
          </div>
      </div>
    </>
  )
}

export default Navbar
