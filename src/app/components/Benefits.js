import React from 'react'

const Benefits = () => {
  return (
    <>
    <div className="bg-[#151515] h-screen">
    <div className="xl:max-w-[1440px] mx-auto px-24">
    <h6 className="text-[60px] font-bold text-white max-w-[885px] leading-none">Benefits of using Shopify Plus for businesses</h6>
    <div className="flex relative items-center justify-between">
        <div className="accordion relative max-w-[527px]">
            <div className="accordion-item py-5 border-b-2 border-white">
              <button id="accordion-button-1" aria-expanded="true"><span className="accordion-title text-white p-0 text-[24px] font-extrabold">Yes, Shopify integrates with various other</span></button>
              <div className="accordion-content p-0">
                <p className="text-white pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
              </div>
            </div>
            <div className="accordion-item py-5 border-b-2 border-white">
              <button id="accordion-button-2" aria-expanded="false"><span className="accordion-title text-white p-0 text-[24px] font-extrabold">Yes, Shopify integrates with various other</span></button>
              <div className="accordion-content p-0">
                <p className="text-white pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
              </div>
            </div>
            <div className="accordion-item py-5 border-b-2 border-white">
              <button id="accordion-button-3" aria-expanded="false"><span className="accordion-title text-white p-0 text-[24px] font-extrabold">Yes, Shopify integrates with various other</span></button>
              <div className="accordion-content p-0">
                <p className="text-white pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
              </div>
            </div>
          </div>
          <div className="relative parentBox">
            <div className="card--general" id="card--g-01"></div>
            <div className="card--general" id="card--g-02"></div>
            <div className="card--general" id="card--g-03"></div>
          </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Benefits