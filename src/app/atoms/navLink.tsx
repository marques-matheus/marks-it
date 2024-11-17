// src/components/NavLink.tsx

import { useMyContext } from "@/app/context/Context"; // Atualize o caminho conforme necessário
import React from "react";

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({
    href,
    children,
}) => {
    const { refs } = useMyContext();

    return (
        <button
            className="text-white hover:text-cyan-200  text-sm transition-all duration-300"
            onClick={(e) => {
                e.preventDefault();
                const key = href.replace('#', ''); // Converte "#section1" para "section1"
                refs[key]?.current?.scrollIntoView({ behavior: 'smooth' });
            }}
        >
            {children}
        </button>
    );
};

export default NavLink;
