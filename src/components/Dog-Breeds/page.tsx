"use client"

import { useEffect, useState } from "react";
import { SelectGroup, SelectItem, SelectLabel} from "@/components/ui/select";

type Breed = {
    BreedName: string;
    SubBreeds: [undefined];
};

export const BreedsClient = () => {
 const [breeds, setBreeds] = useState(Object);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState("");

 useEffect(() => {
    async function fetchBreeds() {
        try{
            const response = await fetch("https://dog.ceo/api/breeds/list/all");

            if (!response.ok) throw new Error("Faild to fetch dog breed list");
            const rawdata = await response.json();
            const entries = Object.entries(rawdata.message);
            console.log(entries);
            setBreeds(entries[0]);
            console.log(breeds);
        } catch(err){
            setError("Failed to fetch dog breed list");
            if(err instanceof Error) {
                setError(`Faild to fetch dog breed list: ${err.message}`)
            }
        } finally {
            setLoading(false);
        }
    }
    fetchBreeds();
}, []);

    if(error) return error;
    if(loading) return loading;

    return(
        <SelectGroup>
            <SelectLabel>Hunderacer</SelectLabel>
            {Array.isArray(breeds) ? breeds.map((breed : Breed) => {
                return <SelectItem key={breed.BreedName} value="Dog">{JSON.stringify(breed.BreedName)}</SelectItem>
            }) : <SelectItem value="F">Failed</SelectItem> }
        </SelectGroup>
    );
};

