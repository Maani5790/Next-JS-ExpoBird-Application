import React from 'react';
import Image from 'next/image';

const DevelopEcom = () => {
  return (
    <>
    <div className="overflow-hidden w-full">
                <div className="p-24 flex items-center justify-center">
                    <div className="xl:max-w-[1440px] w-full">
                        <h6 className="max-w-[1090px] text-[#151515] font-bold text-[60px] leading-none">Develop your Ecommerce Brand with Our Shopify Integration Solutions</h6>
                        <div className="grid grid-cols-2 items-start justify-between mt-32">
                            <div>
                                <p className="text-[#787878] text-[24px] font-semibold mb-12">We specialize in connecting Shopify stores to a vast range of third-party applications via our powerful Shopify API integration services.</p>
                                <p className="text-[#787878] text-[32px]">Whether it’s ERP solutions, CRM systems, payment gateways or anything else, our team of experts can integrate it all to help you get the most out of your Shopify store. What’s more, all of our cloud-based integrations are endlessly scalable, reliable, and secure.</p>
                            </div>
                            <div>
                                <Image src="/assets/mobile-animation.png" height={557} width={557} className="ml-auto" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default DevelopEcom