import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import Main from "../components/Main"
import DevelopEcom from '../components/DevelopEcom';
import ChooseShopify from '../components/ChooseShopify';
import MobileSites from '../components/MobileSites';
import ShopifyIntegration from '../components/ShopifyIntegration';
import WhyShopify from '../components/WhyShopify';
import Horizontal from '../components/Horizontal';
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

export const metadata = {
    title: "Seo - Expobird",
    description: "Expobird"
  }

const Seo = ({title,description}) => {
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


      <div className="overflow-hidden w-full bg-[#151515]">

<div className="px-24 flex items-center justify-center">
  <div className="xl:max-w-[1440px] w-full">
    <section className="pt-24 w-full flex items-center  justify-center">
      <div className="text-center">
        



      <div className="bg-[#151515] px-24 flex items-center justify-center relative">
        <div className="xl:max-w-[1440px] w-full">
          <section className="py-24 w-full flex items-center justify-center">
            <div className="text-center">
              <h6 className="inline text-[100px] text-white font-black">NEXT GENERATI<span className="text-[#00A256]">O</span>N</h6>
              <div className="rotating-words ml-20   text-center relative">
                <span className="block text-[100px] text-white font-black bg-[#00A256] rounded-[30px] left-36 -translate-x-2/4 px-5">Creations</span>
                <span className="block text-[100px] text-white font-black bg-[#00A256] rounded-[30px] left-36 -translate-x-2/4 px-5">Physics</span>
                <span className="block text-[100px] text-white font-black bg-[#00A256] rounded-[30px] left-30 -translate-x-2/4 px-5">Environment</span>
                <span className="block text-[100px] text-white font-black bg-[#00A256] rounded-[30px] left-36 -translate-x-2/4 px-5">Design</span>
                <span className="block text-[100px] text-white font-black bg-[#00A256] rounded-[30px] -left-30 -translate-x-2/4 px-5">Animation</span>
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



        <Image src="/assets/seo-banner.png" width={1148} height={775} className="mx-auto" alt="" />
      </div>
    </section>
  </div>
</div>
</div>
<DevelopEcom />
<ChooseShopify />
<MobileSites   head={"95% of web experiences start with a search engine."} title={"So you've chosen Shopify as your ecommerce platform to power your business, but now you need more customers to find you. Google powers over 85% of all web searches and has an algorithm to rank websites. SEO (Search Engine Optimisation) is a strategy to improve the rankings, targetting keywords that your customers are searching to allow you to gain more traffic to your products to increase sales, leads, ROI, revenue & conversions from your store."} />
<ShopifyIntegration />
<WhyShopify />

<div className="overflow-hidden w-full">
    <div className="p-24 flex items-center justify-center">
        <div className="xl:max-w-[1440px] w-full">
            <h6 className="max-w-[800px] text-[#151515] font-bold text-[60px] leading-none">We are a Shopify Specialist SEO Agency</h6>
            <div className="grid grid-cols-2 items-start justify-between mt-32">
                <div>
                    <p className="text-[#787878] text-[24px]">A keyword is a word or phrase that best describes a page or business. The keyword that a webpage focuses upon, not only should be relevant to the content of the page but also should consider the search trends of your customers. By understanding the searches that your customers use, allows us to devise a strategy to help you improve your rankings on search terms that will give you more exposure to potential customers. We'll also consider additional data where possible such as PPC performance. Keyword research is at the very core of our Shopify specialist SEO strategies, we'll use leading tools to compare search volumes, ranking difficulty and even keywords your competitors rank on too. Our strategies are built with commercial insight to stand us apart from other agencies.</p>
                </div>
                <div>
                    <Image src="/assets/mobile-animation.png" height={557} width={557} className="ml-auto" alt="" />
                </div>
            </div>
        </div>  
    </div>
</div>  

<Horizontal />
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

export default Seo