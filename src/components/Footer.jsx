import { FooterCopyright } from 'flowbite-react'
import React from 'react'

export default function Footer() {
  return (

        <footer className="border-t border-white/10 mt-16">
        <div className="max-w-6xl mx-auto px-6 py-10 text-center bg-black text-yellow-400">
          © {new Date().getFullYear()} Gannah ELtonsy — All rights reserved.
        </div>
      </footer>
  )
}
