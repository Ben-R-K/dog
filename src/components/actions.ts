"use server"


export async function GetImageFromServer(breed : string): Promise<string[]> {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
    const data = await response.json();
    const images = Object.values(data.message);
    return images;    
}