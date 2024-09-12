function envia(event){
    
    const input = document.getElementById('nome');
    console.log(input)
    console.log(input.value)
    const labelTopo = document.getElementsByClassName('label-topo')
    console.log(labelTopo);

    const forms = document.getElementsByTagName('form')
    console.log(forms)

    const selector = document.querySelector('div');
    console.log(selector);

    const selectorAll = document.querySelectorAll('div');
    console.log(selectorAll)

    console.log(event)
    event.preventDefault()
}

function manipulando(event){

    const labelTopo = document.getElementsByClassName('label-topo')[0]
    console.log(labelTopo);

    labelTopo.textContent = 'Hello World'
    labelTopo.innerHTML = '<a href="">Teste </a>'
    labelTopo.style.backgroundColor = 'pink';


    event.preventDefault()
}

function atualizaLabelInput(){
    const input = document.getElementById('nome');
    const labelInput = document.getElementById('labelInput');

    const divVazia = document.getElementById('divVazia');
    const minhaNovaLabel = document.createElement('label');
    minhaNovaLabel.textContent = input.value;

    const labelVelha = divVazia.getElementsByTagName('label').item(0);
    if (labelVelha != null){
        divVazia.removeChild(labelVelha)
    }

    divVazia.appendChild(minhaNovaLabel)

    labelInput.textContent = input.value;
}