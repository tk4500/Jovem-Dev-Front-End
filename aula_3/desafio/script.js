const n = Number(prompt('Quantos Alunos tem dentro da sala?'));
var alunos = [];
// função criada para não utilizar metodos não vistos(map)
function toNome(alunos) {
    let nomes = [];
    alunos.forEach(aluno => {
        nomes.push(aluno.nome)
    })
    return nomes
}
// função criada para não utilizar metodos não vistos(join)
function toString(nomes){
    let string = '';
    nomes.forEach(nome=>{
        string += nome + ', ';
    })
    return string.substring(0, (string.length-2))
}

var getNome = () => {
    return prompt('Qual o nome do Aluno?');
}
var getNotas = () => {
    let notas = [];
    let nNotas = prompt('Quantas notas o Aluno possui?');
    while (nNotas > 0) {
        notas.push(prompt('Digite a nota do aluno'))
        nNotas--
    }
    return notas
}
function getAluno() {
    return {
        nome: getNome(),
        notas: getNotas(),
        getMedia: () => {
            let soma = 0;
            aluno.notas.forEach(nota => {
                soma += Number(nota);
            })
            return soma / (aluno.notas.length)
        }
    }
}
for (let index = 0; index < n; index++) {
    alunos.push(getAluno())
}
// let aprovados = alunos.filter(aluno => aluno.getMedia() >= 7).map(aluno=> aluno.nome).join(', ')
// let reprovados = alunos.filter(aluno => aluno.getMedia() < 7).map(aluno=> aluno.nome).join(', ')
let aprovados = toString(toNome(alunos.filter(aluno => aluno.getMedia() >= 7)));
let reprovados = toString(toNome(alunos.filter(aluno => aluno.getMedia() < 7)));


console.log(`Os alunos Aprovados foram: ${aprovados}, enquanto os reprovados foram: ${reprovados}`)

