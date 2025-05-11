'use client'

import Image from "next/image";
import Link from "next/link";

export default function MeioAmbiente() {
    return (
        <div className="mx-auto text-white">

            <section
                className="relative w-full bg-cover bg-center bg-no-repeat text-white py-16"
                style={{
                    backgroundImage: "url('/assets/nossa_historia.jpg')"
                }}
            >

                {/* Overlay roxo com opacidade */}
                <div className="absolute inset-0 bg-violet-900/70"></div>

                {/* Conteúdo centralizado */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-0 text-center">
                    <h2 className="text-3xl md:text-6xl font-bold mb-6">Causa - Meio ambiente</h2>
                    <p className="text-sm md:text-2xl leading-relaxed text-justify mb-4">
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                        Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero
                        sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
                        Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed,
                        commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros
                        ipsum rutrum orci, sagittis tempus lacus enim ac dui.
                    </p>
                    <p className="text-sm md:text-2xl leading-relaxed text-justify">
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                        Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero
                        sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
                        Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed,
                        commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros
                        ipsum rutrum orci, sagittis tempus lacus enim ac dui.
                    </p>
                </div>
            </section>

            {/* Galeria de imagens */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 py-10 px-4">
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
            <div className="flex justify-center mt-8 mb-10">
                <Link href="/causas" className="underline text-white hover:text-yellow-400">
                    Voltar para Nossas Causas
                </Link>
            </div>
        </div>
    );
}
