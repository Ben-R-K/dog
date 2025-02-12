"use client"
import { useState } from "react";
import { Select } from "@radix-ui/react-select"



export function Selector({children}: {children: React.ReactNode;}) {
    const[SelectedBreed, SetSelectedBreed] = useState("");
    console.log(SelectedBreed.toString());
   return{
    SelectedBreed,
    render: (
       <Select onValueChange={(Value) => SetSelectedBreed(Value)}>
    {children}
    </Select>)}
}