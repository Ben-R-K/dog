"use client"
export class SelectorValue{
    private  static instance: SelectorValue;
    private value = "";

    private constructor(){}
    
    public static getInstance(): SelectorValue {
        if(!SelectorValue.instance) {
            SelectorValue.instance = new SelectorValue();
        }
        return SelectorValue.instance;
    }

    public get(): string {
        return this.value;
    }
   public set(element: string): void{
        this.value = element;
    }
}