'use client'
import React from "react"
import Image from "next/image"

const Hero: React.FC = () => {

    const handleClick = () => {
        alert('Botao clicado')
    }

    function buttonClick() {
        alert('Botao clicado')
    }

    return (
        <div className="p-4 text-2xl">
            <div>Hero</div>
            <button
                onClick={handleClick}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition cursor-pointer me-5"
            >
                Clique aqui
            </button>
            <button
                onClick={buttonClick}
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition cursor-pointer"
            >
                Clique aqui
            </button>
            <div>
                <Image className="mt-5"
                    src="/11a570b9-08cb-461b-bef6-5b83e8a7f991.jpeg"
                    alt="Imagem"
                    width={132}
                    height={132}
                />
            </div>
        </div>
    );
};

export default Hero