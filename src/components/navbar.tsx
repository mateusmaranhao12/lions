'use client'
import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

const Navbar: React.FC = () => {
    const pathname = usePathname()

    return (
        <>
            <nav className="relative z-10 text-white px-4 py-4 sm:px-6 md:px-10">
                {/* Fundo com imagem */}
                <div className="absolute inset-0 z-0 opacity-90 bg-cover bg-center"
                    style={{ backgroundImage: "url('/assets/nav_footer.png')" }}></div>

                <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    {/* Logo */}
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                        <Link href="/" className="cursor-pointer flex items-center gap-2">
                            <Image src="/assets/logo_white.png" alt="Logo" width={40} height={40} />
                            <span className="font-bold text-lg">LionsBertaLuz</span>
                        </Link>
                    </div>

                    {/* Navegação */}
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                        <Link href="/" className={`hover:underline ${pathname === "/" ? "font-bold text-yellow-400" : ""}`}>
                            Home
                        </Link>
                        <Link href="/causas" className={`hover:underline ${pathname === "/causas" ? "font-bold text-yellow-400" : ""}`}>
                            Nossas Causas
                        </Link>
                        <Link
                            href="https://docs.google.com/forms/d/e/1FAIpQLSc2KutRU0XBKP5pLBK0yHD9ZIBCxPEOXZO3vlTFkIJWre3cFA/viewform"
                            target="_blank"
                            className="hover:underline"
                        >
                            Seja um patrocinador
                        </Link>
                        <Link
                            href="https://docs.google.com/forms/d/e/1FAIpQLSfLzCArNqUttGioSjpviNorxYdniSwuTUXzWNR28URp2WBPMQ/viewform"
                            target="_blank"
                            className="bg-blue-800 px-4 py-2 rounded text-white text-center hover:bg-blue-700 transition"
                        >
                            Junte-se a Nós
                        </Link>
                        <Link
                            href="/doacoes"
                            className="bg-yellow-400 px-4 py-2 rounded text-black text-center hover:bg-yellow-300 transition"
                        >
                            Doações
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
