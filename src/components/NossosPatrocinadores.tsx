'use client'
import Image from "next/image"

export default function NossosPatrocinadores() {

    const patrocinadores = [
        { src: "/assets/p1.png", alt: "Patrocinador 1" },
        { src: "/assets/p2.png", alt: "Patrocinador 2" },
        { src: "/assets/p3.png", alt: "Patrocinador 3" },
        { src: "/assets/p4.png", alt: "Patrocinador 4" },
    ]

    return (
        <section className="py-12 px-4 text-white">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-6xl font-bold mb-10">Nossos Patrocinadores</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-2 gap-6 place-items-center">
                    {patrocinadores.map((patrocinador, index) => (
                        <Image
                            key={index}
                            src={patrocinador.src}
                            alt={patrocinador.alt}
                            width={300}
                            height={300}
                            className="object-contain rounded-full"
                        />
                    ))}
                </div>
            </div>
        </section>
    )

}