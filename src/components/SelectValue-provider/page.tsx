"use client"

import { createContext, useContext } from "react"

type SelectorValue = {
    Elements: {
        Value: string
    }
};

const defaultValue: SelectorValue = {
    Elements: {
        Value: "Affenpinsher"
    }
}

const ValueContext = createContext<SelectorValue>(defaultValue);

export const ValueProvider = ({children}: {children: React.ReactNode}) =>{
    return(
        <ValueContext.Provider value={defaultValue}>
            {children}
        </ValueContext.Provider>
    );
};

export const useValue = () => useContext(ValueContext);

