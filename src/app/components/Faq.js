import React from 'react'

const Faq = () => {
  return (
    <>
    <div className="bg-[#151515]">
        <div className="xl:max-w-[1440px] mx-auto">
          <div className="p-24">
            <h6 className="text-[80px] font-bold text-white pb-10">FAQ’s</h6>
            <div className="accordion">
              <div className="accordion-item border-b border-[#656565]">
                <button id="accordion-button-1 relative" className="relative block text-left w-full text-[#656565] text-xl	py-5 " aria-expanded="false"><span className="accordion-title text-[46px] font-semibold leading-none fill_text">Can Shopify integrate with other platforms and services?</span><span className="icon" aria-hidden="true"></span></button>
                <div className="accordion-content">
                  <p className="text-[24px] text-white mb-10">Yes, Shopify integrates with various other platforms and services, such as payment gateways, shipping carriers, and marketing tools.</p>
                </div>
              </div>
              <div className="accordion-item border-b border-[#656565]">
                <button id="accordion-button-2" className="relative block text-left w-full text-[#656565] text-xl	py-5 " aria-expanded="false"><span className="accordion-title text-[46px] font-semibold leading-none fill_text">Does Shopify support multiple languages and currencies?</span><span className="icon" aria-hidden="true"></span></button>
                <div className="accordion-content">
                  <p className="text-[24px] text-white mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
                </div>
              </div>
              <div className="accordion-item border-b border-[#656565]">
                <button id="accordion-button-3" className="relative block text-left w-full text-[#656565] text-xl	py-5 " aria-expanded="false"><span className="accordion-title text-[46px] font-semibold leading-none fill_text">Can Shopify integrate with other platforms and services?</span><span className="icon" aria-hidden="true"></span></button>
                <div className="accordion-content">
                  <p className="text-[24px] text-white mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
                </div>
              </div>
              <div className="accordion-item border-b border-[#656565]">
                <button id="accordion-button-4" className="relative block text-left w-full text-[#656565] text-xl	py-5 " aria-expanded="false"><span className="accordion-title text-[46px] font-semibold leading-none fill_text">Is Shopify suitable for small businesses?</span><span className="icon" aria-hidden="true"></span></button>
                <div className="accordion-content">
                  <p className="text-[24px] text-white mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-32 pt-44 px-24">
              <div className="relative parentBox">
                <div className="card" id="card01"></div>
                <div className="card" id="card02"></div>
                <div className="card" id="card03"></div>
              </div>
              <div>
                <h6 className="lg:text-[60px] text-[80px] text-white font-black max-w-[600px] leading-none mb-10">Have An Idea? Let's Build And Scale It!</h6>
                <p className="text-[18px] text-white max-w-[300px]">Can Shopify integrate with other platforms and services?</p>
                <div className="text-right">
                  <button className="bg-[#00A256] w-[178px] h-[178px] rounded-full text-white text-[36px] leading-none dark_btn" >Let’s <br />
                    Talk</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Faq