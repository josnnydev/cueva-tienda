import Link from 'next/link'
import Image from 'next/image' 

export default function Contactos() {
  return (
    <div className="flex flex-col items-center justify-center  ">

      <div className="mb-4">
        
        <Link href="https://wa.me/message/P3LU5C3LG4JPA1" target="_blank">Whatsapp</Link>
        <Image src="#" alt="Whatsapp" width={32} height={32} />
      </div>
      <div className="mb-4">
        Redes Sociales
      </div>

    <h2>Ubicación</h2>
      <div className="  ">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d945.9886918312812!2d-69.89639963008881!3d18.48570796629716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf893b69456ec5%3A0x9ebf9f1a88bd1d1c!2scueva%20boutique!5e0!3m2!1ses-419!2sdo!4v1742130483512!5m2!1ses-419!2sdo" width="600" height="200" style={{border:0}} allowFullScreen loading="lazy"referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}
