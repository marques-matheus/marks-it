import React from "react";
import NavLink from "@/app/atoms/navLink";
import { BiMenu } from "react-icons/bi";
import { useMyContext } from "@/app/context/Context";


const links = [
    {
        href: "#home",
        label: "Home",

    },
    {
        href: "#about",
        label: "About",
    },
    {
        href: "#projects",
        label: "Projects",
    },
    {
        href: "#contact",
        label: "Contact",
    },
]
const NavList: React.FC = () => {
    const { isOpen, setIsOpen } = useMyContext();

    return (
        <>
            <nav
                className={`md:flex ${isOpen
                    ? 'flex animate-slideIn absolute bg-marks-600 w-full top-0 left-0 space-y-6 items-start p-10'
                    : 'hidden animate-slideOut -left-96 top-0'
                    } md:flex-row flex-col justify-around md:space-x-6 transition-all duration-300 ease-in-out`}
            >
                {links.map((link) => (
                    <NavLink key={link.href} href={link.href}>
                        {link.label}
                    </NavLink>
                ))}
            </nav>
            <button
                onClick={() => setIsOpen(!isOpen)}
                onBlur={() => setTimeout(() => setIsOpen(false), 100)}
                className="text-white hover:text-marks-400 transition-all duration-300 block md:hidden"
            >
                <BiMenu size={40} />
            </button>
        </>
    );
};

export default NavList;