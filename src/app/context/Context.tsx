// src/context/MyContext.tsx

import React, { createContext, useContext, useRef, useState, ReactNode } from 'react';

interface MyContextType {
    refs?: { [key: string]: React.RefObject<HTMLDivElement> };
    state?: string;
    setState?: React.Dispatch<React.SetStateAction<string>>;
}

// Cria o contexto
const MyContext = createContext<MyContextType | undefined>(undefined);

// Provedor do contexto
export const Context = ({ children }: { children: ReactNode }) => {
    // Gerenciar referências
    const refs = {
        section1: useRef<HTMLDivElement>(null),
        section2: useRef<HTMLDivElement>(null),
        section3: useRef<HTMLDivElement>(null),
    };

    // Gerenciar estado
    const [state, setState] = useState('inicial');

    return (
        <MyContext.Provider value={{ refs, state, setState }}>
            {children}
        </MyContext.Provider>
    );
};

// Hook para consumir o contexto
export const useMyContext = () => {
    const context = useContext(MyContext);
    if (!context) {
        throw new Error('useMyContext deve ser usado dentro de um Context');
    }
    return context;
};
