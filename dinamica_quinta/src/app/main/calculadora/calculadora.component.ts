import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss'
})
export class CalculadoraComponent {


  ans: number = 0;
  historico: Array<string> = [];
  numeros: Array<number> = [];
  operadores: Array<string> = [];
  conta!: string;
  resultado?: number;

  addNumber(at: number) {
    this.ans = Number(this.ans + String(at));
  }

  somaNumber() {
    this.numeros.push(this.ans);
    this.operadores.push("+");
    this.ans = 0;
  }
  subtrairNumber() {
    this.numeros.push(this.ans);
    this.operadores.push("-");
    this.ans = 0;
  }
  multiNumber() {
    this.numeros.push(this.ans);
    this.operadores.push("*");
    this.ans = 0;
  }
  dividirNumber() {
    this.numeros.push(this.ans);
    this.operadores.push("/");
    this.ans = 0;
  }
  limparTela() {
    this.ans = 0;
  }

  result() {
    for (let i = 0; i < this.operadores.length; i++) {
      if (this.operadores[i] === "*"){
        this.numeros[i] = this.numeros[i+1] * this.numeros[i];
        console.log('multiplicar');
        this.numeros.splice(i+1,1);
        this.operadores.splice(i,1);

      }
      if(this.operadores[i] ==="/"){
        this.numeros[i] = this.numeros[i+1] / this.numeros[i];
        console.log('dividir');
        this.numeros.splice(i+1,1);
        this.operadores.splice(i,1);
      }
    }
    for (let i = 0; i < this.operadores.length; i++) {
      if (this.operadores[i] === "+"){
        this.numeros[i] = this.numeros[i+1] + this.numeros[i];
        console.log('soma');
        this.numeros.splice(i+1,1);
        this.operadores.splice(i,1);

      }
      if(this.operadores[i] ==="-"){
        this.numeros[i] = this.numeros[i+1] - this.numeros[i];
        console.log('diminuir');
        this.numeros.splice(i+1,1);
        this.operadores.splice(i,1);
      }
    }
    this.resultado = this.numeros[0];
    console.log(this.resultado);

  }
}
