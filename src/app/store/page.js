import Head from 'next/head';
import React from 'react';
import Image from 'next/image';
import Script from 'next/script';
import DevelopEcom from '../components/DevelopEcom';
import ChooseShopify from '../components/ChooseShopify';
import MobileSites from '../components/MobileSites';
import Shop from '../components/Shop';
import WhyShopify from '../components/WhyShopify';
import Clients from '../components/Clients';
import FeatureWork from '../components/FeatureWork';
import MakeBrand from '../components/MakeBrand';
import Awards from '../components/Awards';
import ReasonBusiness from '../components/ReasonBusiness';
import Tech from '../components/Tech';
import OurTeam from '../components/OurTeam';
import News from '../components/News';
import Faq from '../components/Faq';
import Testimonials from '../components/Testimonials';
import Navbar from '../components/Navbar';

export const metadata = {
  title: "Store - Expobird",
  description: "Expobird"
}

const page = ({ title, description }) => {
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
        src="/script/script-2.js"
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
                  </div>
              </section>
          </div>
      </div>
      <DevelopEcom />
      <ChooseShopify />
      <MobileSites head={"53% of mobile site visitors leave a page that takes longer than three seconds to load"} title={"So if you're looking to improve your Shopify site speed and Google core web vitals for Shopify, this service is for you."} />
      <Shop />
      <WhyShopify />
      <Clients />
      <FeatureWork />
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

export default page