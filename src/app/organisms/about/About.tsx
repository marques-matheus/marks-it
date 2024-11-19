import Heading from "@/app/atoms/heading";
import Section from "@/app/templates/section/Section";
import Mvv from "@/app/molecules/mvv";

const About = () => {
    return (
        <Section id="about" bg="bg-gradient-to-b bg-gray-100">
            <Heading text="Quem somos" />
            <div className="flex flex-col lg:flex-row p-4 lg:p-10  items-baseline justify-around space-y-10  lg:space-y-0 md:space-x-10">
                <article className="text-start max-w-xl xl:max-w-2xl 2xl:max-w-3xl">
                    <p className="text-marks-800 text-lg 2xl:text-2xl">
                        <span className="font-bold text-4xl text-marks-100 drop-shadow-2xl shadow-black">S</span>omos uma empresa jovem, mas com ampla experiência consolidada, composta por profissionais altamente capacitados e comprometidos em acompanhar as mais recentes tecnologias e tendências de mercado. Valorizamos a confiança, a honestidade e a transparência, mesmo diante de desafios, pois acreditamos que esses valores são fundamentais
                        para construir relacionamentos de sucesso. <br />
                        A <img src="/logo-dark.png" alt="Logo" className="inline w-12 xl:max-w-2xl 2xl:w-20 mx-1" />  oferece consultoria integrada a soluções tecnológicas inovadoras, com foco na redução de custos, mitigação de riscos e no aumento da produtividade de sua empresa.
                    </p>
                </article>
                <Mvv />
            </div>
        </Section>
    );
};

export default About