import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Client } from '../models/client';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrl: './conteudo.component.scss'
})
export class ConteudoComponent {
  valorInput = '';
  @Input() id: any;
  meuMetodo() {
    alert('olá')
  }
  @Input()clientes!: Array<Client>;
  tela = 'formulario';
  @Output() trocarTituloEvent = new EventEmitter<string>();
  @Output() cadastroClienteEvent = new EventEmitter<Client>();
  trocarTitulo(titulo: string) {
    this.trocarTituloEvent.emit(titulo)
  }
  cadastroCliente(cliente: Client) {
    console.log(cliente)
    this.cadastroClienteEvent.emit(cliente);
  }

  trocarTela(telaValue: string) {
    this.tela = telaValue;
  }
}
