import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent {


editarCampo(cliente: any, campo: string) {
  cliente.editing[campo] = true;
}

deletaCliente(id: Number) {
  console.log(id)
 const i = this.achaIndex(id);
 this.clientes.splice(i,1);
}
@Input() clientes: any;

  achaIndex(id: Number){
    for(let i in this.clientes){
       if(this.clientes[i].id === id){
         return i;
       }
    }
    return -1;
  }
  atualizaCliente(cliente: any) {
    console.log("Cliente salvo=>" + cliente)
    cliente.editing.id = false;
    cliente.editing.nome = false;
    cliente.editing.email = false;
    cliente.editing.telefone = false;

  }
}
