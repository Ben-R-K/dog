import { Input } from "@/components/ui/input";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { BreedsServer } from "@/components/Breeds-server/page";
import { GetBreedServer } from "@/components/Get-image-server/page";
import { Select, SelectTrigger, SelectValue, SelectContent } from "@radix-ui/react-select";
import { Button } from "@/components/ui/button";

export default function Home({Breed}: MainBreedValue) {
  return (
    <div className="min-h-screen m-44">
      <main className="grid grid-rows-3 grid-flow-col gap-6 justify-items-center">
        <Input className="max-w-60" placeholder="Antal billeder"/>
       <Select>
        <SelectTrigger className="w-60">
          <SelectValue className="text-slate-900" placeholder="Velg en hunderace"/>
        </SelectTrigger>
        <SelectContent>
         <BreedsServer/>
        </SelectContent>
        </Select>
        <Button className="font-semibold min-w-60">Søg efter hunderacen</Button>
        <ScrollArea>
          {GetBreedServer("affenpinscher")}
        </ScrollArea>
      </main>
    </div>
  );
}



