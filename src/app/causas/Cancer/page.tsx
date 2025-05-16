'use client'

import Image from "next/image";
import Link from "next/link";

export default function Cancer() {
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
                <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-0 text-center">
                    <h2 className="text-3xl md:text-6xl font-bold mb-6">Causa - Combate ao câncer infantil</h2>
                    <p className="text-sm md:text-2xl leading-relaxed text-justify mb-4">
                        O Lions Clube Aracaju Bertha Lutz, por meio do projeto Mesa Farta Sem Desperdício, 
                        conecta-se à prioridade global do Lions International de combate ao câncer infantil 
                        ao doar alimentos à AMO - Associação Amigos da Oncologia em Aracaju. Essa ação local 
                        garante nutrição vital para pacientes em tratamento oncológico, fortalecendo sua saúde 
                        e bem-estar, em conformidade com o ODS 3.

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
            <div className="flex justify-center mt-8">
                <Link href="/causas" className="underline text-white hover:text-yellow-400">
                    Voltar para Nossas Causas
                </Link>
            </div>
        </div>
    );
}
