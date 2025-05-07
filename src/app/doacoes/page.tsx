'use client'
import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"

const DoacoesPage = () => {
    const [showQR, setShowQR] = useState(false)
    const chavePix = "mateusnmaranhao@gmail.com"
    const [copiado, setCopiado] = useState(false)

    const copiarPix = () => {
        navigator.clipboard.writeText(chavePix)
        setCopiado(true)
        setTimeout(() => setCopiado(false), 3000)
    }

    return (
        <main className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
            <h1 className="text-2xl font-bold text-center mb-6 text-white">Como você quer doar?</h1>
            <p className="text-justify text-sm md:text-base w-full max-w-5xl mx-auto text-white mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Proin lacinia volutpat condimentum. Vivamus faucibus risus dolor,
                sit amet varius lectus hendrerit sit amet. Praesent faucibus risus
                quis quam eleifend, vel efficitur risus accumsan. Curabitur ullamcorper
                pharetra velit, at porta nunc tincidunt vitae. Etiam non arcu pharetra,
                efficitur velit eget, tincidunt lorem. Curabitur faucibus urna felis,
                id consequat velit ultricies sed. Phasellus quis tempus dui. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Duis tristique pharetra dictum. Nullam id magna cursus, consequat sem vel,
                iaculis dui. Quisque eu augue id ipsum tristique dapibus id in sapien.
                In iaculis euismod enim id dapibus.</p>

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
                    <h2 className="text-xl font-semibold text-black mb-4">Doe via PIX</h2>
                    <Image
                        src="/assets/qrcode.svg"
                        alt="QR Code PIX"
                        width={200}
                        height={200}
                        className="mx-auto"
                    />
                    <p className="text-black mt-4">Chave PIX:</p>
                    <p className="text-black font-semibold">{chavePix}</p>

                    {copiado && (
                        <span className="text-green-600 font-medium text-sm mt-2 block">
                            Chave PIX copiada!
                        </span>
                    )}

                    <button
                        onClick={copiarPix}
                        className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500 w-full"
                    >
                        Copiar chave
                    </button>
                </div>
            )}
        </main>
    )
}

export default DoacoesPage
