import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.scss'
})
export class CabecalhoComponent {
resultadoPesquisa(pesquisa: string) {
  console.log(pesquisa)
}
  @Input() tituloDoPai?: string;
  titulo = "Trier Sistemas";
  imagem = "https://www.triersistemas.com.br/imagens/logo_topo.png";
}
