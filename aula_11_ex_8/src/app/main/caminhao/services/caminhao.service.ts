import { Injectable } from '@angular/core';
import { Caminhao } from '../../models/caminhao';

@Injectable({
  providedIn: 'root'
})
export class CaminhaoService {
  caminhoes: Array<Caminhao> = [];
  constructor() { }
  addCaminhao(caminhao: Caminhao){
    this.caminhoes.push(caminhao);
    console.log(caminhao);
  }
  listCaminhoes(){
    console.log(this.caminhoes)
    return this.caminhoes;
  }
}
