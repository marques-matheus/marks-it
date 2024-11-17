import { useMyContext } from "@/app/context/Context";
import React, { MutableRefObject } from "react";

interface SectionProps {
    id: string;
    children: React.ReactNode;
    refPage?: MutableRefObject<HTMLElement | null>; // Opção para passar uma ref externa
    bg?: string; // Cor de fundo opcional
}

const Section: React.FC<SectionProps> = ({ id, children, refPage, bg }) => {
    const { refs } = useMyContext();

    return (
        <section
            id={id}
            ref={refPage || refs[id]} // Usa `refPage` se fornecida, caso contrário, pega do contexto
            className={`h-fit text-center flex items-center justify-around w-full pt-16 px-8 xl:py-16 xl:px-32 ${bg ? bg : "bg-gradient-to-b from-marks-600 to-marks-100"
                } flex-col md:flex-row space-y-5 xl:space-x-4`}
        >
            {children}
        </section>
    );
};

export default Section;
