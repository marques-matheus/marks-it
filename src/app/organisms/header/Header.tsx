import React from "react";
import NavList from "@/app/molecules/navList";
import Image from "next/image";

const Header: React.FC = () => {
    return (
        <header className="bg-marks-600 py-4">
            <div className="container mx-auto flex items-center px-5 justify-between lg:px-20 xl:px-16">
                <Image src="/logo-branco.png" alt="Logo" width={100} height={100} className="w-36 lg:w-48" />
                <NavList />
            </div>
        </header>
    );
};

export default Header;