function printString(texto){
    console.log(texto);
}
var concat = (string1, string2) => {
    return `${string1} de ${string2}`
}
var calculo = (a,b,c) => {
    return (a+b)/c
}
function format(numero){
    return numero.toFixed(2)
}
const a = 40
const b = 5
const c = 2

const string1 = 'Aula'
const string2 = 'Frontend'

printString(format(calculo(a,b,c)))
printString(concat(string1,string2))
printString(string1.substring(0,2))