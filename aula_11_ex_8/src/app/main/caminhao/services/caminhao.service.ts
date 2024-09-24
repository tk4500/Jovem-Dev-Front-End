import { Injectable } from '@angular/core';
import { Caminhao } from '../../models/caminhao';

@Injectable({
  providedIn: 'root'
})
export class CaminhaoService {
  caminhoes: Array<Caminhao> = [];
  id = 0;
  constructor() { }
  addCaminhao(caminhao: Caminhao){
    caminhao.id = this.id.valueOf();
    this.caminhoes.push(caminhao);
    this.id++;
  }
  listCaminhoes(){
    return this.caminhoes;
  }
}
