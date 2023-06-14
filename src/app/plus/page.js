import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
import ChooseShopify from '../components/ChooseShopify';
import FeatureWork from '../components/FeatureWork';
import Benefits from '../components/Benefits';
import WhyShopify from '../components/WhyShopify';
import Horizontal from '../components/Horizontal';
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
  title: "Plus - Expobird",
  description: "Expobird"
}


const plus = ({ title, description }) => {
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
        src="/script/script-3.js"
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
      <div className="bg-[#151515] pt-32">
        <div className="xl:max-w-[1440px] mx-auto">
          <Image src="/assets/plus-hero-ani.png" width={951} height={985} className="mx-auto" alt="" />
        </div>
      </div>

      <div>
        <svg className="separator separator--up bg-[#151515]" width="100%" height="100%" viewBox="0 0 100 6" preserveAspectRatio="none">
          <path
            className="separator__path path-anim"
            d="M 0 6 Q 48 6 102 6"
            data-path-to="M 0 6 Q 48 -8 102 6"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        <div className="bg-white px-24 my-16 xl:max-w-[1440px] mx-auto">
          <div>
            <h6 className="text-[60px] font-bold text-[#151515] leading-none max-w-[1200px]">We are a Shopify Plus agency launching & supporting the most ambitious ecommerce stores.</h6>
          </div>
          <div className="grid grid-cols-2 items-center my-10">
            <div>
              <p className="text-[24px] text-[#787878]">As an experienced Shopify Plus agency, our services combine creative excellence with the very best technical solutions. We work with merchants in both full custom Shopify Plus store build projects but also supporting pre-existing stores with our monthly memberships.</p>
              <p className="text-[24px] text-[#787878] pt-5">Our experience spans from globally renowned brands to start up ventures - all leveraging the power of Shopify Plus.</p>
              <p className="text-[24px] text-[#787878] py-5">Our agency is built upon the principles of unparalleled creativity, cutting-edge technology, and growth-centricity. Whether you are looking to upgrade or migrate to Shopify Plus, get in touch today to discuss a custom Shopify Plus store build or support with your current ecommerce strategy.</p>
              <p className="text-[24px] text-[#787878]">Thinking of Shopify? Click here to learn why you should choose Shopify.</p>
            </div>
            <div>
              <Image src="/assets/mobile-animation.png" height={557} width={557} className="ml-auto" alt="" />
            </div>
          </div>
        </div>
      </div>

      <ChooseShopify />
      <FeatureWork />
      <Benefits />
      <WhyShopify />

      <div className="xl:max-w-[1440px] mx-auto px-24 py-16">
        <div>
          <h6 className="text-[60px] font-bold text-[#151515] max-w-[821px] leading-none">How is Shopify Plus Superior to the Competition?</h6>
          <p className="text-[24px] text-[#787878] max-w-[569px] py-10">When you choose to scale your business, we’re in sync. We do our best to help partners and we expect them to gain stable growth.</p>
          <div className="flex items-center justify-between gap-8">
            <div className="bg-[#151515] rounded-[30px] pl-12 pr-16 pt-12 pb-48 max-w-[594px]">
              <h6 className="text-white text-[48px] font-semibold pb-8">Other Platforms</h6>
              <div className="py-5">
                <div className="inline-flex gap-4 items-center">
                  <Image src="/assets/tick-white.png" height={38} width={38} alt="" />
                  <p className="text-white text-[24px]">Typically have longer development times.</p>
                </div>
              </div>
              <div className="pb-5">
                <div className="inline-flex gap-4 items-center">
                  <Image src="/assets/tick-white.png" height={38} width={38} alt="" />
                  <p className="text-white text-[24px]">Require on-going management from developers.</p>
                </div>
              </div>
              <div className="pb-5">
                <div className="inline-flex gap-4 items-center">
                  <Image src="/assets/tick-white.png" height={38} width={38} alt="" />
                  <p className="text-white text-[24px]">Generally come with inflexible custom integrations.</p>
                </div>
              </div>
              <div className="pb-5">
                <div className="inline-flex gap-4 items-center">
                  <Image src="/assets/tick-white.png" height={38} width={38} alt="" />
                  <p className="text-white text-[24px]">Often require dedicated third-party hosting, which drives up costs.</p>
                </div>
              </div>
              <div className="pb-5">
                <div className="inline-flex gap-4 items-center">
                  <Image src="/assets/tick-white.png" height={38} width={38} alt="" />
                  <p className="text-white text-[24px]">Tend to include lengthy set up and licensing periods.</p>
                </div>
              </div>
              <div className="relative mt-32">
                <Image src="/assets/other-platform01.png" width={397} height={274} className="ml-auto relative z-30" alt="" />
                <Image src="/assets/other-platform02.png" width={407} height={258} className="mx-auto absolute top-0 z-20 translate-x-[40px] translate-y-[30px] -rotate-[4.83deg]" alt="" />
                <Image src="/assets/other-platform03.png" width={359} height={245} className="mx-auto absolute top-0 z-10 translate-x-[20px] translate-y-[60px] -rotate-[12.35deg]" alt="" />
              </div>
            </div>
            <div className="bg-[#5FEAA9] rounded-[30px] pl-12 pr-16 pt-12 pb-20 max-w-[594px]">
              <h6 className="text-[#151515] text-[48px] font-semibold pb-8">Shopify plus <span className="text-[#00A256]">+</span></h6>
              <div className="py-5">
                <div className="inline-flex gap-4 items-center">
                  <Image src="/assets/tick-black.png" height={38} width={38} alt="" />
                  <p className="text-[#151515] text-[24px]">Impressively fast development times.</p>
                </div>
              </div>
              <div className="pb-5">
                <div className="inline-flex gap-4 items-center">
                  <Image src="/assets/tick-black.png" height={38} width={38} alt="" />
                  <p className="text-[#151515] text-[24px]">Standardized APIs that are extremely easy to use.</p>
                </div>
              </div>
              <div className="pb-5">
                <div className="inline-flex gap-4 items-center">
                  <Image src="/assets/tick-black.png" height={38} width={38} alt="" />
                  <p className="text-[#151515] text-[24px]">Extensive Shopify app store to enhance ecommerce functionality.</p>
                </div>
              </div>
              <div className="pb-5">
                <div className="inline-flex gap-4 items-center">
                  <Image src="/assets/tick-black.png" height={38} width={38} alt="" />
                  <p className="text-[#151515] text-[24px]">A reliable, robust, and 100% cloud-based on-demand service.</p>
                </div>
              </div>
              <div className="pb-5">
                <div className="inline-flex gap-4 items-center">
                  <Image src="/assets/tick-black.png" height={38} width={38} alt="" />
                  <p className="text-[#151515] text-[24px]">Day-to-day management of stores doesn’t require specialist help.</p>
                </div>
              </div>
              <div className="relative mt-32">
                <Image src="/assets/shopify-plus01.png" height={421} width={224} className="mx-auto relative z-30" alt="" />
                <Image src="/assets/shopify-plus02.png" width={191} height={349} className="mx-auto absolute top-0 z-20 translate-x-[0px] -translate-y-[20px] -rotate-[11.8deg]" alt="" />
                <Image src="/assets/shopify-plus03.png" width={219} height={349} className="mx-auto absolute top-0 z-10 translate-x-[240px] translate-y-[60px] rotate-[14.46deg]" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Horizontal />
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

export default plus