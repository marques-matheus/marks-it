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
    state: string; // Estado global
    setState: React.Dispatch<React.SetStateAction<string>>; // Atualizador do estado global
}

// Criação do contexto
const MyContext = createContext<MyContextType | undefined>(undefined);

// Provedor do contexto
export const ContextProvider = ({ children }: { children: ReactNode }) => {
    // Armazena referências dinamicamente
    const refs: Record<string, MutableRefObject<HTMLElement | null>> = {
        section5: useRef<HTMLElement | null>(null),
        section6: useRef<HTMLElement | null>(null),
        section15: useRef<HTMLElement | null>(null),
        // Adicione outras seções, caso necessário
    };

    const getOrCreateRef = (key: string): MutableRefObject<HTMLElement | null> => {
        if (!refs[key]) {
            refs[key] = React.createRef();
        }
        return refs[key];
    };

    const [state, setState] = useState<string>('inicial');

    return (
        <MyContext.Provider value={{ refs, getOrCreateRef, state, setState }}>
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
