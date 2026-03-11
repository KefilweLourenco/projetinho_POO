import { Animal } from "./Animal";
 
export class Ave extends Animal {
    
    private _voo!: boolean;

    constructor(){ super();}

    //get (retorna o valor)
    public get voo(): boolean{
        return this._voo;
    }
 
    //set (guarda)
    public set voo(voo: boolean){
        this._voo = voo;
    }

    public visualizar(): void {
        super.visualizar();
        console.log(`Voo: ${this._voo}`);
    }

}