import { Component } from '@angular/core';
import { Usuario } from '../../../../models/usuario';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrl: './cadastro-usuario.component.scss'
})
export class CadastroUsuarioComponent {

  usuario: Usuario = {
    id: 0,
    nome: '',
    idade: 0,
    telefone: ''
  };
}
