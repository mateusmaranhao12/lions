import { notFound } from "next/navigation";
import Image from "next/image";

interface CausaDetalhe {
    titulo: string;
    descricao: string;
    icone: string;
    imagens: string[];
}

const causasDetalhes: Record<string, CausaDetalhe> = {
    juventude: {
        titulo: 'Juventude de LCIF',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec iaculis risus. Proin efficitur massa eget quam mollis, eget vulputate eros suscipit. Nam commodo eu velit in tempor.',
        icone: '/assets/causas1.png',
        imagens: [
            '/assets/imagem1.png',
            '/assets/imagem1.png',
            '/assets/imagem1.png',
        ],
    },

    humanitarios: {
        titulo: 'Esforços humanitários',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec iaculis risus. Proin efficitur massa eget quam mollis, eget vulputate eros suscipit. Nam commodo eu velit in tempor.',
        icone: '/assets/causas2.png',
        imagens: [
            '/assets/imagem1.png',
            '/assets/imagem1.png',
            '/assets/imagem1.png',
        ],
    },

    cancer: {
        titulo: 'Câncer',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec iaculis risus. Proin efficitur massa eget quam mollis, eget vulputate eros suscipit. Nam commodo eu velit in tempor.',
        icone: '/assets/causas3.png',
        imagens: [
            '/assets/imagem1.png',
            '/assets/imagem1.png',
            '/assets/imagem1.png',
        ],
    },

    catastrofes: {
        titulo: 'Socorro em catástrofes',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec iaculis risus. Proin efficitur massa eget quam mollis, eget vulputate eros suscipit. Nam commodo eu velit in tempor.',
        icone: '/assets/causas4.png',
        imagens: [
            '/assets/imagem1.png',
            '/assets/imagem1.png',
            '/assets/imagem1.png',
        ],
    },

    diabetes: {
        titulo: 'Diabetes',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec iaculis risus. Proin efficitur massa eget quam mollis, eget vulputate eros suscipit. Nam commodo eu velit in tempor.',
        icone: '/assets/causas5.png',
        imagens: [
            '/assets/imagem1.png',
            '/assets/imagem1.png',
            '/assets/imagem1.png',
        ],
    },

    fome: {
        titulo: 'Fome',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec iaculis risus. Proin efficitur massa eget quam mollis, eget vulputate eros suscipit. Nam commodo eu velit in tempor.',
        icone: '/assets/causas6.png',
        imagens: [
            '/assets/imagem1.png',
            '/assets/imagem1.png',
            '/assets/imagem1.png',
        ],
    },

    meio_ambiente: {
        titulo: 'Meio ambiente',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec iaculis risus. Proin efficitur massa eget quam mollis, eget vulputate eros suscipit. Nam commodo eu velit in tempor.',
        icone: '/assets/causas7.png',
        imagens: [
            '/assets/imagem1.png',
            '/assets/imagem1.png',
            '/assets/imagem1.png',
        ],
    },

    visao: {
        titulo: 'Visão',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec iaculis risus. Proin efficitur massa eget quam mollis, eget vulputate eros suscipit. Nam commodo eu velit in tempor.',
        icone: '/assets/causas8.png',
        imagens: [
            '/assets/imagem1.png',
            '/assets/imagem1.png',
            '/assets/imagem1.png',
        ],
    },

};

export default function CausaPage({ params }: { params: { slug: string } }) {
    const causa = causasDetalhes[params.slug];

    if (!causa) {
        notFound();
    }

    return (
        <div className="p-10 text-white">
            <h1 className="text-3xl font-bold text-center mb-10">Nossas Causas</h1>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
                <div className="bg-purple-700 rounded-xl flex flex-col items-center justify-center p-6">
                    <Image src={causa.icone} alt={causa.titulo} width={100} height={100} />
                    <h2 className="text-xl font-semibold mt-4">{causa.titulo}</h2>
                </div>

                <p className="text-sm md:text-base text-justify">{causa.descricao}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {causa.imagens.map((img, idx) => (
                    <Image key={idx} src={img} alt="Projeto" width={400} height={300} className="rounded-lg object-cover w-full h-64" />
                ))}
            </div>

            <div className="flex justify-center">
                <button className="bg-blue-900 text-white font-bold px-8 py-4 rounded-full hover:bg-blue-800">
                    Seja um voluntário
                </button>
            </div>
        </div>
    );
}
