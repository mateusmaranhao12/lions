'use client'
import React from "react"

export default function NossaHistoria() {
    return (
        <section
            className="relative w-full bg-cover bg-center bg-no-repeat text-white py-16"
            style={{
                backgroundImage: "url('/assets/nossa_historia.jpg')"
            }}
        >

            {/* Overlay roxo com opacidade */}
            <div className="absolute inset-0 bg-violet-900/70"></div>

            {/* Conteúdo centralizado */}
            <div className="relative z-10 max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Nossa História</h2>
                <p className="text-sm md:text-base leading-relaxed text-justify mb-4">
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
        </section>
    )
}
