import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {
  @Input() id: any;
  Cliente = {
    nome: '',
    email: '',
    fone: ''
  }
  @Output() cadastroEvent = new EventEmitter<Object>()
  meuMetodo(){

    let cliente = {
      id: this.id,
      nome: this.Cliente.nome,
      email: this.Cliente.email,
      fone: this.Cliente.fone,
      editing: {id: false, nome:false, email: false, fone: false}
    }
    this.id++;
    this.cadastroEvent.emit(cliente);
  }
}

