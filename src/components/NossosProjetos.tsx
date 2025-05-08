'use client'

import Image from "next/image";
import { useState } from "react";

const projetos = [
    {
        titulo: "Projeto Meio Ambiente",
        descricao: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nam scelerisque dui vel sollicitudin elementum. Morbi egestas ornare ultrices. 
            Praesent in posuere magna. Etiam blandit lobortis tellus, et aliquet augue 
            sagittis eget. Etiam volutpat aliquet justo, ut imperdiet arcu blandit ut. 
            Sed sollicitudin rutrum dignissim.`,
        imagem: "/assets/carrossel1.png"
    },
    {
        titulo: "Projeto Doação de Alimentos",
        descricao: `Ut sit amet eleifend diam, non porttitor est. Nunc finibus rutrum luctus. 
            Quisque consectetur vulputate odio eget commodo. Phasellus nec eros vel mi facilisis 
            ultrices accumsan ullamcorper purus. Nulla quis condimentum libero. 
            Maecenas sit amet efficitur diam, a cursus nisi. Phasellus mollis velit erat, vitae 
            commodo metus consequat id.`,
        imagem: "/assets/carrossel1.png"
    },
    {
        titulo: "Projeto Saúde Comunitária",
        descricao: `Nulla vel augue in lorem luctus tristique nec id est. Donec dignissim sit amet massa id mollis. 
            In hac habitasse platea dictumst. Ut sed rhoncus eros. Suspendisse potenti.`,
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
                    <p className="mt-6 max-w-6xl text-start text-white text-sm md:text-base">
                        {projeto.descricao}
                    </p>
                </div>
            </div>
        </section>
    );
}
