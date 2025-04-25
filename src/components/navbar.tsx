'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
    const pathname = usePathname();

    return (
        <nav className="relative z-10 text-white px-4 py-4 sm:px-6 md:px-10">
            {/* Fundo com imagem */}
            <div className="absolute inset-0 z-0 opacity-90 bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/nav_footer.png')" }}></div>

            {/* Container principal */}
            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                {/* Logo e Nome */}
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                    <div className="flex items-center gap-2">
                        <Image src="/assets/logo_white.png" alt="Logo" width={40} height={40} />
                        <span className="font-bold text-lg">LionsBertaLuz</span>
                    </div>
                </div>

                {/* Links */}
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                    <Link href="/causas" className={`hover:underline ${pathname === "/causas" ? "font-bold text-yellow-400" : ""}`}>
                        Nossas Causas
                    </Link>
                    <Link href="/patrocinador" className={`hover:underline ${pathname === "/patrocinador" ? "font-bold text-yellow-400" : ""}`}>
                        Seja um patrocinador
                    </Link>
                    <Link href="/junte-se" className="bg-blue-800 px-4 py-2 rounded text-white text-center hover:bg-blue-700 transition">
                        Junte-se a Nós
                    </Link>
                    <Link href="/doacoes" className="bg-yellow-400 px-4 py-2 rounded text-black text-center hover:bg-yellow-300 transition">
                        Doações
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
