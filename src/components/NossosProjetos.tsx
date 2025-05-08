'use client'

import Image from "next/image";
import { useState } from "react";

const projetos = [
    {
        titulo: "Projeto Meio Ambiente",
        descricao: `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.`,
        imagem: "/assets/carrossel1.png"
    },
    {
        titulo: "Projeto Doação de Alimentos",
        descricao: `Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.`,
        imagem: "/assets/carrossel1.png"
    },
    {
        titulo: "Projeto Saúde Comunitária",
        descricao: `Donec eu libero sit amet quam egestas semper. Vestibulum erat wisi, condimentum sed, commodo vitae.`,
        imagem: "/assets/carrossel1.png"
    }
];

export default function NossosProjetos() {
    const [index, setIndex] = useState(0);

    const anterior = () => {
        setIndex((index - 1 + projetos.length) % projetos.length);
    };

    const proximo = () => {
        setIndex((index + 1) % projetos.length);
    };

    const projeto = projetos[index];

    return (
        <section className="py-12 px-4 text-white">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-2">Nossos Projetos</h2>
                <h3 className="text-xl font-semibold mb-6">{projeto.titulo}</h3>

                {/* Imagem com setas */}
                <div className="flex flex-col items-center mb-4">
                    {/* Container fixo da imagem + setas */}
                    <div className="relative w-full max-w-6xl h-[300px] rounded-xl overflow-hidden shadow-xl">
                        <Image
                            src={projeto.imagem}
                            alt={projeto.titulo}
                            width={1200}
                            height={500}
                            className="w-full h-full object-cover"
                        />

                        <button
                            onClick={anterior}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl z-10 hover:text-yellow-300 cursor-pointer"
                            aria-label="Anterior"
                        >
                            &#10094;
                        </button>

                        <button
                            onClick={proximo}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl z-10 hover:text-yellow-300 cursor-pointer"
                            aria-label="Próximo"
                        >
                            &#10095;
                        </button>
                    </div>

                    {/* Texto fixo abaixo, separado da imagem */}
                    <p className="mt-6 max-w-7xl text-center text-white text-sm md:text-base">
                        {projeto.descricao}
                    </p>
                </div>

                {/* Descrição */}
                <p className="text-justify text-sm md:text-base max-w-md mx-auto">
                    {projeto.descricao}
                </p>
            </div>
        </section>
    );
}
