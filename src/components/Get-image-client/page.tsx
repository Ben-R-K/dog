"use client"
import { SelectorContext } from "../Context-provider/page";
import { useContext, useState, useEffect } from "react";
import { Button } from "../ui/button";
import { GetImageFromServer } from "../actions";
import { useTransition } from "react";

export function MainButton(){
    let [isPending, startTransition] = useTransition();
    return <Button id="MainButton" onClick={()=> startTransition(()=> GetImageFromServer('african'))} className="font-semibold max-w-60">Søg efter hunderacen</Button>
}

export  function GetImageFromClient() {
    const [Images, setImages] = useState(Array);
    const breed = useContext(SelectorContext);
    useEffect(() =>{
        async function fetchImages() {
            const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
            const data = await response.json();
            const images = Object.values(data.message);
            console.log(images);
            setImages(images);
        }
        fetchImages();
    }, [])
   
    return(
        Images.map((picture) => {
            console.log(picture);
            return <img key={picture} src={picture} width="400"></img>
        })
    );
}