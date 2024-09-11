const lista = [1,2,3,4,5];

// console.log(lista);
lista.push(6)
// console.log(lista)
lista.unshift(0)
// console.log(lista)
lista.pop()
// console.log(lista)
lista.shift()
// console.log(lista)

const obj = {id:4};
const lista2 = [{id:1}, {id:2}, {id:3}, obj]
// console.log(lista2.find(item =>item.id == 2))
// console.log(lista2.findIndex(item => item.id == 3))
// console.log(lista2.indexOf(lista2[2]))
// console.log(lista2.indexOf(obj))
// console.log(lista2.some(item => item.id == 1))
// console.log(lista2.every(item => item.id == 1))
// console.log(lista2.includes(obj))

const lista3 = [{id:1, ativo: true},{id:2, ativo: true},{id:3, ativo: true},{id:4, ativo: false}]
// console.log(lista3.filter(item => item.ativo == true))

for (let index = 0; index <10 ; index++){
    // console.log(index)
}
for(const item of lista3){
    // console.log(item);
}
for (const index in lista3){
    // console.log(index, lista3[index])
}
lista3.forEach(item=> {
    // console.log(item)
})
let count = 0
while(count < 10){
    count++
    // console.log(count);
}
// const meuInput = prompt('este é meu input');
// console.log(meuInput)

//objects

let pessoa = {
    id:1,
    nome:'Odair',
    idade: 22,
    saudacoes: () => {
        console.log(`Olá meu nome é ${pessoa.nome}`)
    }
}

pessoa.saudacoes()
console.log(pessoa)

let carro = new Object();
carro.placa = 'minhaPlaca';
carro.marca = "minhaMarca";
console.log(carro)