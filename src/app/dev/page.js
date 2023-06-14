import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
import Navbar from '../components/Navbar';
import Hero2 from '../components/Hero2';
import ChooseShopify from '../components/ChooseShopify';
import FeatureWork from '../components/FeatureWork';
import Horizontal from '../components/Horizontal';
import Awards from '../components/Awards';
import ReasonBusiness from '../components/ReasonBusiness';
import Tech from '../components/Tech';
import Testimonials from '../components/Testimonials';
import OurTeam from '../components/OurTeam';
import News from '../components/News';
import Faq from '../components/Faq';

export const metadata = {
    title: "Development - Expobird",
    description: "Expobird"
}


const page = ({title,description}) => {
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
      <Hero2 />
      <div className="bg-[#151515] xl:max-w-[1440px] mx-auto py-32">
    <div className="relative px-24">
        <Image src="/assets/ipad-bg.png" width={1090} height={529} className="mx-auto" alt=""/>
    </div>
    <div className="mt-8 px-24">
        <h6 className="text-white font-bold text-[60px] text-center">See The Big Picture</h6>
        <p className="text-white text-[24px] max-w-[840px] mx-auto">We are a team of design and research experts with over ten years of experience in improving businesses and peoples’ lives through smart design solutions</p>
    </div>
    <div className="relative py-12 px-24">
        <Image src="/assets/ipad-bg-inner.png" width={1199} height={625} className="mx-auto" alt=""/>
    </div>
    <div className="grid grid-cols-2 px-24 py-12">
        <div>
            <h6 className="text-[60px] font-semibold text-white leading-tight">Customize your store exactly the way you want</h6>
            <p className="text-[24px] text-white mt-12">Shopify is great for customization. What if your business model offers some unique processes and no other ready-made e-commerce can host them? We can help you adapt your store to the greatest challenges.</p>
        </div>
        <div>
            <Image src="/assets/animation-img.png" width={505} height={482} className="ml-auto" alt=""/>
        </div>
    </div>

  </div>
  <ChooseShopify />
  <FeatureWork />
  <Horizontal />
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