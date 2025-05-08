'use client'

import Image from "next/image";
import Link from "next/link";

export default function Juventude() {
    return (
        <div className="max-w-7xl mx-auto px-4 text-white py-10">

            {/* Bloco do ícone + texto */}
            <div className="grid md:grid-cols-1 gap-8 items-center mb-10">
                {/* Ícone da Causa - Versão circular com fundo */}
                <div className="relative w-48 h-48 rounded-full overflow-hidden mx-auto shadow-lg">
                    {/* Imagem de fundo */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: "url('/assets/juventude.jpg')" }}
                    ></div>

                    {/* Overlay roxo com opacidade */}
                    <div className="absolute inset-0 bg-violet-800/70"></div>

                    {/* Conteúdo centralizado */}
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-4">
                        <Image src="/assets/causas3.png" alt="Juventude" width={80} height={80} className="mb-3" />
                        <h2 className="text-lg font-semibold">Juventude</h2>
                    </div>
                </div>

                {/* Texto descritivo */}
                <p className="text-sm md:text-base text-justify max-w-7xl mx-auto text-white">
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
                <a
                    href="https://forms.gle/7L99bMAb9d2Dj6d38"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-900 text-white font-bold px-8 py-4 rounded-full hover:bg-blue-800"
                >
                    Seja um voluntário
                </a>
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
