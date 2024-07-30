const prompt = require("prompt-sync")();

//Lista de materias
const materias = [];


//Função materia
function materia(materia, faltas){
    this.materia = materia;
    this.faltas = faltas
    this.notas = [];
    
    this.addnotas = function() {
        for (let i = 0; i < 3; i++) {
            let aval = 0;
            do{
                aval  = +prompt(`${i+1} - Digite a nota: `);
            }while(isNaN(aval) || aval === null);
            this.notas.push(aval);
            console.log("Nota adicionada!");
            
        }
        console.log("---- Notas adicionadas ----");
        this.mostrarNotas();
        console.log("**********************************");
    };

    this.mostrarNotas = function(){
        
        this.notas.forEach(e => {
            let pos = this.notas.indexOf(e);
            console.log(`${pos + 1} - ${e}`);
        });
    }

    this.calcularMedia = function(){
        let media = 0;
        let nt = 0;
        for (let i = 0; i < this.notas.length; i++) {
            nt += this.notas[i]    
        }

        media = nt / this.notas.length;
        return media.toFixed(1); 
    }

    this.getFaltas = function(){
        return this.faltas;
    }
}

//Função para saber se é String
function ehString(){
    let nome = prompt("Digite o nome da materia ou 'sair' para sair: ");
    while(isNaN(nome.toLowerCase()) === false || nome === null){
        nome = prompt("Digite dados válidos.");
    }
    return nome;
}

//Função para saber se é numero
function ehNum(){
    let num;
    do{
        num = +prompt("Digite a quantidade de faltas: ");
    }while(isNaN(num));

    if(num === null) num = 0;
    
    return num;
}

//Função criar e adicionar materia
function criarMateria(){
    
    while (true){
        const nomeMateria = ehString();
        if(nomeMateria.toLowerCase() === "sair"){
            console.log("*** Criação de materias finalizada! ***")
            break;
        }
       
        const qtdFaltas = ehNum();
        const novaMateria = new materia(nomeMateria, qtdFaltas);
        novaMateria.addnotas();
        materias.push(novaMateria);
        console.log("Materia criada!")  
        console.log("**********************************")  
        console.log("");  

    }
}


const nomeDoAluno = prompt("Digite o nome do aluno: ");

//Ação para criar materia
criarMateria();
console.log("----------------------------------------------");
console.log("");
console.log("");


//Ação de calcular a média e as faltas
let media = 0.1;
let falt = 0;
console.log(`ALUNO: ${nomeDoAluno}`)
materias.forEach(item => {
    media = item.calcularMedia();
    falt = item.faltas;
    
    //Ação de exibir média e  resultado baseado nas faltas e notas

    console.log(`MATERIA: ${item.materia}`);
    if(falt > 5){
        console.log(`Sua media é: ${media}`)
        console.log(`${falt} FALTA(S). Reprovado por faltas!`);
        console.log("###########################################")
        console.log("")
    }else {
        item.mostrarNotas()
        if(media < 7){
            console.log(`Sua média é: ${media}`);
            console.log("Reprovado por nota!");
            console.log("###########################################");
            console.log("");
        }else{
            console.log(`Sua média é: ${media}`);
            console.log("Aprovado!");
            console.log("###########################################");
            console.log("");
        }
    }

});






