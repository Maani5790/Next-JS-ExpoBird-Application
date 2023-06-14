import React from 'react';
import Image from 'next/image';

const Textarea = () => {
  return (
    <>
    
    <div className="absolute z-100 mt-10 left-2/4 -translate-x-[50%] -bottom-[65%] rounded-[50px]">
        <div className="w-[1315px] rounded-[50px] overflow-hidden box-shadow-form">
            <div className="grid grid-cols-2 bg-[#FBFBFB] items-center">
                <div className="bg-[#00A255] p-10">
                    <Image src="/assets/form-image.png" width={590} height={699}  className="mx-auto" alt="" />
                </div>
                <div className="p-16">
                    <form className="space-y-[18px]">
                          <input type="text" value="" className="block w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-[24px] text-[#00A256] focus:placeholder:text-[#00A256] placeholder:text-[#A5A7A6] shadow-sm focus:border-[#00A256] focus:outline-none outline-none" placeholder="Your Name*"/>
                          <input type="text" value="" className="block w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-[24px] text-[#00A256] focus:placeholder:text-[#00A256] placeholder:text-[#A5A7A6] shadow-sm focus:border-[#00A256] focus:outline-none outline-none" placeholder="Email*"/>
                          <input type="text" value="" className="block w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-[24px] text-[#00A256] focus:placeholder:text-[#00A256] placeholder:text-[#A5A7A6] shadow-sm focus:border-[#00A256] focus:outline-none outline-none" placeholder="Phone/WhatsApp Number"/>
                          <input type="text" value="" className="block w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-[24px] text-[#00A256] focus:placeholder:text-[#00A256] placeholder:text-[#A5A7A6] shadow-sm focus:border-[#00A256] focus:outline-none outline-none" placeholder="Your store URL"/>
                          <textarea type="text" value="" rows="5" className="block w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-[24px] text-[#00A256] focus:placeholder:text-[#00A256] placeholder:text-[#A5A7A6] shadow-sm focus:border-[#00A256] focus:outline-none outline-none resize-none" placeholder="How can we help you?*"></textarea>
                          <button className="bg-[#00A256] px-[60px] py-[20px] rounded-[40px] text-white text-[22px] font-bold">Let’s Talk</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Textarea