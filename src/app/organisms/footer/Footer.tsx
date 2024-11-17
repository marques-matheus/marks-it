import Section from "@/app/templates/section/Section";
import Image from "next/image";

const Footer = () => {
    return (
        <Section id="footer" bg="bg-marks-700" classes="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
                <article className="text-gray-200 flex flex-col space-y-1">
                    <Image src="/logo-white.svg" alt="Logo" width={100} height={100} className="w-36 lg:w-48" />
                    <span>(21) 99999-9999</span>
                    <span>4o4fX@example.com</span>
                </article>
                <article>
                    <h3 className="text-marks-600 text-xl font-bold">Serviços</h3>
                    <div>
                        <ul>
                            <li>Consultoria</li>
                            <li>Desenvolvimento</li>
                            <li>Outros</li>
                        </ul>
                    </div>
                </article>
                <div className="flex flex-col gap-4">
                    <h3 className="text-marks-600 text-xl font-bold">Contato</h3>
                    <div className="flex gap-4">
                        <Image src="/whatsapp-icon.png" alt="Logo" width={40} height={40} className="w-12" />
                        <Image src="/instagram-icon.png" alt="Logo" width={40} height={40} className="w-12" />
                        <Image src="/linkedin-icon.png" alt="Logo" width={40} height={40} className="w-12" />
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Footer;