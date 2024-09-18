import { Component, Input } from '@angular/core';
import { Client } from '../models/client';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent {


editarCampo(cliente: any, campo: string) {
  cliente.editing[campo] = true;
}

deletaCliente(i: Number) {
 this.clientes.splice(i,1);
}
@Input() clientes: any;

  atualizaCliente(cliente: Client) {
    console.log("Cliente salvo=> " + cliente)
    cliente.editing.id = false;
    cliente.editing.nome = false;
    cliente.editing.email = false;
    cliente.editing.fone = false;

  }
}
