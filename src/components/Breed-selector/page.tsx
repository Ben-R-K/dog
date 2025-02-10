
import { Select, SelectTrigger, SelectValue, SelectContent, Value } from "@radix-ui/react-select"
import { BreedsServer } from "../Breeds-server/page"
import { SelectorValue } from "../Selector-value/page"

export const BreedsSelector = () => {
return (
    <Select name="MainValue" onValueChange={() => SelectorValue.instance.set(Value.toString())}>
    <SelectTrigger className="w-60">
        <SelectValue className="text-slate-900" placeholder="Velg en hunderace"/>
    </SelectTrigger>
    <SelectContent>
        <BreedsServer/>
    </SelectContent>
</Select>)
}