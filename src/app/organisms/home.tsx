// src/components/Home.tsx

'use client';

import { useMyContext } from "@/app/context/Context"; // Atualize o caminho conforme necessário
import NavLink from "@/app/atoms/navLink"; // Atualize o caminho conforme necessário

const Home = () => {
    const { refs } = useMyContext();

    return (
        <>
            <NavLink href="#section45">Home</NavLink>
            <NavLink href="#section5">Home</NavLink>
            <NavLink href="#section6">Home</NavLink>
            <NavLink href="#section15">Home</NavLink>
            <div>
                {[...Array(30)].map((_, index) => (
                    <section key={index} className="h-96 bg-marks-400" id={`section${index + 1}`} ref={refs[`section${index + 1}`]}>
                        <h1>Section {index + 1}</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                            repellat, eaque repellendus aperiam tempore, quidem, quia
                        </p>
                    </section>
                ))}
                <section
                    id="section45"
                    ref={refs.section45}
                    className="h-96 bg-marks-400"
                >
                    <h1>Section 1</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                        repellat, eaque repellendus aperiam tempore, quidem, quia
                    </p>
                </section>
            </div>
        </>
    );
};

export default Home;
