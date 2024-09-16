import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.scss'
})
export class CabecalhoComponent {
  titulo = "Trier Sistemas";
  imagem = "https://www.triersistemas.com.br/imagens/logo_topo.png";
}
