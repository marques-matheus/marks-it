// src/components/Home.tsx
'use client';
import { useMyContext } from "@/app/context/Context"; // Atualize o caminho conforme necessário
import Image from "next/image";
import Section from "@/app/templates/section/Section";


const Home = () => {
    return (
        <Section
            classes={`h-fit text-center flex items-center justify-around flex-col md:flex-row bg-gradient-to-b from-marks-600 to-marks-100`}
            id="home">
            <article className="text-start max-w-xl">
                <h1 className="text-3xl font-bold text-white">
                    Estratégias e Soluções com foco nos Resultados!
                </h1>
                <p className="text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi repellat, eaque repellendus aperiam tempore, quidem,
                </p>
            </article>
            <Image src="/hero-img.png" alt="animação com duas pessoas na frente analizando dados, ao fundo um foguete decolando e alguns dados de BI" className="w-auto md:w-2/4 lg:w-96 xl:w-2/4" width={600} height={400} />
            <a className="hidden" href="https://storyset.com/business">Business illustrations by Storyset</a>
        </Section>
    );
};

export default Home;
