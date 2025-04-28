'use client'

import Link from "next/link";
import Image from "next/image";

export default function Causas() {
    const causas = [
        { nome: 'Juventude de LCIF', slug: 'juventude', icone: '/assets/causas1.png' },
        { nome: 'Esforços Humanitários', slug: 'humanitarios', icone: '/assets/causas2.png' },
        { nome: 'Câncer', slug: 'cancer', icone: '/assets/causas3.png' },
        { nome: 'Socorro em Catástrofes', slug: 'catastrofes', icone: '/assets/causas4.png' },
        { nome: 'Diabetes', slug: 'diabetes', icone: '/assets/causas5.png' },
        { nome: 'Fome', slug: 'fome', icone: '/assets/causas6.png' },
        { nome: 'Meio ambiente', slug: 'meio-ambiente', icone: '/assets/causas7.png' },
        { nome: 'Visão', slug: 'visao', icone: '/assets/causas8.png' },
    ]

    return (
        <div className="p-10 text-white">
            <h1 className="text-3xl font-bold text-center mb-10">Nossas Causas</h1>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {causas.map((causa, index) => (
                    <Link key={index} href={`/causas/${causa.slug}`} className="bg-violet-700 cursor-pointer rounded-xl flex flex-col items-center justify-center p-6 hover:bg-violet-900 transition">
                        <Image
                            src={causa.icone}
                            alt={causa.nome}
                            width={80}
                            height={80}
                            className="mb-4"
                        />
                        <h2 className="text-lg font-semibold text-center">{causa.nome}</h2>
                    </Link>
                ))}
            </div>
        </div>
    );
}
