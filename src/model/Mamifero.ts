import { Animal } from "./Animal";

export class Mamifero extends Animal {

    private _dente!/*quando colocamos o "!" estou jogando a responsabilidade para o atributo*/: string;
    // constructor(dente: string){
    // super()
    // this._dente = dente;
    // }
    constructor(){super();}

    public get dente(): string{
        return this._dente;
    }

    public set dente(valor: string){
        this._dente = valor;
    }

    public visualizar(): void {
        super.visualizar();
        console.log(`Dente: ${this._dente}`);
    }

}