import readlinesync = require("readline-sync");
import { Animal } from "./src/model/Animal";
 
export function main() {
 
    const cadastrarAnimal = Array<Animal>();
 
    let continuar = true;
 
    // const animal = new Animal("Gato", 2, "Felino", "Cinza");
    // const animal2 = new Animal("Cachorro",6, "Canino", "Preto");
 
    // animal.nome = "Capivara"
 
    // console.log(animal.nome)
    // console.log(animal.idade)
 
    do{
        const animal = new Animal();
 
        animal.nome = readlinesync.question("Digite o nome do animal: ");  
        animal.idade = readlinesync.questionInt("Digite a idade do animal: ");
        animal.especie = readlinesync.question("Digite a especie do animal: ");
        animal.cor = readlinesync.question("Digite a cor do animal: ");
       
        cadastrarAnimal.push(animal)

        animal.visualizar()

        continuar = readlinesync.keyInYNStrict("Deseja cadastrar outro animal?: ");
 
    }while(continuar){
    
    for(let animal of cadastrarAnimal){
        console.log(`Nome ${animal.nome} - Idade ${animal.idade} - Especie ${animal.especie} - Cor ${animal.cor}`);
    }
    
    }
 
 
 
}
 
main();