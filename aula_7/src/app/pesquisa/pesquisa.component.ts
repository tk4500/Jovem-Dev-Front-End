import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrl: './pesquisa.component.scss'
})
export class PesquisaComponent {
  pesquisa = '';
  @Output() pesquisaEvent = new EventEmitter<string>();
  resultadoPesquisa(titulo: string) {
  this.pesquisaEvent.emit(titulo)
}
}
