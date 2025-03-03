import { Input } from "@/components/ui/input";
import { SelectContent, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { BreedsServer } from "@/components/Breeds-server/page";
import { SelectorProvider} from "@/components/Context-provider/page";
import { MainButton } from "@/components/Get-image-client/page";
export default function Home() {
  return (
    <div className="min-h-screen m-44">
      <main className="grid grid-rows-1 grid-cols-5 grid-flow-col justify-items-stretch">
        <SelectorProvider>
        <div className="grid grid-rows-3 grid-flow-col gap-6 col-start-3 justify-self-center max-h-48">
        <Input className="max-w-60" placeholder="Antal billeder"/>
       <SelectTrigger className="max-w-60">
          <SelectValue className="text-slate-900" placeholder="Velg en hunderace"/>
        </SelectTrigger>
        <SelectContent>
         <BreedsServer/>
        </SelectContent>
        <MainButton/>
        </div>
        <ScrollArea id="ImageScroll" className="max-h-screen row-span-3 col-span-2 col-start-4 justify-self-end overflow-auto">
          {}
        </ScrollArea>
        </SelectorProvider>
      </main>
    </div>
  );
}

