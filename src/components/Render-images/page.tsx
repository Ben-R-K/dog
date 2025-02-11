import { ScrollArea } from "@/components/ui/scroll-area";
import { GetBreedServer } from "../Get-image-server/page";
import { SelectorValue } from "../Selector-value/page";

interface BreedValue {
    Value: SelectorValue;
}
export const RenderImages = ({Value}: BreedValue) => {
    return(
        <ScrollArea> 
            {GetBreedServer(`${Value}`)}
        </ScrollArea>       
    );
}
RenderImages.displayName = "RenderImages";
