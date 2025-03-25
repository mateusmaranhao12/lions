import React from "react"
import Image from "next/image"

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-gray-900 text-white flex items-center p-4 z-50">
      <div className="flex items-center">
        <Image
          src="/icone - 10.png"
          alt="Ícone do Footer"
          width={32}
          height={32}
        />
        <span className="ml-2 text-sm">© 2025 - Todos os direitos reservados.</span>
      </div>
    </footer>
  );
};

export default Footer;
