// src/context/MyContext.tsx

import React, {
    createContext,
    useContext,
    useRef,
    useState,
    ReactNode,
    MutableRefObject,
} from 'react';

interface MyContextType {
    refs: Record<string, MutableRefObject<HTMLElement | null>>; // Referências dinâmicas
    getOrCreateRef: (key: string) => MutableRefObject<HTMLElement | null>; // Método para criar referências dinamicamente
    isOpen: boolean; // Estado global
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>; // Atualizador do estado global
    isScrolling: boolean;
    setIsScrolling: React.Dispatch<React.SetStateAction<boolean>>;
}

// Criação do contexto
const MyContext = createContext<MyContextType | undefined>(undefined);

// Provedor do contexto
export const ContextProvider = ({ children }: { children: ReactNode }) => {
    // Armazena referências dinamicamente
    const refs: Record<string, MutableRefObject<HTMLElement | null>> = {
        home: useRef<HTMLElement | null>(null),
        about: useRef<HTMLElement | null>(null),
        projects: useRef<HTMLElement | null>(null),
        contact: useRef<HTMLElement | null>(null),
        // Adicione outras seções, caso necessário
    };

    const getOrCreateRef = (key: string): MutableRefObject<HTMLElement | null> => {
        if (!refs[key]) {
            refs[key] = React.createRef();
        }
        return refs[key];
    };

    const [isOpen, setIsOpen] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);

    return (
        <MyContext.Provider value={{ refs, getOrCreateRef, isOpen, setIsOpen, isScrolling, setIsScrolling }}>
            {children}
        </MyContext.Provider>
    );
};

// Hook para consumir o contexto
export const useMyContext = () => {
    const context = useContext(MyContext);
    if (!context) {
        throw new Error('useMyContext deve ser usado dentro de um ContextProvider');
    }
    return context;
};
