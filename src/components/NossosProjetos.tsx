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
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-2">Nossos Projetos</h2>
                <h3 className="text-xl font-semibold mb-6">{projeto.titulo}</h3>

                {/* Imagem com setas */}
                <div className="relative flex justify-center items-center mb-4">
                    <button
                        onClick={anterior}
                        className="absolute left-0 text-3xl px-2 hover:text-yellow-300 cursor-pointer"
                        aria-label="Anterior"
                    >
                        &#10094;
                    </button>

                    <div className="overflow-hidden rounded-xl w-full max-w-md">
                        <Image
                            src={projeto.imagem}
                            alt={projeto.titulo}
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    <button
                        onClick={proximo}
                        className="absolute right-0 text-3xl px-2 hover:text-yellow-300 cursor-pointer"
                        aria-label="Próximo"
                    >
                        &#10095;
                    </button>
                </div>

                {/* Descrição */}
                <p className="text-justify text-sm md:text-base max-w-md mx-auto">
                    {projeto.descricao}
                </p>
            </div>
        </section>
    );
}
