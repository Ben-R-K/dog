"use client"
import { createContext, useContext, useState } from "react";
import { Select } from "@radix-ui/react-select"

export const SelectorContext = createContext<string>("african");

export function Selector({children}: {children: React.ReactNode;}) {
    const[SelectedBreed, SetSelectedBreed] = useState("");
    console.log(SelectedBreed.toString());
   return(
    <SelectorContext.Provider value={SelectedBreed}>
       <Select onValueChange={(Value) => SetSelectedBreed(Value)}>
    {children}
    </Select>
    </SelectorContext.Provider>
    );
}

 export function BreedContext(){
    let {SelectedBreed} =useContext(SelectorContext);
    return {
        SelectedBreed
    }
}