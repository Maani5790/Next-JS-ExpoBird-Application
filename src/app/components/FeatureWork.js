import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const FeatureWork = () => {
  return (
    <>
    <div className="bg-[#151515]">
    <div className="xl:max-w-[1440px] mx-auto">
      <div className="p-24">
        <div className="grid grid-cols-2 items-center">
          <h6 className="text-[80px] text-[#FFFFFF] max-w-[400px] leading-none font-bold pb-24 uppercase ">
            Featured works 
            <span>
              <div className="ico animated">
              
                <div className="circle circle-top"></div>
                <div className="circle circle-main"></div>
                <div className="circle circle-bottom"></div>
                {/* <svg className="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                  y="0px" viewBox="0 0 612 612"  xml:space="preserve">
                  <defs>
                    <clipPath id="cut-off-arrow">
                      <circle cx="306" cy="306" r="287" />
                    </clipPath>
              
                    <filter id="goo">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                      <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
              
                  </defs>
                  <path className="st-arrow" d="M317.5,487.6c0.3-0.3,0.4-0.7,0.7-1.1l112.6-112.6c6.3-6.3,6.3-16.5,0-22.7c-6.3-6.3-16.5-6.3-22.7,0
                        l-86,86V136.1c0-8.9-7.3-16.2-16.2-16.2c-8.9,0-16.2,7.3-16.2,16.2v301.1l-86-86c-6.3-6.3-16.5-6.3-22.7,0
                        c-6.3,6.3-6.3,16.5,0,22.7l112.7,112.7c0.3,0.3,0.4,0.7,0.7,1c0.5,0.5,1.2,0.5,1.7,0.9c1.7,1.4,3.6,2.3,5.6,2.9
                        c0.8,0.2,1.5,0.4,2.3,0.4C308.8,492.6,313.8,491.3,317.5,487.6z" />
                </svg> */}

<svg className="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 612 612" xmlSpace="preserve">
      <defs>
        <clipPath id="cut-off-arrow">
          <circle cx="306" cy="306" r="287" />
        </clipPath>

        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>

      <path className="st-arrow" d="M317.5,487.6c0.3-0.3,0.4-0.7,0.7-1.1l112.6-112.6c6.3-6.3,6.3-16.5,0-22.7c-6.3-6.3-16.5-6.3-22.7,0
        l-86,86V136.1c0-8.9-7.3-16.2-16.2-16.2c-8.9,0-16.2,7.3-16.2,16.2v301.1l-86-86c-6.3-6.3-16.5-6.3-22.7,0
        c-6.3,6.3-6.3,16.5,0,22.7l112.7,112.7c0.3,0.3,0.4,0.7,0.7,1c0.5,0.5,1.2,0.5,1.7,0.9c1.7,1.4,3.6,2.3,5.6,2.9
        c0.8,0.2,1.5,0.4,2.3,0.4C308.8,492.6,313.8,491.3,317.5,487.6z" />
    </svg>

        
              </div>
            </span>
          </h6>
        
          <p className="text-[18px] text-white max-w-[450px]  pb-24">We are a team of design and research experts with over ten years of experience in improving businesses and peoples’ lives through smart design solutions</p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="max-w-[605px]">
            <Image src="/assets/work01.png" width={605} height={591} className="rounded-[50px]" alt="" />
            <p className="text-white mt-8 font-black text-[18px]">Zorro University</p>
          </div>
          <div className="max-w-[605px] ml-auto">
            <Image src="/assets/work02.png" width={605} height={591} className="rounded-[50px]" alt="" />
            <p className="text-white mt-8 font-black text-[18px]">GEMMIE SKIN CARE</p>
          </div>
          <div className="max-w-[605px]">
            <Image src="/assets/work03.png" width={605} height={591} className="rounded-[50px]" alt="" />
            <p className="text-white mt-8 font-black text-[18px]">Doodle food</p>
          </div>
          <div className="max-w-[605px] ml-auto">
            <Image src="/assets/work04.png" width={605} height={591} className="rounded-[50px]" alt="" />
            <p className="text-white mt-8 font-black text-[18px]">Doodle food</p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <button className="bg-[#00A256] text-white px-[61px] py-[20px] rounded-[70px] mx-auto text-[22px] font-bold	">Hire Us</button>
        </div>
      </div>
    </div>
  </div>

    </>
  )
}

export default FeatureWork