"use client"
import { createContext, useState } from "react";
import { Select } from "@radix-ui/react-select";


export const SelectorContext = createContext<string>("african");

export const SelectorProvider = ({children}: {children: React.ReactNode}) => {
    const[SelectedBreed, SetSelectedBreed] = useState("");
    return(
        <SelectorContext.Provider value={SelectedBreed}>
            <Select onValueChange={(Value) => SetSelectedBreed(Value)}>
            {children}
        </Select>   
        </SelectorContext.Provider>
    );
};
