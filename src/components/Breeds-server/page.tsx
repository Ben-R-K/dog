import { SelectGroup, SelectItem} from "@/components/ui/select";

export const BreedsServer = async () =>{
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        const rawdata = await response.json();
            const breeds = Object.keys(rawdata.message);
            return(
                <SelectGroup>
                    {Array.isArray(breeds) ? breeds.map((breed) => {
                            return <SelectItem key={breed} value={breed.toString()}>{breed}</SelectItem>
                     }) : <SelectItem value="F">Failed</SelectItem>}
                </SelectGroup>
            );
}