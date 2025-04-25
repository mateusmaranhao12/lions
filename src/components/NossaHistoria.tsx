'use client'
import React from "react"
import Image from "next/image";

export default function NossaHistoria() {
    return (
        <section className="p-6 md:p-10 text-white">
            <div className="max-w-7xl mx-auto rounded-xl overflow-hidden">
                <div className="grid md:grid-cols-2 gap-6">

                    {/* Coluna da Imagem */}
                    <div className="flex justify-center items-center p-6">
                        <Image
                            src="/assets/img1.png"
                            alt="Logo Lions"
                            width={500}
                            height={500}
                            className="object-contain"
                        />
                    </div>

                    {/* Coluna do Texto */}
                    <div className="p-6 flex flex-col justify-center text-white">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">
                            Nossa História
                        </h2>
                        <p className="text-sm md:text-base leading-relaxed text-justify">
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                            Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero
                            sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
                            Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed,
                            commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros
                            ipsum rutrum orci, sagittis tempus lacus enim ac dui.
                        </p>
                        <p className="text-sm md:text-base leading-relaxed text-justify">
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                            Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero
                            sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
                            Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed,
                            commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros
                            ipsum rutrum orci, sagittis tempus lacus enim ac dui.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}