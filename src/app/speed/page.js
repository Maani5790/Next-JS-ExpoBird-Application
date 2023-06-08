import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import MobileSites from '../components/MobileSites';
import ChooseShopify from '../components/ChooseShopify';
import Horizontal from '../components/Horizontal';
import MakeBrand from '../components/MakeBrand';
import Awards from '../components/Awards';
import ReasonBusiness from '../components/ReasonBusiness';
import Tech from '../components/Tech';
import OurTeam from '../components/OurTeam';
import News from '../components/News';
import Faq from '../components/Faq';
import Script from 'next/script';
import Testimonials from '../components/Testimonials';

export const metadata = {
    title: "Speed - Expobird",
    description: "Expobird"
  }

const Speed = ({title,description}) => {
  return (
    <>
     <Head>
        <title>{title}</title>
        <meta
          name='description'
          content={description}
          key="desc"
        />
      </Head>

      <Script
        src="/script/script-1.js"
        strategy="lazyOnload"
      ></Script>





<div className="bg-white px-24 flex items-center justify-center relative">
        <div className="xl:max-w-[1440px] w-full">
          <section className="py-24 w-full flex items-center justify-center">
            <div className="text-center">
              <h6 className="inline text-[100px] text-black font-black">NEXT GENERATI<span className="text-[#00A256]">O</span>N</h6>
              <div className="rotating-words ml-20   text-center relative">
                <span className="block text-[100px] text-white font-black bg-[#00A256] rounded-[30px] left-36 -translate-x-2/4 px-5">Creations</span>
                <span className="block text-[100px] text-white font-black bg-[#00A256] rounded-[30px] left-36 -translate-x-2/4 px-5">Physics</span>
                <span className="block text-[100px] text-white font-black bg-[#00A256] rounded-[30px] left-30 -translate-x-2/4 px-5">Environment</span>
                <span className="block text-[100px] text-white font-black bg-[#00A256] rounded-[30px] left-36 -translate-x-2/4 px-5">Design</span>
                <span className="block text-[100px] text-white font-black bg-[#00A256] rounded-[30px] -left-30 -translate-x-2/4 px-5">Animation</span>
              </div>
              <p className="max-w-[720px] mx-auto text-[24px] text-black mt-10">We turn your ideas into numbers. ExpoShopify  helps you grow your eCommerce store with a proven record of successful case studies.</p>
              <div className="max-w-[720px] mx-auto mt-10">
                <div className="flex items-center justify-between">
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

        <MobileSites  head={'53% of mobile site visitors leave a page that takes longer than three seconds to load'} title={'So if you are looking to improve your Shopify site speed and Google core web vitals for Shopify, this service is for you.'}   />

        <ChooseShopify />


        <div className="bg-[#151515]">
    <div className="xl:max-w-[1440px] mx-auto">
      <div className="p-24">
        <div className="flex items-baseline justify-between">
          <h6 className="text-[80px] text-[#FFFFFF] max-w-[400px] leading-none font-bold mb-24 uppercase ">
            Featured works 
            <span>
              <div className="ico animated">
              
                <div className="circle circle-top"></div>
                <div className="circle circle-main"></div>
                <div className="circle circle-bottom"></div>
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
              </div>
            </span>
          </h6>
       
          <p className="text-[18px] text-white max-w-[450px]  mb-24">We are a team of design and research experts with over ten years of experience in improving businesses and peoples’ lives through smart design solutions</p>
        </div>
        <div className="flex items-center justify-center bg-[#00A256] rounded-[30px]">
            <div className="pt-32 grid grid-rows-2 grid-cols-3">
                <div className="row-span-1 flex items-start"><h6 className="text-white font-black text-[36px]">Zorro University</h6></div>
                <div className="row-span-1 flex items-center col-span-2"><Image src="/assets/zorro-uni-01.png" width={628} height={403} alt="" /></div>
                <div className="row-span-1 col-span-2 translate-x-[10%] -translate-y-[40%]"><Image src="/assets/zorro-uni-02.png" width={628} height={403} alt="" /></div>
            </div>
        </div>
        <div className="flex items-center justify-around">
            <div className="box-shadow-green rounded-[30px] mt-32">
                <div className="flex items-center justify-center pt-12">
                    <h6 className="text-[36px] font-black text-white">
                        GEMMIE SKIN CARE
                    </h6>
                </div>
                <div className="px-24 pt-12 grid grid-rows-2 grid-cols-3 ">
                    <div className="row-span-1 flex items-start"></div>
                    <div className="row-span-1 flex items-start flex-col col-span-2">
                        <h6 className="font-bold text-white text-[24px] mb-10">After</h6>
                        <Image src="/assets/skin-01.png" width={232} height={328} alt="" />
                    </div>
                    <div className="row-span-1 col-span-2 -translate-y-[40%]">
                        <h6 className="font-bold text-white text-[24px] mb-10">Before</h6>
                        <Image src="/assets/skin-02.png" width={232} height={328} alt="" />
                    </div>
                </div>
            </div>
            <div className="box-shadow-green rounded-[30px] mt-32">
                <div className="flex items-center justify-center pt-12">
                    <h6 className="text-[36px] font-black text-white">
                        Doodle food
                    </h6>
                </div>
                <div className="px-24 pt-12 grid grid-rows-2 grid-cols-3 ">
                    <div className="row-span-1 flex items-start"></div>
                    <div className="row-span-1 flex items-start flex-col col-span-2">
                        <h6 className="font-bold text-white text-[24px] mb-10">After</h6>
                        <Image src="/assets/doodle-01.png" width={232} height={328} alt="" />
                    </div>
                    <div className="row-span-1 col-span-2 -translate-y-[40%]">
                        <h6 className="font-bold text-white text-[24px] mb-10">Before</h6>
                        <Image src="/assets/doodle-02.png" width={232} height={328} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-20 text-center">
            <button className="bg-[#00A256] text-white px-[61px] py-[20px] rounded-[70px] mx-auto text-[22px] font-bold	">Hire Us</button>
        </div>
      </div>
    </div>
  </div>


  <div className="overflow-hidden w-full">
    <div className="p-24 flex items-center justify-center">
        <div className="xl:max-w-[1440px] w-full">
            <h6 className="text-[60px] font-bold text-[#151515]">
                Speed is Our Speciality
            </h6>
            <div className="flex items-start justify-between mt-12">
                <div>
                    <p className="max-w-[540px] text-[24px] text-[#151515]">Do you want to increase the speed of your website? We will boost the speed of your site, so it is faster than ever before. Our Shopify page speed optimization service will make sure that your website loads quickly and smoothly for your customers worldwide. Whether you need an elaborate redesign or just want to optimize a few single pages, we provide shopify mobile speed optimization services to help you succeed.</p>
                    <div className="flex item-center justify-between mt-10">
                        <div>
                            <p className="text-[60px] font-bold text-[#00A256]">120+</p>
                            <p className="text-[24px] text-[#000]">Optimized<br />Stores</p>
                        </div>
                        <div>
                            <p className="text-[60px] font-bold text-[#00A256]">3sec</p>
                            <p className="text-[24px] text-[#000]">Avg Load<br />Time</p>
                        </div>
                        <div>
                            <p className="text-[60px] font-bold text-[#00A256]">40hrs</p>
                            <p className="text-[24px] text-[#000]">Avg Load<br />Time</p>
                        </div>
                    </div>
                    <div className="mt-20 text-left">
                        <button className="bg-[#00A256] text-white px-[61px] py-[20px] rounded-[70px] mx-auto text-[22px] font-bold	">Contact Us</button>
                    </div>
                </div>
                <div className="relative parentBox">
                    <div className="card--general02" id="card--g02-01"></div>
                    <div className="card--general02" id="card--g02-02"></div>
                    <div className="card--general02" id="card--g02-03"></div>
                  </div>
            </div>
        </div>
    </div>
</div>


<Horizontal />


<div className="overflow-hidden w-full">
    <div className="p-24 flex items-center justify-center">
        <div className="xl:max-w-[1440px] w-full">
            <h6 className="text-[60px] font-bold text-[#151515] max-w-[940px] leading-none">
                How do <span className="text-[#00A256]">Faster Websites</span> help you grow your e-commerce business?
            </h6>
            <div className="flex items-start justify-between mt-12">
                <div>
                    <div className="flex items-center gap-8">
                        <Image src="/assets/tick-black.png" height={38} width={38} alt="" />
                        <p className="text-[24px] text-[#000000]">Better User Experience</p>
                    </div>
                    <div className="flex items-center gap-8 my-10">
                        <Image src="/assets/tick-black.png" height={38} width={38} alt="" />
                        <p className="text-[24px] text-[#000]">Better Search Engine Ranking</p>
                    </div>
                    <div className="flex items-center gap-8 mb-10">
                        <Image src="/assets/tick-black.png" height={38} width={38} alt="" />
                        <p className="text-[24px] text-[#000]">More Website Conversions</p>
                    </div>
                    <div className="flex items-center gap-8 mb-10">
                        <Image src="/assets/tick-black.png" height={38} width={38} alt="" />
                        <p className="text-[24px] text-[#000]">Increase Customer Retention</p>
                    </div>
                    <div className="flex items-center gap-8 mb-10">
                        <Image src="/assets/tick-black.png" height={38} width={38} alt="" />
                        <p className="text-[24px] text-[#000]">Less Bounce Rate, More Traffic.</p>
                    </div>
                    <div className="flex items-center gap-8 mb-10">
                        <Image src="/assets/tick-black.png" height={38} width={38} alt="" />
                        <p className="text-[24px] text-[#000]">Better Usability For Mobile Traffic</p>
                    </div>
                    <div className="flex items-center gap-8 mb-10">
                        <Image src="/assets/tick-black.png" height={38} width={38} alt="" />
                        <p className="text-[24px] text-[#000]">Increase Scalability & Credibility</p>
                    </div>
                <div className="mt-20 text-left">
                    <button className="bg-[#00A256] text-white px-[61px] py-[20px] rounded-[70px] mx-auto text-[22px] font-bold	">Contact Us</button>
                </div>
                </div>
                <div className="relative parentBox">
                <div className="card--general03" id="card--g03-01"></div>
                <div className="card--general03" id="card--g03-02"></div>
                <div className="card--general03" id="card--g03-03"></div>
                </div>
            </div>
        </div>
    </div>
</div>


<MakeBrand />
<Awards />
<ReasonBusiness />
<Tech />
<Testimonials />
<OurTeam />
<News />
<Faq />

        

      
    </>
  )
}

export default Speed
