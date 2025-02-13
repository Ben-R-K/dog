"use client"
import { ScrollArea } from "@/components/ui/scroll-area";

export const RenderImages = async ({children}: {children: React.ReactNode}) => {
    return(
        <ScrollArea>
            {children}
        </ScrollArea>        
    );
}