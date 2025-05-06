'use client'
import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

const Navbar: React.FC = () => {
    const pathname = usePathname()
    const [showDropdown, setShowDropdown] = useState(false)
    const [showQR, setShowQR] = useState(false)
    const [copiado, setCopiado] = useState(false)

    const chavePix = "mateusnmaranhao@gmail.com"

    const copiarPix = () => {
        navigator.clipboard.writeText(chavePix)
        setCopiado(true)
        setTimeout(() => setCopiado(false), 3000)
    }

    return (
        <>
            <nav className="relative z-10 text-white px-4 py-4 sm:px-6 md:px-10">
                <div className="absolute inset-0 z-0 opacity-90 bg-cover bg-center"
                    style={{ backgroundImage: "url('/assets/nav_footer.png')" }}></div>

                <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                        <Link href="/" className="cursor-pointer flex items-center gap-2">
                            <Image src="/assets/logo_white.png" alt="Logo" width={40} height={40} />
                            <span className="font-bold text-lg">LionsBertaLuz</span>
                        </Link>
                    </div>

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
                            className="hover:underline">
                            Seja um patrocinador
                        </Link>
                        <Link
                            href="https://docs.google.com/forms/d/e/1FAIpQLSfLzCArNqUttGioSjpviNorxYdniSwuTUXzWNR28URp2WBPMQ/viewform"
                            target="_blank"
                            className="bg-blue-800 px-4 py-2 rounded text-white text-center hover:bg-blue-700 transition">
                            Junte-se a Nós
                        </Link>

                        <div className="relative">
                            <button
                                onClick={() => setShowDropdown(!showDropdown)}
                                className="bg-yellow-400 px-4 py-2 rounded text-black text-center hover:bg-yellow-300 transition"
                            >
                                Doações ▾
                            </button>

                            {showDropdown && (
                                <div className="absolute mt-2 right-0 bg-white text-black rounded shadow-lg z-20 min-w-[200px] overflow-hidden">
                                    <Link
                                        href="https://docs.google.com/forms/d/e/1FAIpQLSc350P6zdiVrEYzGY9rxxQbzlVLJGx6GmuQfEI2vHbCL5Ux_Q/viewform"
                                        target="_blank"
                                        className="block px-4 py-2 hover:bg-gray-100">
                                        Formulário de Doação
                                    </Link>
                                    <button
                                        onClick={() => { setShowQR(true); setShowDropdown(false); }}
                                        className="cursor-pointer w-full text-left px-4 py-2 hover:bg-gray-100">
                                        Doação via PIX
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            {showQR && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg text-center max-w-xs">
                        <h2 className="text-xl font-bold mb-4 text-black">Doe via PIX</h2>
                        <Image
                            src="/assets/qrcode.svg"
                            alt="QR Code PIX"
                            className="ms-4"
                            width={200}
                            height={200}
                        />
                        <p className="text-black mt-4">Chave PIX:</p>
                        <p className="text-black font-semibold">{chavePix}</p>
                        <div className="flex flex-col items-center gap-3 mt-4">
                            {copiado && (
                                <span className="text-green-600 font-medium text-sm">
                                    Chave PIX copiada!
                                </span>
                            )}
                            <button
                                onClick={copiarPix}
                                className="cursor-pointer px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500 w-full"
                            >
                                Copiar chave
                            </button>
                            <button
                                onClick={() => setShowQR(false)}
                                className="cursor-pointer px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 w-full"
                            >
                                Fechar
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
