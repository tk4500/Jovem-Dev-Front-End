import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  @Input() clientes: any;
  tela = 'formulario';
  @Output() trocarTituloEvent = new EventEmitter<string>();
  @Output() cadastroClienteEvent = new EventEmitter<Object>();
  trocarTitulo(titulo: string) {
    this.trocarTituloEvent.emit(titulo)
  }
  cadastroCliente(cliente: Object) {
    this.cadastroClienteEvent.emit(cliente);
  }

  trocarTela(telaValue: string) {
    this.tela = telaValue;
  }
}
