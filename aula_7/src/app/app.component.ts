import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Trier Sistemas';
  id = 0;
  clientes: any[] = [];

cadastroCliente(cliente: Object) {
  this.clientes.push(cliente);
  this.id++;
  }

trocarTitulo(titulo: string) {
this.title = titulo;
}
}
