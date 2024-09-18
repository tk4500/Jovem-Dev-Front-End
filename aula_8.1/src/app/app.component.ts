import { Component } from '@angular/core';
import { Client } from './models/client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Trier Sistemas';
  id = 0;
  clientes: Array<Client> = [];

cadastroCliente(cliente: Client) {
  console.log(cliente)
  this.clientes.push(cliente);
  this.id++;
  }

trocarTitulo(titulo: string) {
this.title = titulo;
}
}
