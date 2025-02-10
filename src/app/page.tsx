import { Input } from "@/components/ui/input";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { BreedsSelector } from "@/components/Breed-selector/page";
import { RenderImages } from "@/components/Render-images/page";
import { Button } from "@/components/ui/button";
import { SelectorValue } from "@/components/Selector-value/page";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="grid grid-flow-col grid-rows-3 gap-8 row-start-2 items-center sm:items-start">
        <Input className="max-w-60" placeholder="Antal billeder" content="aff"/>
        <BreedsSelector/>
        <ScrollArea>
          <RenderImages breed={SelectorValue.instance.get()}/>
        </ScrollArea>
      </main>
    </div>
  );
}

