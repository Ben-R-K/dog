"use client"
import { useState } from "react";
import { Select } from "@radix-ui/react-select"

export const Selector = ({children}: {children: React.ReactNode;}) => {
    const[SelectedBreed, SetSelectedBreed] = useState("");
    console.log(SelectedBreed.toString());
   return(
       <Select onValueChange={(Value) => SetSelectedBreed(Value)}>
    {children}
    </Select>
   );
}