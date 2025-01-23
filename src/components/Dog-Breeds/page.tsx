"use client"

import { useEffect, useState } from "react";
import { SelectGroup, SelectItem, SelectLabel} from "@/components/ui/select";

type Breed = {
    BreedName: string;
    SubBreed: string;
};

export const BreedsClient = () => {
 const [breeds, setBreeds] = useState<Breed[]>([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState("");

 useEffect(() => {
    async function fetchBreeds() {
        try{
            const response = await fetch("https://dog.ceo/api/breeds/list/all");

            if (!response.ok) throw new Error("Faild to fetch dog breed list");
            const data = await response.json();
            setBreeds(data);
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
            {breeds.map((breed) => (
                <SelectItem key={breed.BreedName} value="">breed.BreedName</SelectItem>
            ))}
        </SelectGroup>
    );
}

