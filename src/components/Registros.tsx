'use client'
import Image from "next/image"

export default function NossosPatrocinadores() {

    const registros = [
        { src: "/assets/rd1.png", alt: "Instagram", link: "https://www.instagram.com/lionsajuberthalutz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" },
        { src: "/assets/rd2.png", alt: "TikTok", link: "#" },
        { src: "/assets/rd3.png", alt: "YouTube", link: "https://www.youtube.com/@lionsclubearacajuberthalut684" },
    ]

    return (
        <section className="py-12 px-4 text-white">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 place-items-center">
                    {registros.map((registro, index) => (
                        <a
                            key={index}
                            href={registro.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src={registro.src}
                                alt={registro.alt}
                                width={400}
                                height={400}
                                className="object-contain cursor-pointer hover:scale-110 transition-transform duration-200"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
