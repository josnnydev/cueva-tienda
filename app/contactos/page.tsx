import Link from 'next/link'
import Image from 'next/image' 
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

export default function Contactos() {
  return (
    <div className="flex flex-col items-center justify-center  ">

      <div className="mb-4 mt-4 ">
        
        
        <Image src="/images/whatsapp.webp" alt="Whatsapp" width={300} height={50} />
      </div>
      <div className="flex flex-col gap-4 items-center justify-center mb-4">
      <strong>Redes Sociales</strong>
        <Link href="https://wa.me/message/P3LU5C3LG4JPA1" target="_blank"><FaWhatsapp className="text-4xl text-green-600 hover:text-black" /></Link>
        <Link href="https://www.instagram.com/cueva_boutique?igsh=YzljYTk1ODg3Zg==" target="_blank"> <IoLogoInstagram className='text-6xl text-red-500 hover:text-yellow-500' />  </Link>
        <Link href="https://www.facebook.com/marketplace/profile/61561084689839/?ref=permalink&mibextid=dXMIcH" target="_blank"> <FaFacebook className='text-6xl text-blue-500 hover:text-red-500'/></Link>
        <Link href="https://vm.tiktok.com/ZSMyPPb9A/" target="_blank"> <FaTiktok className='text-6xl text-black-500   hover:text-pink-500  '/> </Link>

      </div>

    
      <div className="flex flex-col gap-4 items-center justify-center mb-4 mt-4">
      <strong>Ubicación</strong>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d945.9886918312812!2d-69.89639963008881!3d18.48570796629716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf893b69456ec5%3A0x9ebf9f1a88bd1d1c!2scueva%20boutique!5e0!3m2!1ses-419!2sdo!4v1742130483512!5m2!1ses-419!2sdo" width="410" height="200" style={{border:0}} allowFullScreen loading="lazy"referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}
