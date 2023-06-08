"use client"
import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../components/Testimonials.css";
import { Pagination, Navigation } from "swiper";

const Testimonials = () => {
  return (
    <>
  <div className="p-24">
        <h6 className="text-[#151515] text-[80px] font-semibold max-w-[880px] leading-none">Hear What Our Clients Say About Us</h6>
      </div>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <Image src="/assets/testmonial01.png" width={1250} height={648}   alt='pic' />
        </SwiperSlide>
        <SwiperSlide>
            <Image src="/assets/testmonial01.png" width={1250} height={648}   alt='pic' />
        </SwiperSlide>
        <SwiperSlide>
            <Image src="/assets/testmonial01.png" width={1250} height={648}   alt='pic' />
        </SwiperSlide>
        <SwiperSlide>
            <Image src="/assets/testmonial01.png" width={1250} height={648}   alt='pic' />
        </SwiperSlide>
      
      </Swiper>
    </>
  )
}

export default Testimonials