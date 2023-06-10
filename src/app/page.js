import React from 'react';
import Script from 'next/script';
import Head from 'next/head';
import Image from 'next/image';
import Clients from './components/Clients';
import Faq from './components/Faq';
import News from './components/News';
import OurTeam from './components/OurTeam';
import Tech from './components/Tech';
import FeatureWork from './components/FeatureWork';
import Awards from './components/Awards';
import ReasonBusiness from './components/ReasonBusiness';
import CodePenImg from './components/CodePenImg';
import ChooseShopify from './components/ChooseShopify';
// import Hero from './components/Hero';
import Testimonials from './components/Testimonials';

export const metadata = {
  title: "Home - Expobird",
  description: "Expobird"
}

const Home = ({ title, description }) => {
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


<div className="px-24 flex items-center justify-center relative">
      <div className="w-full">
        <section className="py-24 w-full flex items-center justify-center">
          <div className="text-center">
            <h6 className="inline text-[100px] text-white font-black">
              NEXT GENERATI<span className="text-[#00A256]">O</span>N
            </h6>
            <div className="rotating-words mx-20  text-center relative">
              <span className="block text-[100px] text-white font-black bg-[#00A256] rounded-[30px] left-1/2 -translate-x-2/4 px-5">
                Animation
              </span>
              <span className="block text-[100px] text-white font-black bg-[#00A256] rounded-[30px] left-1/2 -translate-x-2/4 px-5">
                Design
              </span>
              <span className="block text-[100px] text-white font-black bg-[#00A256] rounded-[30px] left-1/2 -translate-x-2/4 px-5">
                Environment
              </span>
              <span className="block text-[100px] text-white font-black bg-[#00A256] rounded-[30px] left-1/2 -translate-x-2/4 px-5">
                Physics
              </span>
              <span className="block text-[100px] text-white font-black bg-[#00A256] rounded-[30px] left-1/2 -translate-x-2/4 px-5">
                Creations
              </span>
            </div>
            <p className="max-w-[720px] mx-auto text-[24px] text-white mt-10">
            We turn your ideas into numbers.ExpoShopify helps you grow your eCommerce store with a proven record of successful case studies.
            </p>
            <div className="max-w-[720px]  mx-auto text-[24px] text-white mt-10">
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

    

//       <Hero />
      <div class="hero-background-animation xl:max-w-full mx-auto">
        <article class="wrapper01">
          <div class="marquee01 marquee--vertical01 marquee--reverse01">
              <div className="marquee__group01">
                <Image src="/assets/marq01.png" width={719} height={484} alt="" />
                <Image src="/assets/marq02.png" width={719} height={484} alt="" />
                <Image src="/assets/marq01.png" width={719} height={484} alt="" />
                <Image src="/assets/marq02.png" width={719} height={484} alt="" />
                <Image src="/assets/marq01.png" width={719} height={484} alt="" />
                <Image src="/assets/marq02.png" width={719} height={484} alt="" />
                <Image src="/assets/marq01.png" width={719} height={484} alt="" />
                <Image src="/assets/marq02.png" width={719} height={484} alt="" />
              </div>
              <div aria-hidden="true" className="marquee__group01">
                <Image src="/assets/marq01.png" width={719} height={484} alt="" />
                <Image src="/assets/marq02.png" width={719} height={484} alt="" />
                <Image src="/assets/marq01.png" width={719} height={484} alt="" />
                <Image src="/assets/marq02.png" width={719} height={484} alt="" />
                <Image src="/assets/marq01.png" width={719} height={484} alt="" />
                <Image src="/assets/marq02.png" width={719} height={484} alt="" />
                <Image src="/assets/marq01.png" width={719} height={484}alt="" />
                <Image src="/assets/marq02.png" width={719} height={484} alt="" />
              </div>
            </div>
  
          <div className="marquee01 marquee--vertical01">
            <div className="marquee__group01">
              <Image src="/assets/marq03.png" width={719} height={484}  alt="" />
              <Image src="/assets/marq04.png" width={719} height={484} alt="" />
              <Image src="/assets/marq03.png" width={719} height={484} alt="" />
              <Image src="/assets/marq04.png" width={719} height={484} alt="" />
              <Image src="/assets/marq03.png" width={719} height={484} alt="" />
              <Image src="/assets/marq04.png" width={719} height={484} alt="" />
              <Image src="/assets/marq03.png" width={719} height={484} alt="" />
              <Image src="/assets/marq04.png" width={719} height={484} alt="" />
            </div>
            <div aria-hidden="true" className="marquee__group01">
              <Image src="/assets/marq03.png" width={719} height={484} alt="" />
              <Image src="/assets/marq04.png" width={719} height={484} alt="" />
              <Image src="/assets/marq03.png" width={719} height={484} alt="" />
              <Image src="/assets/marq04.png" width={719} height={484} alt="" />
              <Image src="/assets/marq03.png" width={719} height={484} alt="" />
              <Image src="/assets/marq04.png" width={719} height={484} alt="" />
              <Image src="/assets/marq03.png" width={719} height={484} alt="" />
              <Image src="/assets/marq04.png" width={719} height={484} alt="" />
            </div>
          </div>
        
          <div className="marquee01 marquee--vertical01 marquee--reverse01">
            <div className="marquee__group01">
              <Image src="/assets/marq05.png" width={719} height={484} alt="" />
              <Image src="/assets/marq06.png" width={719} height={484} alt="" />
              <Image src="/assets/marq05.png" width={719} height={484} alt="" />
              <Image src="/assets/marq06.png" width={719} height={484} alt="" />
              <Image src="/assets/marq05.png" width={719} height={484} alt="" />
              <Image src="/assets/marq06.png" width={719} height={484} alt="" />
              <Image src="/assets/marq05.png" width={719} height={484} alt="" />
              <Image src="/assets/marq06.png" width={719} height={484} alt="" />
            </div>
            <div aria-hidden="true" className="marquee__group01">
              <Image src="/assets/marq05.png" width={719} height={484} alt=""  />
              <Image src="/assets/marq06.png" width={719} height={484} alt="" />
              <Image src="/assets/marq05.png" width={719} height={484} alt="" />
              <Image src="/assets/marq06.png" width={719} height={484} alt="" />
              <Image src="/assets/marq05.png" width={719} height={484} alt="" />
              <Image src="/assets/marq06.png" width={719} height={484} alt="" />
              <Image src="/assets/marq05.png" width={719} height={484} alt="" />
              <Image src="/assets/marq06.png" width={719} height={484} alt=""  />
            </div>
          </div>
        </article>
      </div>
  
          
        
    
      <div className="xl:max-w-[1440px] mx-auto">
        <div className="p-24">
          <h6 className="text-[60px] text-[#151515] max-w-[900px] leading-none font-bold pb-24"> We’re never alone. <span><Image className="inline" src="/assets/bicep.svg" width={60} height={52} alt="" /></span>That’s our strength. We drive brands through eCommerce.</h6>
          <div className="cursor-play">
            <Image src="/assets/video-laptop.png" width={1245} height={929} className="mx-auto" alt="" />
          </div>
        </div>
      </div>
      <ChooseShopify />
      <FeatureWork />
      <div className="xl:max-w-[1440px] mx-auto">
        <div className="p-24">
          <h6 className="text-[60px] text-[#151515] max-w-[1100px] leading-none font-bold pb-24">The most comprehensive revenue platform to effortlessly manage,refine, and scale your go-to-market strategy to generate opportunities.</h6>
          <p className="text-[18px] text-[#787878] max-w-[450px] ml-auto mr-96 pb-12">We are a team of design and research experts with over ten years of experience in improving businesses and peoples’ lives through smart design solutions We are a team of design and research experts with over ten years of experience in improving businesses and peoples’ lives through smart design solutions</p>
          <div className="text-center">
            <button className="bg-[#00A256] text-white w-[178px] h-[178px] rounded-full mx-auto text-[36px] leading-tight">Dont’t <br /> Push</button>
          </div>
        </div>
      </div>
      <Clients />
      <CodePenImg />
      <div className="bg-[#151515] mb-40">
        <div className="xl:max-w-[1440px] mx-auto">
          <Awards />
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
export default Home
