import React from 'react';
import Image from 'next/image';

const Awards = () => {
  return (
    <>
       <div className="p-24 bg-[#151515]">
            <div className="grid grid-rows-5 grid-cols-2 gap-8">
              <div className="max-w-[414px] row-end-3 row-span-2 ml-auto mr-36">
                <Image src="/assets/cta-image01.png" width={414} height={580} alt="" />
                <div className="mt-8 flex justify-center flex-col items-center">
                  <p className="text-white font-black text-[50px]"><span className="text-[#00A256]">+</span>10</p>
                  <p className="text-[#00A256] text-[18px]">Awards</p>
                </div>
              </div>
              <div className="max-w-[579px] row-start-2 row-span-2 row-end-4 ml-auto">
                <Image src="/assets/cta-image02.png" height={401} width={579} alt="" />
                <div className="mt-8 flex justify-center flex-col items-center">
                  <p className="text-white font-black text-[50px]"><span className="text-[#00A256]">+</span>100</p>
                  <p className="text-[#00A256] text-[18px]">Projects</p>
                </div>
              </div>
              <div className="max-w-[507px] row-start-3 row-span-2 row-end-5">
                <Image src="/assets/cta-image03.png" height={538} width={507} alt="" />
                <div className="mt-8 flex justify-center flex-col items-center">
                  <p className="text-white font-black text-[50px]"><span className="text-[#00A256]">+</span>50</p>
                  <p className="text-[#00A256] text-[18px]">Experts</p>
                </div>
              </div>
              <div className="max-w-[252px] row-start-4 row-span-2 row-end-6 ml-36">
                <Image src="/assets/cta-image04.png" height={509} width={252} alt="" />
                <div className="mt-8 flex justify-center flex-col items-center">
                  <p className="text-white font-black text-[50px]"><span className="text-[#00A256]">+</span>15</p>
                  <p className="text-[#00A256] text-[18px]">Years of Experience</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 border-b border-[#BDBDBD] mt-8">
              <div className=" flex justify-center flex-col items-center border-x border-[#BDBDBD] pb-12">
                <p className="text-white font-black text-[50px]"><span className="text-[#00A256]">+</span>10</p>
                <p className="text-[#00A256] text-[18px]">Projects</p>
              </div>
              <div className=" flex justify-center flex-col items-center border-r border-[#BDBDBD] pb-12">
                <p className="text-white font-black text-[50px]"><span className="text-[#00A256]">+</span>50</p>
                <p className="text-[#00A256] text-[18px]">Experts</p>
              </div>
              <div className=" flex justify-center flex-col items-center border-r border-[#BDBDBD] pb-12">
                <p className="text-white font-black text-[50px]"><span className="text-[#00A256]">+</span>15</p>
                <p className="text-[#00A256] text-[18px]">Years of Experience</p>
              </div>
              <div className=" flex justify-center flex-col items-center border-r border-[#BDBDBD] pb-12">
                <p className="text-white font-black text-[50px]"><span className="text-[#00A256]">+</span>100</p>
                <p className="text-[#00A256] text-[18px]">Projects</p>
              </div>
            </div>
            <h6 className="text-[80px] text-white max-w-[600px] leading-none font-bold pt-20 pb-10 text-center mx-auto">Want  to work
              with us?</h6>
            <div className="text-center">
              <button className="bg-[#004FEE] text-white px-[61px] py-[20px] rounded-[70px] mx-auto text-[22px] font-bold">Let’s Talk</button>
            </div>
          </div>
    </>
  )
}

export default Awards