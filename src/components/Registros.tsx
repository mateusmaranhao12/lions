'use client'
import Image from "next/image"

export default function NossosPatrocinadores() {

    const registros = [
        { src: "/assets/imagem1.png", alt: "Registro 1" },
        { src: "/assets/imagem1.png", alt: "Registro 2" },
        { src: "/assets/imagem1.png", alt: "Registro 3" },
    ]

    return (
        <section className="py-12 px-4 text-white">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 place-items-center">
                    {registros.map((registro, index) => (
                        <Image
                            key={index}
                            src={registro.src}
                            alt={registro.alt}
                            width={400}
                            height={400}
                            className="object-contain"
                        />
                    ))}
                </div>
            </div>
        </section>
    )

}