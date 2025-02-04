import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { BreedsServer } from "@/components/Breeds-server/page";
import { GetBreedServer } from "@/components/Get-image-server/page";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="grid grid-flow-col grid-rows-3 gap-8 row-start-2 items-center sm:items-start">
        <Input className="max-w-60" placeholder="Antal billeder"/>
       <Select>
        <SelectTrigger className="w-60">
          <SelectValue className="text-slate-900" placeholder="Velg en hunderace"/>
        </SelectTrigger>
        <SelectContent>
         <BreedsServer/>
        </SelectContent>
        </Select>
        <ScrollArea>
          {GetBreedServer("cdnsl")}
        </ScrollArea>
      </main>
    </div>
  );
}

