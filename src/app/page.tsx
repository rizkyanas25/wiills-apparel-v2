import Image from "next/image"
import Link from "next/link"
import { Shirt, Facebook, Instagram, Mail } from "lucide-react"
import { ProductCarousel } from "@/components/product-carousel"

import { ShopeeIcon, TiktokIcon, WhatsAppIcon } from '@/components/icons'

export default function Page() {

  const renderLinks = (links: { label: string, icon: React.ReactNode, href: string, noBlank?: boolean }[]) => (
    <div className="w-full max-w-md space-y-3">
      {links.map(({ label, icon, href, noBlank }) => (
        <Link
          key={label}
          href={href}
          target={noBlank ? '_parent': "_blank"}
          className="flex items-center justify-between text-[#E64129] bg-white/30 backdrop-blur-lg shadow-lg border border-white/20 rounded-full px-4 py-3 hover:opacity-90 transition-all hover:scale-[1.05] duration-300"
        >
          <span className="text-white font-bold">{label}</span>
          {icon}
        </Link>
      ))}
    </div>
  );

  const renderSocialMediaIcons = (socmeds: {icon: React.ReactNode, href: string}[]) => (
    <div className="flex justify-center space-x-6 text-white font-bold">
      {socmeds.map(({ icon, href }) => (
          <Link key={href} href={href} target="_blank" className="border border-transparent rounded-full p-2 bg-transparent hover:bg-white hover:bg-white/20 hover:backdrop-blur-lg hover:text-[#E64129] transition-all duration-300 hover:opacity-90 hover:scale-110">
            {icon}
          </Link>
      ))}
    </div>
  );

  return (
    <main className="min-h-screen bg-[url('/assets/images/bg.webp')] bg-cover bg-center bg-no-repeat flex flex-col items-center">
      <div className="absolute w-[100vw] h-[100vh] flex flex-col items-center overflow-x-hidden overflow-y-scroll px-8 py-8 space-y-8">
        <div className="text-center space-y-2">
          <Image
            src="/assets/images/wills-logo-white.webp"
            alt="Wills Logo"
            width={100}
            height={100}
            className="mx-auto"
          />
          <h1 className="text-3xl lg:text-5xl font-bold text-white">WILLS APPAREL</h1>
          <p className="text-white italic text-xl lg:text-3xl"><span className="text-[#FFFFFF] font-bold">#</span>CustomJerseyAntiRibet</p>
        </div>

        {/* Navigation Links */}
        {renderLinks([
          { label: "SPESIFIKASI CUSTOM JERSEY", icon: <Shirt />, href: "/spesifikasi", noBlank: true },
          { label: "OFFICIAL TIKTOK SHOP", icon: <TiktokIcon className="text-[#E64129] h-[24px] w-[24px]"/>, href: "https://www.tiktok.com/@willsapparel.id?_t=ZS-8txkXUof16t&_r=1" },
          { label: "OFFICIAL SHOPEE", icon: <ShopeeIcon className="text-[#E64129] h-[24px] w-[24px]"/>, href: "https://shopee.co.id/willsapparel?categoryId=100637&entryPoint=ShopByPDP&itemId=26567468431" },
          { label: "ADMIN DESAIN DAN PEMESANAN", icon: <WhatsAppIcon className="text-[#E64129] h-[24px] w-[24px]"/>, href: "https://api.whatsapp.com/send?phone=6285888077334&text=Halo%20Wills%2C%20Info%20Pricelist%20Masing-Masing%C2%A0Type." },
          { label: "ADMIN PRODUKSI DAN KOMPLAIN", icon: <WhatsAppIcon className="text-[#E64129] h-[24px] w-[24px]"/>, href: "https://api.whatsapp.com/send?phone=6285607125828" },
          {
            label: "ADMIN SEWA JERSEY",
            icon: <WhatsAppIcon className="text-[#E64129] h-[24px] w-[24px]" />,
            href: `https://api.whatsapp.com/send?phone=6285777996670&text=${encodeURIComponent("Haloo Admin Sewa Jersey, Apakah stok ready untuk Tanggal : …… ( Isi dengan Tgl Sewa )")}`
          }
        ])}

        {/* Social Media Icons */}
        {
          renderSocialMediaIcons([
            { icon: <Facebook />, href: "https://www.facebook.com/profile.php?id=100076669931596" },
            { icon: <Instagram />, href: "https://www.instagram.com/willsapparel.id/" },
            { icon: <Mail />, href: "mailto:willsapparel.id@gmail.com" },
          ])
        }

        {/* Product Carousel */}
        <ProductCarousel />
      </div>
    </main>
  )
}