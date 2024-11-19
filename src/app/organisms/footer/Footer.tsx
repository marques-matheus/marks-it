import Section from "@/app/templates/section/Section";
import Image from "next/image";
import { BiChevronRight } from "react-icons/bi";
import { BsLinkedin, BsInstagram, BsTwitter, BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

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
        <Section id="footer" bg="bg-gradient-to-b from-marks-800 to-marks-600" classes="flex flex-col gap-4 pt-10 pb-0 xl:py-0 xl:pt-16 xl:py-0">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
                <article className="text-gray-200 flex flex-col items-center">
                    <Image src="/logo-white.svg" alt="Logo" width={100} height={100} className="w-36 mb-5" />
                    <div>
                        <span className="flex items-center gap-2"><BsTelephone size={20} />(21) 97962-1864</span>
                        <span className="flex items-center gap-2"><FiMail size={20} />contato@marksit.info</span>
                    </div>
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
                <article className="flex flex-col gap-4 max-w-56 lg:max-w-sm items-center self-certer my-5 md:my-0">
                    <h3 className="text-white text-xl font-bold hidden md:block">Contato</h3>
                    <p className="text-gray-200 hidden md:block">Entre em contato conosco</p>
                    <div className="flex gap-4 ">
                        <a href="https://www.linkedin.com/in/marks-it-consulting-e-services/" target="_blank" rel="noopener noreferrer">
                            <BsLinkedin size={28} className="hover:text-marks-100 text-gray-200" />
                        </a>
                        <a href="https://www.instagram.com/marks.it/" target="_blank" rel="noopener noreferrer">
                            <BsInstagram size={28} className="hover:text-marks-100 text-gray-200" />
                        </a>
                        <a href="https://x.com/it_marks" target="_blank" rel="noopener noreferrer">
                            <BsTwitter size={28} className="hover:text-marks-100 text-gray-200" />
                        </a>
                    </div>
                </article>
            </div>
            <span className="text-gray-200 text-center text-sm mt-10">&copy; {new Date().getFullYear()} Marks IT Consulting e Services. Todos os direitos reservados.</span>
        </Section>
    );
};

export default Footer;