import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Client } from '../models/client';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {
  id = 0;
  constructor(private route: ActivatedRoute){
    this.route.params.subscribe((valores)=>{
      console.log(valores);
      const idCliente = valores['id'];
      console.log(idCliente);
    })
  }
  Cliente = {
    nome: '',
    email: '',
    fone: '',

  }
  @Output() cadastroEvent = new EventEmitter<Client>()
  meuMetodo(){
    console.log(this.id)
    let cliente: Client = {
      id: this.id,
      nome: this.Cliente.nome,
      email: this.Cliente.email,
      fone: this.Cliente.fone,
      editing: {id: false, nome:false, email: false, fone: false}
    }
    console.log(cliente)
    this.cadastroEvent.emit(cliente);
    this.id++;
  }
}

