import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Navbar2 from '../components/Navbar2';
import Image from 'next/image';
import ChooseShopify from '../components/ChooseShopify';
import MobileSites from '../components/MobileSites';
import Horizontal from '../components/Horizontal';
import FeatureWork from '../components/FeatureWork';
import MakeBrand from '../components/MakeBrand';
import Awards from '../components/Awards';
import Tech from '../components/Tech';
import Testimonials from '../components/Testimonials';
import OurTeam from '../components/OurTeam';
import News from '../components/News';
import Faq from '../components/Faq';
import ReasonBusiness from '../components/ReasonBusiness';

export const metadata = {
    title: "Hire Us - Expobird",
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
      <Navbar2 />
      <div className="px-24 flex items-center justify-center bg-white">
        <div className="xl:max-w-[1440px] w-full">
          <section className="pt-24 w-full flex items-center justify-center">
            <h6 className="text-[100px] font-black text-[#151515] text-center">
              WE
              <span
                ><Image
                  src="/assets/hire-banner-01.png"
                  className="inline" width={215} height={94}
                  alt="" /></span
              >ARE PEOPLE <br />
              <span
                ><Image
                  src="/assets/hire-banner-star.png"
                  className="inline" height={118} width={118}
                  alt="" /></span
              >WHO CARE
              <span
                ><Image src="/assets/hire-banner-01.png" width={215} height={94} className="inline" alt=""
              /></span>
              <br />
              ABOUT
              <span
                ><Image src="/assets/hire-banner-01.png" width={215} height={94} className="inline" alt=""
              /></span>
              YOUR <br />
              <span
                ><Image src="/assets/hire-banner-01.png" width={215} height={94} className="inline" alt=""
              /></span>
              GROWTH
              <span
                ><Image src="/assets/hire-banner-star.png" height={118} width={118} className="inline" alt=""
              /></span>
            </h6>
          </section>
          <div className="mt-20 text-center">
            <button
              className="bg-[#00A256] text-white px-[61px] py-[20px] rounded-[70px] mx-auto text-[22px] font-bold"
            >
              Hire Us
            </button>
          </div>
        </div>
      </div>

      <div className="marquee-hire my-24">
        <ul className="marquee-content">
          <li>
            <div className="person">
              <div className="person__container">
                  <Image className="person__img" src="/assets/person.png" width={298} height={547} alt="" />
              </div>
          </div>
          </li>
          <li>
            <div className="person">
              <div className="person__container">
                  <Image className="person__img" src="/assets/person.png" width={298} height={547} alt="" />
              </div>
          </div>
          </li>
          <li>
            <div className="person">
              <div className="person__container">
                  <Image className="person__img" src="/assets/person.png" width={298} height={547} alt=""/>
              </div>
          </div>
          </li>
          <li>
            <div className="person">
              <div className="person__container">
               
                  <Image className="person__img" src="/assets/person.png" width={298} height={547} alt="" />
              </div>
          </div>
          </li>
        </ul>
      </div>

      
      <div className="p-24 flex items-center justify-center bg-[#151515]">
        <div className="xl:max-w-[1440px] w-full">
          <h6 className="text-[60px] font-bold text-white leading-none">
            Our Developers Are Master <br />
            Of Their Craft
          </h6>
          <div className="flex items-center justify-between mt-12">
            <div>
              <p className="max-w-[569px] text-[24px] text-white">
                Our Shopify retainer includes access to our Shopify development
                team. As an accredited Shopify experts, our Shopify developers
                are highly experienced and can launch the very best features for
                your customers. We have experience in both developing bespoke
                features unique to your business as well as integrating the best
                technology from our Shopify app partners. Whether it's bug
                fixes, tweaks, adding subscriptions, creating custom apps, or
                rolling out your latest ideas, our expert Shopify developers
                have you covered.
              </p>
              <div className="mt-20 text-left">
                <button
                  className="bg-[#00A256] text-white px-[61px] py-[20px] rounded-[70px] mx-auto text-[22px] font-bold"
                >
                  Let's Talk
                </button>
              </div>
            </div>
            <div className="relative">
              <Image src="/assets/hire-developer.png" width={608} height={768} alt="" />
            </div>
          </div>
        </div>
      </div>
      <ChooseShopify />

      <div className="overflow-hidden w-full">
      <div className="p-24 flex items-center justify-center bg-[#151515]">
        <div className="xl:max-w-[1440px] w-full">
          <h6 className="text-[60px] font-bold text-white leading-none">
            Best Time to Hire<br/>Shopify Developer
          </h6>
          <div className="flex items-center justify-between mt-12">
            <div>
              <p className="max-w-[569px] text-[24px] text-white">
                Our Shopify retainer includes access to our Shopify development
                team. As an accredited Shopify experts, our Shopify developers
                are highly experienced and can launch the very best features for
                your customers. We have experience in both developing bespoke
                features unique to your business as well as integrating the best
                technology from our Shopify app partners. Whether it's bug
                fixes, tweaks, adding subscriptions, creating custom apps, or
                rolling out your latest ideas, our expert Shopify developers
                have you covered.
              </p>
              <div className="mt-20 text-left">
                <button
                  className="bg-[#00A256] text-white px-[61px] py-[20px] rounded-[70px] mx-auto text-[22px] font-bold"
                >
                  Let's Talk
                </button>
              </div>
            </div>
            <div className="relative">
              <Image src="/assets/hire-developer02.png" width={570} height={774} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <MobileSites  head={'53% of mobile site visitors leave a page that takes longer than three seconds to load'} title={'So if you are looking to improve your Shopify site speed and Google core web vitals for Shopify, this service is for you.'}   />
    <Horizontal />
    <div className="overflow-hidden w-full">
      <div className="p-24 flex items-center justify-center bg-white">
        <div className="xl:max-w-[1440px] w-full">
          <h6 className="text-[60px] font-bold text-[#151515] leading-none">
            How is Shopify Plus Superior <br />
            to the Competition?
          </h6>
          <p className="max-w-[569px] text-[#787878] text-[24px] my-10">When you choose to scale your business, we’re in sync. We do our best to help partners and we expect them to gain stable growth.</p>
          <div className="grid grid-cols-3 gap-12">
            <div className="bg-[#151515] rounded-[19px] px-[30px] py-[50px] my-[50px]">
              <p className="font-semibold text-white text-[31px]">Hire Shopify  Developer On An Hourly Basis</p>
              <p className="text-white text-[15px] mb-10 mt-5">Starting from</p>
              <p className="text-white text-[70px] font-black">$18<span className="font-bold text-[42px]">/hourly</span></p>
              <div className="flex items-center gap-8 mt-10">
                <Image src="/assets/tick-white.png" height={38} width={38} alt="" />
                <p className="text-[24px] text-white">Typically have longer development times.</p>
              </div>
              <div className="flex items-center gap-8 my-10">
              <Image src="/assets/tick-white.png" height={38} width={38} alt="" />
                <p className="text-[24px] text-white">
                  Require on-going management from developers.
                </p>
              </div>
              <div className="mt-16 text-center">
                <button
                  className="bg-[#00A256] text-white px-[61px] py-[20px] rounded-[70px] mx-auto text-[22px] font-bold"
                >
                  Contact Us
                </button>
              </div>
            </div>
            <div className="bg-[#00A256] rounded-[19px] px-[30px] pt-[100px] pb-[50px] relative overflow-hidden">
              <span className="absolute top-0 -rotate-[32.99deg] -left-[65px] font-semibold text-[21px] text-white bg-[#004FEE] px-16 py-3 overflow-hidden">Popular</span>
              <p className="font-semibold text-white text-[31px]">Hire Shopify  Developer On An Hourly Basis</p>
              <p className="text-white text-[15px] mb-10 mt-5">Starting from</p>
              <p className="text-white text-[70px] font-black">$18<span className="font-bold text-[42px]">/hourly</span></p>
              <div className="flex items-center gap-8 mt-10">
              <Image src="/assets/tick-white.png" height={38} width={38} alt="" />
                <p className="text-[24px] text-white">Typically have longer development times.</p>
              </div>
              <div className="flex items-center gap-8 my-10">
              <Image src="/assets/tick-white.png" height={38} width={38} alt="" />
                <p className="text-[24px] text-white">
                  Require on-going management from developers.
                </p>
              </div>
              <div className="mt-16 text-center">
                <button
                  className="bg-[#151515] text-white px-[61px] py-[20px] rounded-[70px] mx-auto text-[22px] font-bold"
                >
                  Contact Us
                </button>
              </div>
            </div>
            <div className="bg-[#151515] rounded-[19px] px-[30px] py-[50px] my-[50px]">
              <p className="font-semibold text-white text-[31px]">Hire Shopify  Developer On An Hourly Basis</p>
              <p className="text-white text-[15px] mb-10 mt-5">Starting from</p>
              <p className="text-white text-[70px] font-black">$18<span className="font-bold text-[42px]">/hourly</span></p>
              <div className="flex items-center gap-8 mt-10">
              <Image src="/assets/tick-white.png" height={38} width={38} alt="" />
                <p className="text-[24px] text-white">Typically have longer development times.</p>
              </div>
              <div className="flex items-center gap-8 my-10">
              <Image src="/assets/tick-white.png" height={38} width={38} alt="" />
                <p className="text-[24px] text-white">
                  Require on-going management from developers.
                </p>
              </div>
              <div className="mt-16 text-center">
                <button
                  className="bg-[#00A256] text-white px-[61px] py-[20px] rounded-[70px] mx-auto text-[22px] font-bold"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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