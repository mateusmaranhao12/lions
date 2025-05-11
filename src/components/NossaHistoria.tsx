'use client'
import React from "react"
import Image from "next/image";

export default function NossaHistoria() {
    return (
        <section
            className="relative w-full bg-cover bg-center bg-no-repeat text-white py-16"
            style={{
                backgroundImage: "url('/assets/nossa_historia.jpg')"
            }}
        >

            {/* Overlay roxo com opacidade */}
            <div className="absolute inset-0 bg-violet-900/70"></div>

            {/* Conteúdo centralizado */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-0">
                <h2 className="text-3xl md:text-6xl font-bold mb-6 text-center">Nossa História</h2>
                <p className="text-sm md:text-2xl leading-relaxed text-justify mb-4">
                    O Lions Clube Aracaju Bertha Lutz, integrante do Lions Internacional,
                    atua como apoio a instituições e comunidades, promovendo ações solidárias
                    voltadas a pessoas em situação de vulnerabilidade social e de rua.
                    Seu trabalho está alinhado aos Objetivos de Desenvolvimento Sustentável (ODS),
                    com ênfase na sustentabilidade e na preservação do meio ambiente e alívio à fome.
                </p>
                <h3 className="text-2xl md:text-4xl font-bold text-start text-yellow-400">Patronos LCA Bertha Lutz</h3>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                    <p className="text-sm md:text-2xl leading-relaxed text-justify mb-4">
                        <span className="font-bold text-yellow-400">Bertha Lutz,</span> notável mulher à frente de seu tempo, bióloga e defensora do meio ambiente,
                        dedicou-se à preservação da natureza e à igualdade de gênero. Em reconhecimento a sua
                        trajetória e visão sustentável, tornou-se a patronesse do Lions Clube Aracaju Bertha Lutz.
                    </p>
                    <Image
                        src="/assets/historia1.jpg"
                        alt="Bertha Lutz 1"
                        width={220}
                        height={220}
                        className="object-cover rounded-3xl opacity-70"
                    />
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mt-8">
                    <p className="text-sm md:text-2xl leading-relaxed text-justify mb-4">
                        <span className="font-bold text-yellow-400">Aloisio Virginio da Cruz,</span> conhecido como Campeão, é um exemplo de superação, 
                        inteligência e determinação. Entre 1980 e 2015, dedicou-se ao serviço humanitário 
                        no movimento leonístico, acreditando no poder transformador da educação. Seu legado 
                        de generosidade e apoio à juventude permanece vivo no Lions Clube Aracaju Bertha Lutz, 
                        que o honra como patrono.
                    </p>
                    <Image
                        src="/assets/historia2.jpg"
                        alt="Bertha Lutz 2"
                        width={220}
                        height={220}
                        className="object-cover rounded-3xl opacity-70"
                    />
                </div>

            </div>
        </section>
    )
}
