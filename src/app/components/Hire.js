import React from 'react'
import Image from 'next/image'

const Hire = () => {
  return (
    <>
     <div class="px-24 flex items-center justify-center bg-white">
        <div class="xl:max-w-[1440px] w-full">
          <section class="pt-24 w-full flex items-center justify-center">
            <h6 class="text-[100px] font-black text-[#151515] text-center">
              WE
              <span
                ><img
                  src="./images/hire-banner-01.png"
                  class="inline"
                  alt="" /></span
              >ARE PEOPLE <br />
              <span
                ><img
                  src="./images/hire-banner-star.png"
                  class="inline"
                  alt="" /></span
              >WHO CARE
              <span
                ><img src="./images/hire-banner-01.png" class="inline" alt=""
              /></span>
              <br />
              ABOUT
              <span
                ><img src="./images/hire-banner-01.png" class="inline" alt=""
              /></span>
              YOUR <br />
              <span
                ><img src="./images/hire-banner-01.png" class="inline" alt=""
              /></span>
              GROWTH
              <span
                ><img src="./images/hire-banner-star.png" class="inline" alt=""
              /></span>
            </h6>
          </section>
          <div class="mt-20 text-center">
            <button
              class="bg-[#00A256] text-white px-[61px] py-[20px] rounded-[70px] mx-auto text-[22px] font-bold"
            >
              Hire Us
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hire