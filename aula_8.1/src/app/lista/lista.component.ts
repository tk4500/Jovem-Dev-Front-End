import { Component, Input } from '@angular/core';
import { Client } from '../models/client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent {

constructor(private route: Router){}

editarCampo(cliente: any, campo: string) {
  cliente.editing[campo] = true;
}

deletaCliente(i: number) {
 this.clientes.splice(i,1);
}
clientes: Array<Client> = [
  {
    id: 1 ,
    nome: "jacinto",
    email: "",
    fone: "",
    editing: {
      id: false,
      nome: false,
      email: false,
      fone: false
    },
  },
  {
    id: 2 ,
    nome: "machado",
    email: "",
    fone: "",
    editing: {
      id: false,
      nome: false,
      email: false,
      fone: false
    },
  },
  {
    id: 3 ,
    nome: "akino",
    email: "",
    fone: "",
    editing: {
      id: false,
      nome: false,
      email: false,
      fone: false
    },
  },
];

  atualizaCliente(cliente: Client) {
    console.log("Cliente salvo=> " + cliente)
    cliente.editing.id = false;
    cliente.editing.nome = false;
    cliente.editing.email = false;
    cliente.editing.fone = false;

  }

  rotear(id: number) {
    this.route.navigateByUrl(`clientes/formulario/${id}`);
    }
}
