
var listaTarefas = [];



function atualizaTarefas(){
    const tarefas = document.getElementById('tarefas')
    tarefas.innerHTML = '';
    //console.log('tarefas: ', tarefas)
    const divs = tarefas.getElementsByTagName('div')
    //console.log('todas divs: ', divs)
    for(let a of divs){
        console.log('div => ', a);
        tarefas.removeChild(a)
    }
    //console.log(tarefas)
    for(let index in listaTarefas){
        tarefas.appendChild(tarefaHtml(listaTarefas[index], index))
    }



}
function postar(){

    
    let tarefa = {
        valor: null,
        concluida: false
    }
    const tarefaInput = document.getElementById('tarefa')
    tarefa.valor = tarefaInput.value
    
    listaTarefas.push(tarefa)
    atualizaTarefas()
}


function tarefaHtml(tarefa, index){

    let htmlTarefa = document.createElement('div');
    htmlTarefa.id = index;
    if (tarefa.concluida){
        htmlTarefa.innerHTML = `<label>\n${tarefa.valor}\n</label>\n<input type="checkbox" checked id="${index}" onchange="concluida(event)" >\n<button id="${index}" onclick="remover(event)">\nremover\n</button>`
    }else{
    htmlTarefa.innerHTML = `<label>\n${tarefa.valor}\n</label>\n<input type="checkbox" id="${index}" onchange="concluida(event)" >\n<button id="${index}" onclick="remover(event)">\nremover\n</button>`
    } 
    return htmlTarefa
}

function concluida(event){
    listaTarefas[event.srcElement.id].concluida = event.srcElement.checked
    //console.log(listaTarefas)
}

function remover(event){
    listaTarefas.splice((event.srcElement.id),1)
    atualizaTarefas()
}
function concluidos(){
    listaTarefas = listaTarefas.filter(tarefa => !tarefa.concluida)
    console.log(listaTarefas)
    atualizaTarefas()
}
function naoConcluidos(){
    listaTarefas = listaTarefas.filter(tarefa => tarefa.concluida)
    console.log(listaTarefas)
    atualizaTarefas()
}
