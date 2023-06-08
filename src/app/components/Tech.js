import React from 'react';
import Image from 'next/image';

const Tech = () => {
  return (
    <>
    
    <div className="h-screen relative flex justify-center items-center xl:max-w-[1440px] mx-auto">
        <div className='tech-container'>
          <div className='box box1'>
            <Image src="/assets/tech01.png" width={227} height={102} alt="" />
          </div>
          <div className='box box2'>
            <Image src="/assets/tech02.png" width={227} height={100} alt="" />
          </div>
          <div className='box box3'>
            <Image src="/assets/tech03.png" width={227} height={100} alt="" />
          </div>
          <div className='box box4'>
            <Image src="/assets/tech04.png" alt="" height={100} width={227} />
          </div>
          <div className='box box5'>
            <Image src="/assets/tech05.png" alt="" height={100} width={227} />
          </div>
          <div className='box box6'>
            <Image src="/assets/tech06.png" alt="" width={227} height={100} />
          </div>
          <div className='box box7'>
            <Image src="/assets/tech07.png" alt="" width={227} height={100} />
          </div>
          <div className='box box8'>
            <Image src="/assets/tech08.png" alt="" width={227} height={100} />
          </div>
          <div className='box box9'>
            <Image src="/assets/tech09.png" alt="" height={100} width={227} />
          </div>
        </div>
        <div className="absolute left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4">
          <h6 className="text-center text-[60px] font-bold text-[#151515] leading-none">Technology Partners</h6>
          <p className="text-center text-[#787878] text-[24px] leading-none pt-6">We are a team of design and research <br /> experts with over ten years of experience <br /> in improving businesses and peoples’ lives <br /> through smart design solutions</p>
        </div>
      </div>
    </>
  )
}

export default Tech