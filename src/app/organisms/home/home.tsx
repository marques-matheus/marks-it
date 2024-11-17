// src/components/Home.tsx
'use client';
import { useMyContext } from "@/app/context/Context"; // Atualize o caminho conforme necessário
import Image from "next/image";


const Home = () => {
    const { refs } = useMyContext();


    return (
        <>
            <section
                id="home"
                ref={refs.home}
                className="h-fit text-center flex items-center justify-around w-full pt-16 px-8 xl:py-16 xl:px-32 bg-gradient-to-b from-marks-600 to-marks-100 flex-col md:flex-row space-y-5 xl:space-x-4"
            >
                <article className="text-start max-w-xl">
                    <h1 className="text-3xl font-bold text-white">
                        Soluções para o seu negócio
                    </h1>
                    <p className="text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quasi repellat, eaque repellendus aperiam tempore, quidem,
                    </p>
                </article>
                <Image src="/tech2.svg" alt="animação com duas pessoas na frente analizando dados, ao fundo um foguete decolando e alguns dados de BI" className="w-auto md:w-2/4 lg:w-96 xl:w-2/4" width={600} height={400} />
                <a className="hidden" href="https://storyset.com/business">Business illustrations by Storyset</a>
            </section>
            <section ref={refs.about} className="h-screen text-center flex items-center justify-center my-96" id="about">
                <h1>About</h1>
            </section>
            <section ref={refs.projects} className="h-screen text-center flex items-center justify-center my-96" id="projects">
                <h1>projects</h1>
            </section>
            <section ref={refs.contact} className="h-screen text-center flex items-center justify-center my-96" id="contact">
                <h1>contacts</h1>
            </section>
        </>
    );
};

export default Home;
