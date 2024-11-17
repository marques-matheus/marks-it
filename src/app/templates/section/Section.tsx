import { useMyContext } from "@/app/context/Context";
import React, { MutableRefObject } from "react";

interface SectionProps {
    id: string;
    children: React.ReactNode;
    refPage?: MutableRefObject<HTMLElement | null>; // Opção para passar uma ref externa
    bg?: string; // Cor de fundo opcional
    classes?: string

}

const Section: React.FC<SectionProps> = ({ id, children, refPage, bg, classes }) => {
    const { refs } = useMyContext();

    return (
        <section
            id={id}
            ref={refPage || refs[id]} // Usa `refPage` se fornecida, caso contrário, pega do contexto
            className={`w-full pt-16 px-8 xl:py-16 xl:px-32 ${bg}  xl:space-x-4 ${classes}`}
        >
            {children}
        </section>
    );
};

export default Section;
