import { Component } from '@angular/core';
import { Usuario } from '../../../../models/usuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrl: './cadastro-usuario.component.scss'
})
export class CadastroUsuarioComponent {
  constructor(private service: UsuarioService){
    console.log(service.getList())
  }
  usuario: Usuario = {
    id: 0,
    nome: '',
    idade: 0,
    telefone: ''
  };
}
