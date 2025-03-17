'use client'
import Link from 'next/link'
import React from 'react'
import {usePathname} from 'next/navigation'
import { FaCartShopping } from "react-icons/fa6";

export default function Header() {
  const pathname = usePathname();
  return (
    <div className="bg-gray-800 text-white p-4">
    <nav className="flex space-x-4 bg-gray-900 p-4 text-white">
      <NavItem href="/" pathname={pathname}>Inicio</NavItem>
      <NavItem href="/products" pathname={pathname}>Productos</NavItem>
      <NavItem href="/contactos" pathname={pathname}>Contacto</NavItem>
      <div className=" ml-auto " title='soon'>
      <NavItem  href="/#" pathname={pathname}> <FaCartShopping className="text-2xl" /> </NavItem>
      </div>
    </nav>
    </div>
  )
}

function NavItem({ href, pathname, children }: { href: string, pathname: string, children: React.ReactNode }) {
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`px-3 py-2 rounded-lg ${isActive ? "bg-blue-500" : "hover:bg-gray-700"}`}
    >
      {children}
    </Link>
  );
}