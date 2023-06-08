import React from 'react';
import Image from 'next/image';

const ReasonBusiness = () => {
  return (
    <>
      <div className="bg-[#151515] grid grid-cols-3 border-t border-[#FFF]">
            <div className="pl-24 border-r border-[#BDBDBD] py-24">
              <span className="text-[80px] text-[#00A256] font-bold leading-none">5 Reasons</span>
              <h6 className="text-[80px] text-white font-bold max-w-[400px] leading-none">Shopify Means Business</h6>
            </div>
            <div className="border-r border-[#BDBDBD]">
              <div className="border-b border-[#BDBDBD] px-10 py-20">
                <Image src="/assets/reason03.svg" height={80} width={77} alt="" />
                <p className="text-white text-[18px] font-bold py-5">Hardware, Software and Services, working together as one</p>
                <p className="text-white text-[18px]">You make a change on Magento and it reflects on your ERP. Your team can work side by side to extend their services. Readily available APIs or custom ones can transform your workflow to full automation. This way you don’t have to keep an eye on the integrated part of your system</p>
              </div>
              <div className="border-b border-[#BDBDBD] px-10 py-20">
                <Image src="/assets/reason04.svg" height={80} width={77} alt="" />
                <p className="text-white text-[18px] font-bold py-5">Anything is Possible With Custom
                  Shopify Development</p>
                <p className="text-white text-[18px]">You make a change on Magento and it reflects on your ERP. Your team can work side by side to extend their services. Readily available APIs or custom ones can transform your workflow to full automation. This way you don’t have to keep an eye on the integrated part of your system</p>
              </div>
              <div className="px-10 py-20">
                <Image src="/assets/reason05.svg" height={80} width={77} alt="" />
                <p className="text-white text-[18px] font-bold py-5">Shopify is Love !!!</p>
                <p className="text-white text-[18px]">You make a change on Magento and it reflects on your ERP. Your team can work side by side to extend their services. Readily available APIs or custom ones can transform your workflow to full automation. This way you don’t have to keep an eye on the integrated part of your system</p>
              </div>
            </div>
            <div className="pr-24">
              <div className="border-b border-[#BDBDBD] px-10 py-20 mt-20">
                <Image src="/assets/reason02.svg" height={95} width={94} alt="" />
                <p className="text-white text-[18px] font-bold py-5">Powerful Store. Robust Revenue</p>
                <p className="text-white text-[18px]">You make a change on Magento and it reflects on your ERP. Your team can work side by side to extend their services. Readily available APIs or custom ones can transform your workflow to full automation. This way you don’t have to keep an eye on the integrated part of your system</p>
              </div>
              <div className="border-b border-[#BDBDBD] px-10 py-20">
                <Image src="/assets/reason01.svg" height={95} width={94} alt="" />
                <p className="text-white text-[18px] font-bold py-5">Impact of Shopify Across Industires</p>
                <p className="text-white text-[18px]">You make a change on Magento and it reflects on your ERP. Your team can work side by side to extend their services. Readily available APIs or custom ones can transform your workflow to full automation. This way you don’t have to keep an eye on the integrated part of your system</p>
              </div>
            </div>
          </div>
    </>
  )
}

export default ReasonBusiness