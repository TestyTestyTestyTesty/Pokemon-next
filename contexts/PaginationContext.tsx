import { createContext, useState } from "react";
interface props {
    value: number;
    label: number;
}
interface ThemeContext {
    perPage: props;
    perPageToggler?: (number: props) => void;
}

const initialState = {
    perPage: {
        value: 25,
        label: 25,
    },
};

interface ProviderProps {
    children: React.ReactNode;
}

export const PaginationContext = createContext<ThemeContext>(initialState);

export const PaginationContextProvider = ({ children }: ProviderProps) => {
    const [perPage, setPerPage] = useState({ value: 25, label: 25 });
    const perPageToggler = (number: props) => {
        setPerPage(number);
    };
    return (
        <PaginationContext.Provider value={{ perPage, perPageToggler }}>
            {children}
        </PaginationContext.Provider>
    );
};
