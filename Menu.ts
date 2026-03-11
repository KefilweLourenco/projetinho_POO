import readlinesync = require("readline-sync");
import { Animal } from "./src/model/Animal";
import { Mamifero } from "./src/model/Mamifero";
import { Ave } from "./src/model/Ave";
 
export function main() {
 
    const cadastroAnimal = Array<Animal>();
 
    let continuar: boolean = true;
    let opcao: number;

 
    // const animal = new Animal("Gato", 2, "Felino", "Cinza");
    // const animal2 = new Animal("Cachorro",6, "Canino", "Preto");
 
    // animal.nome = "Capivara"
 
    // console.log(animal.nome)
    // console.log(animal.idade)
 
    do{
        console.log("\nMENU \n1 - Cadastrar Animal \n2 - Listar Animais");
        opcao = readlinesync.questionInt("Digite a opcao desejada: ");

        switch(opcao){
            case 1:
                console.log("Cadastre o Animal");
                console.log("1 - Mamifero\n2 - Ave");
                let opcaoAnimal = readlinesync.questionInt("Digite a opcao desejada: ");
                let animal: Animal;

                animal = opcaoAnimal == 1 ? new Mamifero() : new Ave();

                animal.nome = readlinesync.question("Digite o nome do animal: ");
                animal.idade = readlinesync.questionInt("Digite a idade do animal: ");
                animal.especie = readlinesync.question("Digite a especie do animal: ");
                animal.cor =  readlinesync.question("Digite a cor do anuimal: ");

                if(animal instanceof Mamifero){
                    animal.dente = readlinesync.question("Digite o dente do animal: ");
                }
                if(animal instanceof Ave){
                    animal.voo = readlinesync.keyInYNStrict("O animal voa?: ");
                }

                cadastroAnimal.push(animal);

            break;
            case 2:
            
            for(let animal of cadastroAnimal){
                animal.visualizar();
            }

            break;
        }
        /*const animal = new Animal();
 
        animal.nome = readlinesync.question("Digite o nome do animal: ");  
        animal.idade = readlinesync.questionInt("Digite a idade do animal: ");
        animal.especie = readlinesync.question("Digite a especie do animal: ");
        animal.cor = readlinesync.question("Digite a cor do animal: ");
       
        cadastrarAnimal.push(animal)

        animal.visualizar()*/

        continuar = readlinesync.keyInYNStrict("Deseja voltar para o menu?: ");
 
    }while(continuar){
    
    }
  
}
 
main();