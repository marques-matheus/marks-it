import React from "react";
import NavList from "@/app/molecules/navList";
import Image from "next/image";

const Header: React.FC = () => {
    return (
        <header className="bg-marks-800 py-4">
            <div className="container mx-auto flex items-center justify-between m-auto px-6">
                <Image src="/logo-white.svg" alt="Logo" width={100} height={100} />
                <NavList />
            </div>
        </header>
    );
};

export default Header;