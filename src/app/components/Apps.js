import React from 'react';
import Image from 'next/image';

const Apps = () => {
  return (
    <>
     <div className="overflow-hidden w-full">
                <div className="p-24 flex items-center justify-center">
                    <div className="xl:max-w-[1440px] w-full">
                        <h6 className="text-[#151515] font-bold text-[60px] leading-none">5,000+ Apps, Infinite<br />Possibilities</h6>
                        <div className="grid grid-cols-2 items-center">
                            <div>
                                <p className="text-[32px] text-[#787878] max-w-[487px] my-16">We specialize in connecting Shopify stores to a vast range of third-party applications via our powerful Shopify API integration services.</p>
                                <button className="bg-[#00A256] px-[60px] py-[20px] rounded-[40px] text-white text-[22px] font-bold">Let’s Talk</button>
                            </div>
                            <div className="">
                                <div className="grid grid-cols-5 place-items-center gap-y-8 items-center">
                                    <div>
                                        <Image src="/assets/app01.png" width={60} height={58} alt="" />
                                    </div>
                                    <div>
                                        <Image src="/assets/app02.png" width={60} height={58} alt="" />
                                    </div>
                                    <div>
                                        <Image src="/assets/app03.png" width={59} height={58} alt="" />
                                    </div>
                                    <div>
                                        <Image src="/assets/app04.png" width={60} height={58} alt="" />
                                    </div>
                                    <div>
                                        <Image src="/assets/app05.png" width={85} height={64} alt="" />
                                    </div>
                                    <div>
                                        <Image src="/assets/app06.png" width={102} height={67} alt="" />
                                    </div>
                                    <div>
                                        <Image src="/assets/app07.png" width={101} height={67} alt="" />
                                    </div>
                                    <div>
                                        <Image src="/assets/app08.png" width={105} height={67} alt="" />
                                    </div>
                                    <div>
                                        <Image src="/assets/app09.png" width={101} height={67} alt="" />
                                    </div>
                                    <div>
                                        <Image src="/assets/app10.png" width={100} height={65} alt="" />
                                    </div>
                                    <div>
                                        <Image src="/assets/app11.png" width={102} height={74} alt="" />
                                    </div>
                                    <div>
                                        <Image src="/assets/app12.png" width={115} height={74} alt="" />
                                    </div>
                                    <div>
                                        <Image src="/assets/app13.png" width={103} height={74} alt="" />
                                    </div>
                                    <div>
                                        <Image src="/assets/app14.png" width={115} height={74} alt="" />
                                    </div>
                                    <div>
                                        <Image src="/assets/app15.png" width={98} height={62} alt="" />
                                    </div>
                                    <div>
                                        <Image src="/assets/app16.png" width={107} height={69} alt="" />
                                    </div>
                                    <div>
                                        <Image src="/assets/app17.png" width={110} height={69} alt="" />
                                    </div>
                                    <div>
                                        <Image src="/assets/app18.png" width={102} height={69} alt="" />
                                    </div>
                                    <div>
                                        <Image src="/assets/app19.png" width={107} height={69} alt="" />
                                    </div>
                                    <div>
                                        <Image src="/assets/app20.png" width={119} height={76} alt="" />
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

export default Apps