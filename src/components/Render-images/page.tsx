
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { GetBreedServer } from "../Get-image-server/page";

export const RenderImages = async (breed : string) => {
    const [showImages, setShowImages] = useState(false);
    
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
    const data = await response.json();
    const images = Object.keys(data);

    return(
        <div>
        <Button className="self-stretch text-white" onClick={() => setShowImages(true)}>Søg billeder</Button>
        <ScrollArea>
            
        </ScrollArea>
        </div>        
    );
}