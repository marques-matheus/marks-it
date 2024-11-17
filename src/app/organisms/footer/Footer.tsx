import Section from "@/app/templates/section/Section";
import Image from "next/image";
import { BiChevronRight } from "react-icons/bi";
import { BsLinkedin, BsInstagram, BsFacebook } from "react-icons/bs";

const links = [
    {
        href: "#home",
        label: "Ínicio",

    },
    {
        href: "#about",
        label: "Sobre",
    },
    {
        href: "#services",
        label: "Serviços",
    },
    {
        href: "#contact",
        label: "Contato",
    },
]

const Footer = () => {
    return (
        <Section id="footer" bg="bg-marks-700" classes="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
                <article className="text-gray-200 flex flex-col space-y-1">
                    <Image src="/logo-white.svg" alt="Logo" width={100} height={100} className="w-36 " />
                    <span>(21) 99999-9999</span>
                    <span>4o4fX@example.com</span>
                </article>
                <article className="flex-col items-start space-y-2 hidden md:flex">
                    <h3 className="text-white text-xl font-bold">Links Úteis</h3>
                    <div>
                        <ul>
                            {links.map((link) => (
                                <li key={link.href} className="text-gray-200 flex items-center gap-2 w-24  hover:border-r-4 hover:border-marks-100 hover:text-marks-100">
                                    <BiChevronRight size={20} />
                                    <a href={link.href}>{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </article>
                <article className="flex flex-col gap-4 max-w-sm">
                    <h3 className="text-white text-xl font-bold">Contato</h3>
                    <p className="text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis vel a, officiis nostrum recusandae.</p>
                    <div className="flex gap-4 ">
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <BsLinkedin size={28} className="hover:text-marks-100 text-gray-200" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <BsInstagram size={28} className="hover:text-marks-100 text-gray-200" />
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <BsFacebook size={28} className="hover:text-marks-100 text-gray-200" />
                        </a>
                    </div>
                </article>
            </div>
        </Section>
    );
};

export default Footer;