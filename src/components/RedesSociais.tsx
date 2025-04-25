'use client'
import Image from "next/image"

export default function RedesSociais() {
    const redes = [
        { src: "/assets/instagram.png", alt: "Instagram", link: "https://www.instagram.com/lionsajuberthalutz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" },
        { src: "/assets/tiktok.png", alt: "Facebook", link: "https://tiktok.com" },
        { src: "/assets/youtube.png", alt: "YouTube", link: "https://www.youtube.com/@lionsclubearacajuberthalut684" },
    ];

    return (
        <div className="text-center py-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                Nossas Redes Sociais
            </h2>

            <div className="flex justify-center gap-6">
                {redes.map((rede, index) => (
                    <a key={index} href={rede.link} target="_blank" rel="noopener noreferrer">
                        <Image
                            src={rede.src}
                            alt={rede.alt}
                            width={60}
                            height={60}
                            className="hover:scale-110 transition-transform duration-200"
                        />
                    </a>
                ))}
            </div>
        </div>

    );
}
