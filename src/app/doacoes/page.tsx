'use client'
import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"

const DoacoesPage = () => {
    const [showQR, setShowQR] = useState(false)
    const chavePix = "48.387.499/0001-68"
    const chaveCopiarColar = "00020126360014br.gov.bcb.pix0114483874990001685204000053039865802BR5910----------6007ARACAJU62070503***63042AE0"
    const [copiado, setCopiado] = useState(false)

    const copiarPix = () => {
        navigator.clipboard.writeText(chaveCopiarColar)
        setCopiado(true)
        setTimeout(() => setCopiado(false), 3000)
    }

    return (
        <main className="min-h-screen flex flex-col md:items-center">
            <section
                className="relative w-full bg-cover bg-center bg-no-repeat text-white py-16"
                style={{
                    backgroundImage: "url('/assets/nossa_historia.jpg')"
                }}
            >

                {/* Overlay roxo com opacidade */}
                <div className="absolute inset-0 bg-violet-900/70"></div>

                {/* Conteúdo centralizado */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-0 text-center">
                    <h1 className="text-6xl font-bold text-center mb-6 text-white">Faça uma doação</h1>
                    <p className="text-sm md:text-2xl leading-relaxed text-justify mb-4">
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                        Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero
                        sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
                        Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed,
                        commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros
                        ipsum rutrum orci, sagittis tempus lacus enim ac dui.
                    </p>
                </div>
            </section>

            <h1 className="text-6xl font-bold text-center mb-6 text-white mt-10">Como você deseja doar?</h1>
            <div className="flex flex-col md:flex-row gap-6">
                <button
                    onClick={() => setShowQR(true)}
                    className="cursor-pointer bg-green-600 text-white px-6 py-3 rounded hover:bg-green-500 text-lg"
                >
                    Doação via PIX
                </button>

                <Link
                    href="https://docs.google.com/forms/d/e/1FAIpQLSc350P6zdiVrEYzGY9rxxQbzlVLJGx6GmuQfEI2vHbCL5Ux_Q/viewform"
                    target="_blank"
                    className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-500 text-lg text-center"
                >
                    Outras formas de doações
                </Link>
            </div>

            {showQR && (
                <div className="mt-10 bg-white p-6 rounded-lg shadow-lg text-center max-w-sm w-full">
                    <Image
                        src="/assets/qrcode.png"
                        alt="QR Code PIX"
                        width={500}
                        height={500}
                        className="mx-auto"
                    />
                    <p className="text-black mt-4">Chave PIX:</p>
                    <p className="text-black font-semibold">{chavePix}</p>

                    {copiado && (
                        <span className="cursor-pointer text-green-600 font-medium text-sm mt-2 block">
                            Chave PIX copiada!
                        </span>
                    )}

                    <button
                        onClick={copiarPix}
                        className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500 w-full"
                    >
                        Copiar QRCode
                    </button>
                </div>
            )}
        </main>
    )
}

export default DoacoesPage
