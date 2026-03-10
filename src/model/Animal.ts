export class Animal{
 
    //informações sensiveis, nao pode vazar, por isso se torna privado
    private _nome!: string; // com o ! ele deixar criar vazio para preencher depois
    private _idade!: number;
    private _especie!: string;
    private _cor!: string;
 
    // constructor (nome: string, idade: number, especie: string, cor: string){
    //     this._nome = nome; //pega a informação de fora e guarda em nome
    //     this._idade = idade;
    //     this._especie = especie;
    //     this._cor = cor;
    // }
 
    constructor(){};
 
    //get pega o valor do atribuido
    public get nome(): string{
        return this._nome;
    }
    //set atualiza o valor do atributo (Pede um nome para o usuario e altera pelo nome que ja tem la)
    public set nome(valor: string){
        this._nome = valor;
    }
 
    public get idade(): number{
        return this._idade;
    }
 
    public set idade(valor: number){
        this._idade = valor;
    }
 
    public get especie(): string{
        return this._especie;
    }
 
    public set especie(valor: string){
        this._especie = valor;
    }
 
    public get cor(): string{
        return this._cor;
    }
 
    public set cor(valor: string){
        this._cor = valor;
    }
    public visualizar(): void{
        console.log("Informacoes do animal cadastrado: ")
        console.log(`Nome: ${this._nome}`);
        console.log(`Idade: ${this._idade}`);
        console.log(`Especie: ${this._especie}`);
        console.log(`Cor: ${this._cor}`);
    }
}