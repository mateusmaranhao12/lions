'use client'

import Image from "next/image";
import { useState } from "react";

const projetos = [
    {
        titulo: "Mesa Farta Sem Desperdício - Compostagem",
        descricao: `A frente de compostagem do projeto Mesa Farta Sem Desperdício 
        transforma resíduos orgânicos em adubo natural, reduzindo o volume de lixo 
        destinado aos aterros e promovendo práticas sustentáveis. Essa ação contribui 
        para o ciclo de reaproveitamento completo dos alimentos, fortalecendo a educação 
        ambiental e o cuidado com o meio ambiente. ODS12 ODS13`,
        imagem: "/assets/compostagem.png"
    },
    
    {
        titulo: "Mesa Farta Sem Desperdício - Segurança Alimentar e Nutricional",
        descricao: `O projeto Mesa Farta Sem Desperdício garante segurança alimentar e nutricional 
        a pessoas em situação de vulnerabilidade e em situação de rua, promovendo a doação de alimentos 
        saudáveis e nutritivos a instituições parceiras, com apoio de redes de supermercados. ODS2, ODS17`,
        imagem: "/assets/carrossel2.png"
    },

    {
        titulo: "Mesa Farta Sem Desperdício -  Combate ao Desperdício e Reciclagem",
        descricao: `Na frente de Combate ao Desperdício e Reciclagem, o projeto Mesa 
        Farta Sem Desperdício transforma plásticos descartáveis em objetos decorativos, 
        unindo criatividade e consciência ambiental. A iniciativa dá novo propósito ao 
        que seria lixo, promovendo a sustentabilidade e o cuidado com o planeta. 
        ODS01, ODS04, ODS12, ODS13 `,
        imagem: "/assets/carrossel3.png"
    },

    {
        titulo: "Mesa Farta Sem Desperdício - Trabalhando Com a Juventude",
        descricao: `A frente Trabalhando com a Juventude, do projeto Mesa Farta Sem Desperdício, 
        envolve jovens em ações de educação ambiental, segurança alimentar e responsabilidade social. 
        Por meio de oficinas, vivências e voluntariado, a iniciativa fortalece o protagonismo juvenil 
        e forma agentes de transformação comprometidos com a sustentabilidade. ODS04, ADS05, ODS10`,
        imagem: "/assets/carrossel4.png"
    },

    {
        titulo: "Mesa Farta Sem Desperdício - Saúde Mental",
        descricao: `A frente de Saúde Mental do projeto Mesa Farta Sem Desperdício utiliza 
        a compostagem como ferramenta terapêutica, promovendo bem-estar emocional por meio 
        do contato com a natureza, do cuidado com a terra e da valorização do ciclo da vida. 
        A atividade favorece a redução do estresse, o senso de propósito e a conexão com o 
        meio ambiente. ODS03`,
        imagem: "/assets/carrossel5.png"
    },

    {
        titulo: "Mesa Farta Sem Desperdício - PANCs e plantas medicinais",
        descricao: `A frente de PANCs e Plantas Medicinais do projeto 
        Mesa Farta Sem Desperdício resgata saberes tradicionais ao incentivar 
        o uso de espécies nativas e não convencionais na alimentação e nos cuidados com a saúde. 
        A ação promove autonomia alimentar, valorização da biodiversidade e 
        educação ambiental. ODS11, ODS15`,
        imagem: "/assets/carrossel6.png"
    },
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
                <h2 className="text-3xl md:text-6xl font-bold mb-2">Nossos Projetos</h2>
                <h3 className="text-sm md:text-4xl font-semibold mb-6 mt-6">{projeto.titulo}</h3>

                {/* Imagem com setas */}
                <div className="flex flex-col items-center mb-4">
                    {/* Container fixo da imagem + setas */}
                    <div className="relative w-full max-w-6xl h-[700px] rounded-xl overflow-hidden shadow-xl">
                        <Image
                            src={projeto.imagem}
                            alt={projeto.titulo}
                            width={1200}
                            height={700}
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
                    <p className="mt-6 max-w-6xl text-start text-white text-sm md:text-2xl">
                        {projeto.descricao}
                    </p>
                </div>
            </div>
        </section>
    );
}
