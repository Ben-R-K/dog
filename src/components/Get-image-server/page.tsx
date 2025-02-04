
export async function GetBreedServer(breed : string) {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
    const data = await response.json();
    const images = Object.keys(data);
    return(
        images.map((picture) => {
            return <img key={picture} src={picture} width="400"></img>
        })
    );
}