'use client'

import Link from "next/link"
import Image from "next/image"

export default function Causas() {
    const causas = [
        {
            nome: 'Juventude',
            slug: 'Juventude',
            icone: '/assets/causas1.png',
            fundo: '/assets/juventude.jpg',
        },
        {
            nome: 'Esforços Humanitários',
            slug: 'Humanitarios',
            icone: '/assets/causas2.png',
            fundo: '/assets/humanitarios.jpg',
        },
        {
            nome: 'Câncer',
            slug: 'Cancer',
            icone: '/assets/causas3.png',
            fundo: '/assets/cancer.jpg',
        },
        {
            nome: 'Socorro em Catástrofes',
            slug: 'Catastrofes',
            icone: '/assets/causas4.png',
            fundo: '/assets/catastrofe.jpg',
        },
        {
            nome: 'Diabetes',
            slug: 'Diabetes',
            icone: '/assets/causas5.png',
            fundo: '/assets/diabete.jpg',
        },
        {
            nome: 'Fome',
            slug: 'Fome',
            icone: '/assets/causas6.png',
            fundo: '/assets/fome.jpg',
        },
        {
            nome: 'Meio ambiente',
            slug: 'MeioAmbiente',
            icone: '/assets/causas7.png',
            fundo: '/assets/meio-ambiente.jpg',
        },
        {
            nome: 'Visão',
            slug: 'Visao',
            icone: '/assets/causas8.png',
            fundo: '/assets/visao.jpg',
        },
        {
            nome: 'Saúde Mental',
            slug: 'SaudeMental',
            icone: '/assets/causas9.png',
            fundo: '/assets/visao.jpg',
        },
    ]

    return (
        <div className="max-w-6xl mx-auto px-4 text-white py-10">

            <h1 className="text-6xl font-bold text-center mb-10">Conheça as nossas causas</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {causas.map((causa, index) => (
                    <Link
                        key={index}
                        href={`/causas/${causa.slug}`}
                        className="relative rounded-xl overflow-hidden h-[200px] cursor-pointer group"
                    >
                        {/* Imagem de fundo */}
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${causa.fundo})` }}
                        ></div>

                        {/* Overlay roxo com opacidade */}
                        <div className="absolute inset-0 bg-violet-800/70 transition group-hover:bg-violet-900/70"></div>

                        {/* Conteúdo por cima */}
                        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-4">
                            <Image
                                src={causa.icone}
                                alt={causa.nome}
                                width={60}
                                height={60}
                                className="mb-2"
                            />
                            <h2 className="text-lg font-semibold">{causa.nome}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
