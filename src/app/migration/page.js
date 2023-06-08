import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import ChooseShopify from '../components/ChooseShopify';
import WhyShopify from '../components/WhyShopify';
import FeatureWork from '../components/FeatureWork';
import Horizontal from '../components/Horizontal';
import Clients from '../components/Clients';
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


            <div className="px-24 flex items-center justify-center bg-white">
            <div className="xl:max-w-[1440px] w-full">
                <section className="pt-24 w-full flex items-center justify-center">
                    <div className="text-center">
                        <h6 className="inline text-[100px] text-[#151515] font-black">NEXT GENERATI<span className="text-[#00A256]">O</span>N</h6>
                        <div className="rotating-words text-center relative">
                            <span className="block text-[100px] text-white font-black bg-[#00A256] rounded-[30px] left-1/2 -translate-x-2/4 px-5">Animation</span>
                            <span className="block text-[100px] text-white font-black bg-[#00A256] rounded-[30px] left-1/2 -translate-x-2/4 px-5">Design</span>
                            <span className="block text-[100px] text-white font-black bg-[#00A256] rounded-[30px] left-1/2 -translate-x-2/4 px-5">Environment</span>
                            <span className="block text-[100px] text-white font-black bg-[#00A256] rounded-[30px] left-1/2 -translate-x-2/4 px-5">Physics</span>
                            <span className="block text-[100px] text-white font-black bg-[#00A256] rounded-[30px] left-1/2 -translate-x-2/4 px-5">Creations</span>
                        </div>
                        <p className="max-w-[720px] mx-auto text-[24px] text-[#151515] mt-10">We turn your ideas into numbers. ExpoShopify  helps you grow your eCommerce store with a proven record of successful case studies.</p>
                        <Image src="/assets/migration-banner.png" width={1440} height={516}  className="mx-auto mt-32" alt="" />
                    </div>
                </section>
            </div>
        </div>

        <div className="bg-[#151515]">
            <div className="px-24 flex items-center justify-center">
                <div className="xl:max-w-[1440px] w-full">
                    <section className="py-24 w-full">
                        <div>
                            <h6 className="text-white text-[60px] font-bold max-w-[1100px] leading-tight">We are a Shopify Migration Agency, replatforming stores to Shopify & Shopify Plus.</h6>
                        </div>
                        <div className="flex items-center justify-center gap-[64px] mt-10">
                            <div>
                                <p className="text-[24px] text-white">Setting up a new storefront is relatively straightforward as compared to platform migration. Migrating from a legacy e-commerce system to Shopify is rather complex. You need to ensure Shopify Migration is done perfectly the first time while minimizing the impact of the process on your store’s data and ranking. At exposhopify, we assist you with seamless migration of all the web store’s products, orders, customers, data, and content, all without hassles and risk of data loss.</p>
                                <p className="text-[24px] text-white mt-10">Migrating all your web store products, content, images, order data, customer data, etc. can be an incredible hassle, especially in the hands of inexperienced developers. Our team of seasoned designers and developers brings decades of combined experience helping businesses move their e-commerce operations to Shopify from other e-commerce platforms such as Magento, WooCommerce, BigCommerce, and more.</p>
                            </div>
                            <Image src="/assets/migration-images01.png" height={557} width={557} alt="" />
                        </div>
                    </section>
                </div>
            </div>
        </div>
        
        <div className="px-24 flex items-center justify-center">
            <div className="xl:max-w-[1440px] w-full">
                <section className="py-[50px] w-full">
                    <div>
                        <h6 className="text-[60px] font-bold text-[#151515]">Our Expertise</h6>
                        <p className="text-[24px] max-w-[569px] text-[#787878] pt-[50px] pb-[100px]">When you choose to scale your business, we’re in sync. We do our best to help partners and we expect them to gain stable growth.</p>
                    </div>
                    <div className="flex items-center justify-around">
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex items-center justify-between gap-[20px]">
                                <Image src="/assets/expert-a-01.png" width={285} height={342} alt="" />
                                <Image src="/assets/expert-a-02.png" width={285} height={342} alt="" />
                            </div>
                            <p className="my-[50px] text-[#151515] text-[36px] font-bold">Magento <span className="mx-[50px]"><Image src="/assets/arrow01.svg" width={54} height={38} className="inline" alt="" /></span> Shopify</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex items-center justify-between gap-[20px]">
                                <Image src="/assets/expert-b-01.png" width={285} height={342}  alt="" />
                                <Image src="/assets/expert-b-02.png" width={285} height={342}  alt="" />
                            </div>
                            <p className="my-[50px] text-[#151515] text-[36px] font-bold">Bigcommerce <span className="mx-[50px]"><Image src="/assets/arrow01.svg" className="inline" width={54} height={38} alt="" /></span> Shopify</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-around">
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex items-center justify-between gap-[20px]">
                                <Image src="/assets/expert-c-01.png" width={285} height={342}  alt="" />
                                <Image src="/assets/expert-c-02.png" width={285} height={342}  alt="" />
                            </div>
                            <p className="my-[50px] text-[#151515] text-[36px] font-bold">Woo commerce <span className="mx-[50px]"><Image src="/assets/arrow01.svg" className="inline" width={54} height={38} alt="" /></span> Shopify</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex items-center justify-between gap-[20px]">
                                <Image src="/assets/expert-d-01.png" width={285} height={342} alt="" />
                                <Image src="/assets/expert-d-02.png" width={285} height={342} alt="" />
                            </div>
                            <p className="my-[50px] text-[#151515] text-[36px] font-bold">Other <span className="mx-[50px]"><Image src="/assets/arrow01.svg" className="inline" width={54} height={38} alt="" /></span> Shopify</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <ChooseShopify />
        <WhyShopify />
        <FeatureWork />
        <Horizontal />
        <Clients />
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