import { ScrollArea } from "@/components/ui/scroll-area";
import { GetBreedServer } from "../Get-image-server/page";
import { useValue } from "../SelectValue-provider/page";

export const RenderImages = () => {
    const Value = useValue();
    return(
        <ScrollArea> 
            {GetBreedServer(`${Value.Elements.Value}`)}
        </ScrollArea>       
    );
}
RenderImages.displayName = "RenderImages";
