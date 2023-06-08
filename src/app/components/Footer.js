import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
    <div className="bg-[#00A256]">
      <div className="xl:max-w-[1440px] mx-auto">
        <div className="px-24">
          <div className="grid grid-cols-3">
            <div className="border-r-2 border-[#FFFFFF] py-24 ">
              <h6 className="text-[80px] text-white font-black leading-none">Made On Earth With Heart</h6>
              <p className="text-white text-[24px] py-20">New York Division One World Trade Center New York, NY 10007</p>
              <div className="flex items-center">
                <Link href="/">
                  <Image src="/assets/media-link01.svg" height={0} width={0} className="pr-10" alt="" />
                </Link>
                <Link href="/">
                  <Image src="/assets/media-link02.svg" height={0} width={0} className="pr-10" alt="" />
                </Link>
                <Link href="/">
                  <Image src="/assets/media-link03.svg" height={0} width={0} className="pr-10" alt="" />
                </Link>
                <Link href="/">
                  <Image src="/assets/media-link04.svg" height={0} width={0} className="" alt="" />
                </Link>
              </div>
            </div>
            <div className="col-span-2 py-24">
              <div className="border-b-2 border-[#FFFFFF] ">
                <h6 className="text-[46px] text-white font-semibold leading-none pl-16">About us</h6>
                <p className="text-[24px] text-white max-w-[500px] my-10 pl-16">We are a team of design and research experts with over ten years of experience in improving businesses and peoples’ lives through smart design solutions</p>
                <p className="footer-svg pl-44 relative text-[36px] text-white leading-none my-10 font-semibold">Send <br /> Proposal</p>
              </div>
              <div>
                <h6 className="text-[46px] text-white font-semibold leading-none pl-16 py-20">Services</h6>
                <h6 className="text-[24px] text-white font-medium leading-none pl-16 pb-5">Shopify Web Development</h6>
                <div className="grid grid-cols-3 pl-16">
                  <Link href="/" className="underline underline-offset-1 text-white py-2 text-[18px]">Shopify Ui Ux Design</Link>
                  <Link href="/" className="underline underline-offset-1 text-white py-2 text-[18px]">Shopify Theme Development</Link>
                  <Link href="/" className="underline underline-offset-1 text-white py-2 text-[18px]">Shopify customization</Link>
                  <Link href="/" className="underline underline-offset-1 text-white py-2 text-[18px]">Shopify setup and Configuration</Link>
                  <Link href="/" className="underline underline-offset-1 text-white py-2 text-[18px]">Shopify optimization</Link>
                  <Link href="/" className="underline underline-offset-1 text-white py-2 text-[18px]">Shopify Speed</Link>
                  <Link href="/" className="underline underline-offset-1 text-white py-2 text-[18px]">Shopify Conversation Rate Optimization</Link>
                </div>
                <h6 className="text-[24px] text-white font-medium leading-none pl-16 py-5">Shopify Migration & Custom Development</h6>
                <div className="grid grid-cols-3 pl-16">
                  <Link href="/" className="underline underline-offset-1 text-white py-2 text-[18px] ">Migration to Shopify</Link>
                  <Link href="/" className="underline underline-offset-1 text-white py-2 text-[18px] ">Woocommerce to Shopify</Link>
                  <Link href="/" className="underline underline-offset-1 text-white py-2 text-[18px] ">Wordpress to Shopify </Link>
                  <Link href="/" className="underline underline-offset-1 text-white py-2 text-[18px] ">Magento to Shopify</Link>
                  <Link href="/" className="underline underline-offset-1 text-white py-2 text-[18px] ">Big commerce to Shopify</Link>
                  <Link href="/" className="underline underline-offset-1 text-white py-2 text-[18px] ">3rd Party Shopify Integration</Link>
                  <Link href="/" className="underline underline-offset-1 text-white py-2 text-[18px] ">Shopify Plus Partner </Link>
                </div>
                <h6 className="text-[24px] text-white font-medium leading-none pl-16 py-5">Shopify Migration & Custom Development</h6>
                <div className="grid grid-cols-3 pl-16">
                  <Link href="/" className="underline underline-offset-1 text-white py-2 text-[18px]">Shopify Mantainence</Link>
                  <Link href="/" className="underline underline-offset-1 text-white py-2 text-[18px]">Shopify Virtual Assistance</Link>
                </div>
                <div className="grid grid-cols-2 pl-16">
                  <h6 className="text-[46px] text-white font-semibold leading-none py-12">Call:</h6>
                  <h6 className="text-[46px] text-white font-semibold leading-none py-12">Email:</h6>
    
                  <label className="underline underline-offset-1 text-white py-2 cursor-pointer text-[18px]">+1 724-353-8843</label>
                  <label className="underline underline-offset-1 text-white py-2 cursor-pointer text-[18px]">sales@exposhopify.com</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Footer