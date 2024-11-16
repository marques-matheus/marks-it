// src/components/Home.tsx
'use client';
import { useMyContext } from "@/app/context/Context"; // Atualize o caminho conforme necessário


const Home = () => {
    const { refs } = useMyContext();


    return (
        <>
            <section
                id="home"
                ref={refs.home}

            >
                <h1>Section 1</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                    repellat, eaque repellendus aperiam tempore, quidem, quia
                </p>
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
