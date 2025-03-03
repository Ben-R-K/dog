

export async function GetImageFromServer(breed : string) {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
    const data = await response.json();
    const images = Object.values(data.message);
    console.log(breed)
    return(
        images.map((picture) => {
            return <img src={picture} width="400"></img>
        })
    );}