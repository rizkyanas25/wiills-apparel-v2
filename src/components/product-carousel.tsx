"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import { Swiper as SwiperType } from 'swiper/types';
import { Autoplay } from "swiper/modules"
import { products } from "@/constants/products"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export function ProductCarousel() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="w-[calc(100vw-4rem)] md:max-w-2xl mx-auto mt-12">
      <div className="flex flex-col gap-10 justify-center items-center rounded-xl bg-white/30 backdrop-blur-lg shadow-lg border border-white/20 p-6 md:p-8">
        <Swiper
          className="w-[calc(100vw-8rem)] md:w-[600px] h-[220px] md:h-[248px]"
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={2} // Show 2 slides on mobile
          breakpoints={{
            1024: { slidesPerView: 4 }, // Show 3 slides on desktop
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <Link href={product.url} target="_blank" rel="noopener noreferrer">
                <div className="flex flex-col items-center">
                  <div className="relative w-24 h-32 md:w-32 md:h-40 mb-2">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-xs md:text-sm text-center font-medium line-clamp-3">{product.name}</h3>
                  <p className="text-xs md:text-sm font-bold mt-1">Rp {product.price.toLocaleString()}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <Link
          href="https://shopee.co.id/willsapparel?categoryId=100637&entryPoint=ShopByPDP&itemId=26567468431"
          target="_blank"
          className="flex flex-col items-center text-gray-600 hover:text-gray-900 transition-colors duration-300"
        >
          <div className="py-2 px-4 bg-[#E64129] rounded-lg flex items-center justify-center hover:border-gray-400 transition-colors duration-300">
            <div className="text-center">
              <span className="text-l text-white">Lihat Semua</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
