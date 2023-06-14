import React from 'react';
import Image from 'next/image';

const WhyShopify = () => {
  return (
    <>
      <div className="bg-[#151515] pt-24">
                <div className="xl:max-w-[1440px] mx-auto px-24">
                    <div className="grid grid-cols-2 items-center justify-between">
                        <div>
                            <h6 className="text-[60px] font-bold text-white">Why Shopify Plus?</h6>
                        </div>
                        <div>
                            <p className="max-w-[525px] text-[24px] font-normal text-white ml-auto">The Shopify Plus version of the platform is for brands that want more from their eCommerce platform and to take their store to the next level. It's incredibly flexible, but still user-friendly.</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between pt-20">
                        <div>
                            <Image src="/assets/why-image01.png" width={112} height={113} alt="" />
                            <h6 className="text-[36px] text-white font-bold my-8">10 client stores</h6>
                            <p className="text-[24px] text-white max-w-[295px]">The Shopify Plus version of the platform is for brands that want more from their eCommerce</p>
                        </div>
                        <div>
                            <Image src="/assets/why-image02.png" width={114} height={105} alt="" />
                            <h6 className="text-[36px] text-white font-bold my-8 leading-tight">24/7 priority <br />support</h6>
                            <p className="text-[24px] text-white max-w-[295px]">The Shopify Plus version of the platform is for brands that want more from their eCommerce</p>
                        </div>
                        <div>
                            <Image src="/assets/why-image03.png" width={140} height={61} alt="" />
                            <h6 className="text-[36px] text-white font-bold my-8">Shopify Flow</h6>
                            <p className="text-[24px] text-white max-w-[295px]">The Shopify Plus version of the platform is for brands that want more from their eCommerce</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between py-20">
                        <div>
                            <Image src="/assets/why-image04.png" width={110} height={91} alt="" />
                            <h6 className="text-[36px] text-white font-bold my-8">Advanced Reporting</h6>
                            <p className="text-[24px] text-white max-w-[295px]">The Shopify Plus version of the platform is for brands that want more from their eCommerce</p>
                        </div>
                        <div>
                            <Image src="/assets/why-image05.png" width={145} height={64} alt="" />
                            <h6 className="text-[36px] text-white font-bold my-8">Multi-currency</h6>
                            <p className="text-[24px] text-white max-w-[295px]">The Shopify Plus version of the platform is for brands that want more from their eCommerce</p>
                        </div>
                        <div>
                            <Image src="/assets/why-image06.png" width={158} height={81} alt="" />
                            <h6 className="text-[36px] text-white font-bold my-8">Bespoke Checkout</h6>
                            <p className="text-[24px] text-white max-w-[295px]">The Shopify Plus version of the platform is for brands that want more from their eCommerce</p>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default WhyShopify