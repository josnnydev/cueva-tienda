import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className="bg-gray-800 text-white p-4">
        <nav className="container mx-auto">
            <ul className="flex justify-between">
                <li className="mr-4"><Link href="/">Home</Link></li>
                <li className="mr-4"><Link href="/products">Products</Link></li>
                <li className="mr-4"><Link href="/contactos">Contactos</Link></li>
            </ul>
        </nav>
    </div>
  )
}
