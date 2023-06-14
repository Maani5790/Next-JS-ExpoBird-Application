import React from 'react'
import Image from 'next/image'

const Clients = () => {
  return (
    <>
     <div className="xl:max-w-[1440px] mx-auto">
        <div className="p-24">
          <h6 className="text-[#151515] text-[80px] font-black">See Our Clients</h6>
        </div>
        <article className="wrapper py-16">
          <div className="marquee">
            <div className="marquee__group">
              <Image src="/assets/client01.png" height={211} width={274} alt="" />
              <Image src="/assets/client02.png" height={211} width={274} alt="" />
              <Image src="/assets/client03.png" height={211} width={274} alt="" />
              <Image src="/assets/client04.png" height={211} width={274} alt="" />
              <Image src="/assets/client05.png" height={211} width={274} alt="" />
            </div>

            <div aria-hidden="true" className="marquee__group">
              <Image src="/assets/client01.png" height={211} width={274} alt="" />
              <Image src="/assets/client02.png" height={211} width={274} alt="" />
              <Image src="/assets/client03.png" height={211} width={274} alt="" />
              <Image src="/assets/client04.png" height={211} width={274} alt="" />
              <Image src="/assets/client05.png" height={211} width={274} alt="" />
            </div>
          </div>

          <div className="marquee marquee--reverse">
            <div className="marquee__group">
              <Image src="/assets/client01.png" height={211} width={274} alt="" />
              <Image src="/assets/client02.png" height={211} width={274} alt="" />
              <Image src="/assets/client03.png" height={211} width={274} alt="" />
              <Image src="/assets/client04.png" height={211} width={274} alt="" />
              <Image src="/assets/client05.png" height={211} width={274} alt="" />
            </div>

            <div aria-hidden="true" className="marquee__group">
              <Image src="/assets/client01.png" height={211} width={274} alt="" />
              <Image src="/assets/client02.png" height={211} width={274} alt="" />
              <Image src="/assets/client03.png" height={211} width={274} alt="" />
              <Image src="/assets/client04.png" height={211} width={274} alt="" />
              <Image src="/assets/client05.png" height={211} width={274} alt="" />
            </div>
          </div>
        </article>
      </div>
    </>
  )
}

export default Clients