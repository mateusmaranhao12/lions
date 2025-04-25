'use client'
import Image from "next/image"

export default function NossosPatrocinadores() {

    const patrocinadores = [
        { src: "/assets/logo_colorida.png", alt: "Patrocinador 1" },
        { src: "/assets/logo_colorida.png", alt: "Patrocinador 2" },
        { src: "/assets/logo_colorida.png", alt: "Patrocinador 3" },
        { src: "/assets/logo_colorida.png", alt: "Patrocinador 4" },
        { src: "/assets/logo_colorida.png", alt: "Patrocinador 5" },
        { src: "/assets/logo_colorida.png", alt: "Patrocinador 6" },
        { src: "/assets/logo_colorida.png", alt: "Patrocinador 7" },
        { src: "/assets/logo_colorida.png", alt: "Patrocinador 8" },
    ]

    return (
        <section className="py-12 px-4 text-white">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-10">Nossos Patrocinadores</h2>
                <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 place-items-center">
                    {patrocinadores.map((patrocinador, index) => (
                        <Image
                            key={index}
                            src={patrocinador.src}
                            alt={patrocinador.alt}
                            width={200}
                            height={200}
                            className="object-contain"
                        />
                    ))}
                </div>
            </div>
        </section>
    )

}