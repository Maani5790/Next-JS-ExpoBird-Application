import React from 'react';
import Head from 'next/head';
import Main from '../components/Main';
import Image from 'next/image';
import DevelopEcom from '../components/DevelopEcom';
import ChooseShopify from '../components/ChooseShopify';
import MobileSites from '../components/MobileSites';
import ShopifyIntegration from '../components/ShopifyIntegration';
import WhyShopify from '../components/WhyShopify';
import Apps from '../components/Apps';
import Horizontal from '../components/Horizontal';
import Clients from '../components/Clients';
import FeatureWork from '../components/FeatureWork';
import MakeBrand from '../components/MakeBrand';
import Awards from '../components/Awards';
import ReasonBusiness from '../components/ReasonBusiness';
import Tech from '../components/Tech';
import Testimonials from '../components/Testimonials';
import OurTeam from '../components/OurTeam';
import News from '../components/News';
import Faq from '../components/Faq';


export const metadata = {
    title: "Theme - Expobird",
    description: "Expobird"
}

const integration = ({title,description}) => {
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
            <Main />
            <div className="bg-[#151515] ">
                <div className="xl:max-w-[1440px] mx-auto">
                    <Image src="/assets/int-banner.png" height={1040} width={1440} className="mx-auto" alt="" />
                </div>
            </div>
            <DevelopEcom />
            <ChooseShopify />
            <MobileSites  head={'53% of mobile site visitors leave a page that takes longer than three seconds to load'} title={'So if you are looking to improve your Shopify site speed and Google core web vitals for Shopify, this service is for you.'}   />
            <ShopifyIntegration />
            <WhyShopify />
            <Apps />
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

export default integration