import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div>
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/contactos">Contactos</Link></li>
                <li><Link href="/products">Products</Link></li>
            </ul>
        </nav>
    </div>
  )
}
