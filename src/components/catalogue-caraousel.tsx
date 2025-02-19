"use client"

import { useRef } from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Swiper as SwiperType } from 'swiper/types';
import { Autoplay } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function ProductCarousel({ catalogue = [], className = "", title = "" }: { catalogue: string[], className: string, title: string }) {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <Swiper
      className={`${className} w-[360px] h-[640px] md:w-[540px] md:h-[960px] `}
      modules={[Autoplay]}
      slidesPerView={1}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      onSwiper={(swiper) => {
        swiperRef.current = swiper
      }}
    >
      {catalogue.map((item, i) => (
        <SwiperSlide key={i}>
          <Image
            src={item}
            alt={'Katalog-' + title + (i + 1)}
            fill
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
