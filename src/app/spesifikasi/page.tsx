import Image from "next/image"
import Link from "next/link"

import { WhatsAppIcon } from "@/components/icons"

import CatalogueCarausel from '@/components/catalogue-caraousel'

export default function Page() {

  const Catalogue = {
    JerseyKitTitle: '/assets/images/catalogue/Katalog wills-1.jpg',
    JerseyKit: [
      '/assets/images/catalogue/Katalog wills-2.jpg',
      '/assets/images/catalogue/Katalog wills-3.jpg',
      '/assets/images/catalogue/Katalog wills-4.jpg',
      '/assets/images/catalogue/Katalog wills-5.jpg',
    ],
    JerseyBasketTitle: '/assets/images/catalogue/Katalog wills-6.jpg',
    JerseyBasket: [
      '/assets/images/catalogue/Katalog wills-7.jpg',
      '/assets/images/catalogue/Katalog wills-8.jpg',
      '/assets/images/catalogue/Katalog wills-9.jpg',
    ],
    JerseyVoliTitle: '/assets/images/catalogue/Katalog wills-10.jpg',
    JerseyVoli: [
      '/assets/images/catalogue/Katalog wills-11.jpg',
      '/assets/images/catalogue/Katalog wills-12.jpg',
      '/assets/images/catalogue/Katalog wills-13.jpg',
    ],
    Additional: [
      '/assets/images/catalogue/Katalog wills-14.jpg',
      '/assets/images/catalogue/Katalog wills-15.jpg',
      '/assets/images/catalogue/Katalog wills-16.jpg',
      '/assets/images/catalogue/Katalog wills-17.jpg',
      '/assets/images/catalogue/Katalog wills-18.jpg',
      '/assets/images/catalogue/Katalog wills-19.jpg',
      '/assets/images/catalogue/Katalog wills-20.jpg',
      '/assets/images/catalogue/Katalog wills-21.jpg',
      '/assets/images/catalogue/Katalog wills-22.jpg',
      '/assets/images/catalogue/Katalog wills-23.jpg',
    ]
  }

  return (
    <main className="min-h-screen bg-[url('/assets/images/bg.webp')] bg-cover bg-center bg-no-repeat flex flex-col items-center">
      {/* Logo and Tagline */}
      <div className="absolute w-[100vw] h-[100vh] flex flex-col items-center overflow-x-hidden overflow-y-scroll px-8 py-8">
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
        <Image
          src={Catalogue.JerseyKitTitle}
          alt="Wills Jersey Kit"
          width={540}
          height={960}
          className="md:hidden flex drop-shadow-2xl"
        />
        <div className="flex gap-[16px] items-center justify-center w-[100vw] h-[640px] md:mw-[540px] md:h-[960px] mb-[16px]">
          <div className="hidden md:flex w-[360px] h-[640px] md:w-[540px] md:h-[960px]">
            <Image
              src={Catalogue.JerseyKitTitle}
              alt="Wills Jersey Kit"
              width={540}
              height={960}
              className="drop-shadow-2xl"
            />
          </div>
          <CatalogueCarausel className="!m-0 drop-shadow-2xl" title="Jersey Kit" catalogue={Catalogue.JerseyKit}/>
        </div>
        <Image
          src={Catalogue.JerseyBasketTitle}
          alt="Wills Jersey Kit"
          width={540}
          height={960}
          className="md:hidden flex drop-shadow-2xl"
        />
        <div className="flex gap-[16px] items-center justify-center w-[100vw] h-[640px] md:mw-[540px] md:h-[960px] mb-[16px]">
          <div className="hidden md:flex w-[360px] h-[640px] md:w-[540px] md:h-[960px]">
            <Image
              src={Catalogue.JerseyBasketTitle}
              alt="Wills Jersey Kit"
              width={540}
              height={960}
              className="drop-shadow-2xl"
            />
          </div>
          <CatalogueCarausel className="!m-0 drop-shadow-2xl" title="Jersey Basktet" catalogue={Catalogue.JerseyBasket}/>
        </div>
        <Image
          src={Catalogue.JerseyVoliTitle}
          alt="Wills Jersey Kit"
          width={540}
          height={960}
          className="md:hidden flex drop-shadow-2xl"
        />
        <div className="flex gap-[16px] items-center justify-center w-[100vw] h-[640px] md:mw-[540px] md:h-[960px] mb-[16px]">
          <div className="hidden md:flex w-[360px] h-[640px] md:w-[540px] md:h-[960px]">
            <Image
              src={Catalogue.JerseyVoliTitle}
              alt="Wills Jersey Kit"
              width={540}
              height={960}
              className="drop-shadow-2xl"
            />
          </div>
          <CatalogueCarausel className="!m-0 drop-shadow-2xl" title="Jersey Voli" catalogue={Catalogue.JerseyVoli}/>
        </div>

        <div>
          {
            Catalogue.Additional.map(el => (
              <Image
                key={el}
                src={el}
                alt="Wills Additional"
                width={540}
                height={960}
                className="drop-shadow-2xl mb-[16px]"
              />
            ))
          }
        </div>
        
        <Link
          href={"https://api.whatsapp.com/send?phone=6285888077334&text=Halo%20Wills%2C%20Info%20Pricelist%20Masing-Masing%C2%A0Type."}
          target={"_blank"}
          className="flex w-full m-o mt-[16px] items-center gap-[10px] justify-between text-[#E64129] bg-white/30 backdrop-blur-lg shadow-lg border border-white/20 rounded-full px-4 py-3 hover:opacity-90 transition-all hover:scale-[1.05] duration-300"
        >
          <span className="text-white font-bold">ADMIN DESAIN DAN PEMESANAN</span>
          <WhatsAppIcon className="text-[#E64129] h-[24px] w-[24px]"/>
        </Link>
        <Link
          href={"/"}
          className="w-full m-o mt-[16px] flex justify-center text-[#E64129] bg-white/30 backdrop-blur-lg shadow-lg border border-white/20 rounded-full px-6 py-3 hover:opacity-90 transition-all hover:scale-[1.05] duration-300"
        >
          <span className="text-white font-bold">Kembali</span>
        </Link>
      </div>
    </main>
  )
}