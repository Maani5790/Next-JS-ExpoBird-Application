import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import ChooseShopify from '../components/ChooseShopify';
import MobileSites from '../components/MobileSites';
import ShopifyIntegration from '../components/ShopifyIntegration';
import Horizontal from '../components/Horizontal';
import Clients from '../components/Clients';
import FeatureWork from '../components/FeatureWork';
import MakeBrand from '../components/MakeBrand';
import Tech from '../components/Tech';
import OurTeam from '../components/OurTeam';
import News from '../components/News';
import Faq from '../components/Faq';
import DevelopEcom from '../components/DevelopEcom';
import Apps from '../components/Apps';
import ReasonBusiness from '../components/ReasonBusiness';
import WhyShopify from '../components/WhyShopify';
import Testimonials from '../components/Testimonials';
import Navbar from '../components/Navbar';

export const metadata = {
  title: "Theme - Expobird",
  description: "Expobird"
}


const Theme = ({ title, description }) => {
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

      <Navbar />


<div className="px-24 flex items-center justify-center relative bg-[#151515]">
          <div className="w-full">
              <section className="py-24 w-full flex items-center justify-center">
                  <div className="text-center">
                      <h6 className="inline text-[100px] text-white font-black">NEXT GENERATI<span className="text-[#00A256]">O</span>N</h6>
                      <div className="rotating-words text-center relative">
                          <span className="block text-[100px] text-white font-black bg-[#00A256] rounded-[30px] left-1/2 -translate-x-2/4 px-5">Animation</span>
                          <span className="block text-[100px] text-white font-black bg-[#00A256] rounded-[30px] left-1/2 -translate-x-2/4 px-5">Design</span>
                          <span className="block text-[100px] text-white font-black bg-[#00A256] rounded-[30px] left-1/2 -translate-x-2/4 px-5">Environment</span>
                          <span className="block text-[100px] text-white font-black bg-[#00A256] rounded-[30px] left-1/2 -translate-x-2/4 px-5">Physics</span>
                          <span className="block text-[100px] text-white font-black bg-[#00A256] rounded-[30px] left-1/2 -translate-x-2/4 px-5">Creations</span>
                      </div>
                      <p className="max-w-[720px] mx-auto text-[24px] text-white mt-10">We turn your ideas into numbers. ExpoShopify  helps you grow your eCommerce store with a proven record of successful case studies.</p>
                      <div className="max-w-[720px] mx-auto mt-10">
                        <div className="flex items-center justify-between">
                        <Image src="/assets/award01.svg" height={25} width={150} alt="" />
                  <Image src="/assets/award02.svg" height={25} width={89} alt="" />
                  <Image src="/assets/award03.svg" height={35} width={119} alt="" />
                  <Image src="/assets/award04.svg" height={31} width={124} alt="" />
                        </div>
                      </div>
                      <Image src="/assets/theme-banner.png" width={1440} height={888} className="mx-auto mt-10" alt="" />

                  </div>
              </section>
          </div>
      </div>


      <DevelopEcom    />

      
      <ChooseShopify />
      <MobileSites  head={'53% of mobile site visitors leave a page that takes longer than three seconds to load'} title={'So if you are looking to improve your Shopify site speed and Google core web vitals for Shopify, this service is for you.'}   />
      <ShopifyIntegration />
      <WhyShopify />


      <Apps />
      <Horizontal />
      <Clients />
      <FeatureWork />
      <MakeBrand />

      <div className="bg-[#151515] mb-40">
        <div className="xl:max-w-[1440px] mx-auto">
          <div className="p-24">
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
          <ReasonBusiness />
        </div>
      </div>

      <Tech />
      <Testimonials />
      <OurTeam />
      <News />
      <Faq />



    </>
  )
}

export default Theme