import { FC } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { GetBreedServer } from "../Get-image-server/page";
import { TemplateString } from "next/dist/lib/metadata/types/metadata-types";

    interface RenderProps {
        breed : string | TemplateString
     }

export const RenderImages : FC<RenderProps> = ({breed}) => {
    let showImages : boolean = false;
    return(
        <div>
        <ScrollArea>
            if({showImages}) 
            {GetBreedServer(`${breed}`)}
        </ScrollArea>
        </div>        
    );
}
RenderImages.displayName = "RenderImages";
