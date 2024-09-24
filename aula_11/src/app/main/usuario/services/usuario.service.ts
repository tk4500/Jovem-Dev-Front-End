import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  teste: Array<string> = [];
    constructor() { }
  getList(){
    return this.teste;
  }
  addString(variavel: string){
    this.teste.push(variavel);
  }
}
