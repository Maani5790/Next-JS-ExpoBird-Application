import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';
import Navbar from '../components/Navbar';
import DevelopEcom from '../components/DevelopEcom';
import ShopifyIntegration from '../components/ShopifyIntegration';
import WhyShopify from '../components/WhyShopify';
import MobileSites from '../components/MobileSites';
import Horizontal from '../components/Horizontal';
import Clients from '../components/Clients';
import FeatureWork from '../components/FeatureWork';
import MakeBrand from '../components/MakeBrand';
import Awards from '../components/Awards';
import ReasonBusiness from '../components/ReasonBusiness';
import Testimonials from '../components/Testimonials';
import OurTeam from '../components/OurTeam';
import News from '../components/News';
import Faq from '../components/Faq';

export const metadata = {
    title: "Costume - Expobird",
    description: "Expobird"
}


const Costume = ({title,description}) => {
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
        src="/script/script-6.js"
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
                      <Image src="/assets/custom-banner.png" width={1440} height={1140} className="mx-auto" alt="" />

                  </div>
              </section>
          </div>
      </div>
      <DevelopEcom />
      <ShopifyIntegration />
      <WhyShopify />
      <div className="bg-[#00A256]">
    <div className="px-24 flex items-center justify-center">
        <div className="xl:max-w-[1440px] w-full">
            <section className="py-24 w-full">
                <div className="text-center">
                    <h6 className="text-white text-[60px] font-bold leading-tight">Does Your Store Need a Custom <br />
                        Shopify App?</h6>
                </div>
                <div className="flex items-center justify-center mt-10">
                    <div className="text-center">
                        <p className="text-[24px] text-white max-w-[920px] mx-auto">Attract more customers, experience higher conversions, and boost profitability through a custom Shopify app. Discuss your needs with our development experts now.</p>
                        <button className="my-10 bg-white text-[#00A256] px-[60px] py-[20px] rounded-[70px] font-bold">Get Free Audit Report</button>
                    </div>
                </div>
            </section>
        </div>
    </div>
    </div>
    {/* <Horizontal /> */}
    <Clients />
    <FeatureWork />
    <MakeBrand />
    <Awards />
    <ReasonBusiness />
    <Clients />
    <Testimonials />
    <OurTeam />
    <News />
    <Faq />
     
      
    </>
  )
}

export default Costume