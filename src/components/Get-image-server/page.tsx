import { TemplateString } from "next/dist/lib/metadata/types/metadata-types";

export async function GetBreedServer(breed : string | TemplateString) {
    const response = await fetch(`https://dog.ceo/api/breed/${breed.toString()}/images`)
    const data = await response.json();
    const images = Object.values(data.message);
    console.log(breed);
    console.log(images);
    return(
        images.map((picture) => {
            return <img key={picture} src={picture} width="400"></img>
        })
    );
}