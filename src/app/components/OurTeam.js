import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const OurTeam = () => {
  return (
    <>
    <div className="pt-24 bg-[#151515]">
        <div className="xl:max-w-[1440px] mx-auto">
          <div className="grid grid-cols-2 gap-32 px-24 items-center">
            <div>
              <h6 className="text-[60px] text-white font-semibold leading-none mb-10">Your goals is our focus in Shopify ecommerce development</h6>
            </div>
            <div>
              <p className="text-[24px] text-white max-w-[445px] ml-auto">We are a team of design and research experts with over ten years of experience in improving businesses and peoples’ lives through smart design solutions</p>
            </div>
          </div>
          <Link href="/" className="image-holder">
            <Image src="/assets/dev01.png" width={375} height={359} className="image-one my-24 rounded-[30px]" alt="" />
            <Image src="/assets/dev02.png" width={375} height={360} className="image-two my-24 rounded-[30px]" alt="" />
            <Image src="/assets/dev03.png" width={375} height={352} className="image-three my-24 rounded-[30px]" alt="" />
            <Image src="/assets/dev04.png" width={375} height={360} className="image-four my-24 rounded-[30px]" alt="" />
            <button className="absolute left-2/4 top-2/4 -translate-y-1/2	-translate-x-1/2	text-white w-[284px] h-[284px] bg-[#00A256] rounded-full text-[45px] font-bold leading-tight arrow">Meet Our Team</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default OurTeam