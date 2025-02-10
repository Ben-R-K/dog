
export class SelectorValue{
    private value: string = "";
    public get(): string {
        return this.value;
    }
   public set(element: string): void{
        this.value = element;
    }

    static instance: SelectorValue = new SelectorValue();

    private constructor(){}
}