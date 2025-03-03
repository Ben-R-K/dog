"use client"
import { useContext, useState} from "react";
import { SelectorContext } from "../Context-provider/page";
import { Select } from "@radix-ui/react-select"


export function Selector({children}: {children: React.ReactNode;}) {
    const[SelectedBreed, SetSelectedBreed] = useState("");
    console.log(SelectedBreed.toString());
   return(
    <Select onValueChange={(Value) => SetSelectedBreed(Value)}>
      {children}
    </Select>
    );
}