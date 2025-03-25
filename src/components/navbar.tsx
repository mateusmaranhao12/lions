'use client'
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {

    const pathname = usePathname() //pega a rota atual

    const links = [
        { href: '/', label: 'Home' },
        { href: '/sobre', label: 'Sobre' },
        { href: '/contato', label: 'Contato' },
    ]

    return (
        <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
            <div className="text-lg font-bold">Meu Site</div>
            <ul className="flex gap-6">
                {links.map((link) => (
                    <li key={link.href}>
                        <Link
                            href={link.href}
                            className={`hover:underline ${pathname === link.href ? "font-bold text-yellow-400" : ""
                                }`}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar;
