'use client'

import Image from "next/image";
import Link from "next/link";

export default function Cancer() {
    return (
        <div className="p-10 text-white">
            {/* Título principal */}
            <h1 className="text-3xl font-bold text-center mb-10">Nossas Causas</h1>

            {/* Bloco do ícone + texto */}
            <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
                {/* Ícone da Causa */}
                <div className="bg-violet-700 rounded-xl flex flex-col items-center justify-center p-6">
                    <Image src="/assets/causas7.png" alt="Meio ambiente" width={100} height={100} />
                    <h2 className="text-xl font-semibold mt-4">Meio ambiente</h2>
                </div>

                {/* Texto descritivo */}
                <p className="text-sm md:text-base text-justify">
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
                    Donec eu libero sit amet quam egestas semper.
                    Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
                    Quisque sit amet est et sapien.
                </p>
            </div>

            {/* Galeria de imagens */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <Image src="/assets/imagem1.png" alt="Projeto 1" width={400} height={300} className="rounded-lg object-cover w-full h-64" />
                <Image src="/assets/imagem1.png" alt="Projeto 2" width={400} height={300} className="rounded-lg object-cover w-full h-64" />
                <Image src="/assets/imagem1.png" alt="Projeto 3" width={400} height={300} className="rounded-lg object-cover w-full h-64" />
            </div>

            {/* Botão de voluntário */}
            <div className="flex justify-center">
                <button className="bg-blue-900 text-white font-bold px-8 py-4 rounded-full hover:bg-blue-800">
                    Seja um voluntário
                </button>
            </div>

            {/* Botão "Voltar" */}
            <div className="flex justify-center mt-8">
                <Link href="/causas" className="underline text-white hover:text-yellow-400">
                    Voltar para Nossas Causas
                </Link>
            </div>
        </div>
    );
}
