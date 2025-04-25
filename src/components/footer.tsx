'use client'
import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 text-white py-6 px-4 sm:px-10">
      {/* Fundo com imagem escura sobreposta */}
      <div className="absolute inset-0 z-0 opacity-90 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/nav_footer.png')" }}></div>

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
        {/* Esquerda - Logo + nome */}
        <div className="flex items-center md:self-center gap-3">
          <Image src="/assets/logo_white.png" alt="Logo" width={50} height={50} />
          <span className="font-bold text-lg">LionsBertaLuz</span>
        </div>

        {/* Centro - Direitos reservados */}
        <div className="text-center md:self-center">
          <p className="font-semibold">Todos os direitos reservados</p>
        </div>

        {/* Direita - Contato */}
        <div className="text-md text-center md:text-right">
          <p className="font-bold">Contatos:</p>
          <p>Telefone:<br />79 99999-99999</p>
          <p className="mt-1">E-mail:<br /><a href="mailto:lions@gamil.com" className="underline">lions@gmail.com</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
