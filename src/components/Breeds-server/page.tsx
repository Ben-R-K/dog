import { SelectGroup, SelectItem} from "@/components/ui/select";

export const BreedsServer = async () =>{
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const rawdata = await response.json();
    const entries = Object.keys(rawdata.message);
            const breeds = Object.keys(rawdata.message);
            const subbreeds = Object.values(rawdata)
            console.log(entries);
            return(
                <SelectGroup>
                            {
                            Array.isArray(breeds) ? breeds.map((breed) => {
                                    subbreeds.forEach(subbreed => {
                                        return <SelectItem key={breed + subbreed} value="Dog">{subbreed + "-" + breed}</SelectItem>
                                    });
                                    return <SelectItem key={breed}  value="Dog">{breed}</SelectItem>
                             }) : <SelectItem value="F">Failed</SelectItem> 
                            }
                </SelectGroup>
            );
}