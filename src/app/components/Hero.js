import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <>
      <div class="px-24 flex items-center justify-center relative">
          <div class="w-full">
              <section class="py-24 w-full flex items-center justify-center">
                  <div class="text-center">
                      <h6 class="inline text-[100px] text-white font-black">NEXT GENERATI<span class="text-[#00A256]">O</span>N</h6>
                      <div class="rotating-words text-center relative">
                          <span class="block text-[100px] text-white font-black bg-[#00A256] rounded-[30px] left-1/2 -translate-x-2/4 px-5">Animation</span>
                          <span class="block text-[100px] text-white font-black bg-[#00A256] rounded-[30px] left-1/2 -translate-x-2/4 px-5">Design</span>
                          <span class="block text-[100px] text-white font-black bg-[#00A256] rounded-[30px] left-1/2 -translate-x-2/4 px-5">Environment</span>
                          <span class="block text-[100px] text-white font-black bg-[#00A256] rounded-[30px] left-1/2 -translate-x-2/4 px-5">Physics</span>
                          <span class="block text-[100px] text-white font-black bg-[#00A256] rounded-[30px] left-1/2 -translate-x-2/4 px-5">Creations</span>
                      </div>
                      <p class="max-w-[720px] mx-auto text-[24px] text-white mt-10">We turn your ideas into numbers. ExpoShopify  helps you grow your eCommerce store with a proven record of successful case studies.</p>
                      <div class="max-w-[720px] mx-auto mt-10">
                        <div class="flex items-center justify-between">
                        <Image src="/assets/award01.svg" height={25} width={150} alt="" />
                  <Image src="/assets/award02.svg" height={25} width={89} alt="" />
                  <Image src="/assets/award03.svg" height={35} width={119} alt="" />
                  <Image src="/assets/award04.svg" height={31} width={124} alt="" />
                        </div>
                      </div>
                  </div>
              </section>
          </div>
      </div>
      

    </>
  )
}

export default Hero