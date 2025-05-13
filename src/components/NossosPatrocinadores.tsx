'use client'
import Image from "next/image"

export default function NossosPatrocinadores() {

    const patrocinadores = [
        { src: "/assets/p1.png", alt: "Patrocinador 1" },
        { src: "/assets/p2.png", alt: "Patrocinador 2" },
        { src: "/assets/p3.png", alt: "Patrocinador 3" },
        { src: "/assets/p4.png", alt: "Patrocinador 4" },
        { src: "/assets/p5.png", alt: "Patrocinador 5" },
        { src: "/assets/p6.png", alt: "Patrocinador 6" },
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
                            width={250}
                            height={250}
                            className="object-contain rounded-full shadow-[4px_4px_20px_4px_rgba(255,255,255,0.6)] transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                        />
                    ))}
                </div>
            </div>
        </section>

    )
}