"use client"

import { useEffect, useState } from "react";
import { SelectGroup, SelectItem} from "@/components/ui/select";

type Breed = {
    BreedName: string;
    SubBreeds: [];
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
            const rawdata = await response.json();
            const entries = Object.entries(rawdata.message);
            setBreeds(entries);
            console.log(entries);
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
});

    if(error) return error;
    if(loading) return loading;

    return(
        <SelectGroup>
            {
            Array.isArray(breeds) ? breeds.map((breed : Breed) => {
                if(breed.SubBreeds.length > 0){
                    breed.SubBreeds.forEach(subbreed => {
                        return <SelectItem key={breed.BreedName + subbreed} value="Dog">{JSON.stringify(breed.BreedName) + subbreed}</SelectItem>
                    });
                } else{
                    return <SelectItem key={breed.BreedName}  value="Dog">{JSON.stringify(breed.BreedName)}</SelectItem>
                }
             }) : <SelectItem value="F">Failed</SelectItem> 
            }
        </SelectGroup>
    );
};

