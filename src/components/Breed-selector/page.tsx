import { Select, SelectTrigger, SelectValue, SelectContent} from "@radix-ui/react-select"
import { BreedsServer } from "../Breeds-server/page"
import { SelectorValue } from "../Selector-value/page"

interface SelectingBreed {
    Value: SelectorValue;
}

export const BreedsSelector = ({Value}: SelectingBreed) => {
return (
    <Select name="MainValue" onValueChange={() => Value}>
    <SelectTrigger className="w-60">
        <SelectValue className="text-slate-900" placeholder="Velg en hunderace"/>
    </SelectTrigger>
    <SelectContent>
        <BreedsServer/>
    </SelectContent>
</Select>)
}