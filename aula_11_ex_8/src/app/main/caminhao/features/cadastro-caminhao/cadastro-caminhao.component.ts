import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Caminhao } from '../../../models/caminhao';
import { CaminhaoService } from '../../services/caminhao.service';

@Component({
  selector: 'app-cadastro-caminhao',
  templateUrl: './cadastro-caminhao.component.html',
  styleUrl: './cadastro-caminhao.component.scss'
})
export class CadastroCaminhaoComponent implements OnInit{

  caminhaoForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private camService: CaminhaoService) {
  }

  ngOnInit(): void {
    this.caminhaoForm = this.formBuilder.group({
      placa: ["", Validators.required],
      kmAtual: ["", Validators.required],
      kmRodada: [0, Validators.required],
      litrosAbastecidos: [0, Validators.required],
      valorAbastecidos: [0, Validators.required],
      totalPecasEntregues: [0, Validators.required]
    });
  }
  envia() {
    const caminhao: Caminhao = this.caminhaoForm.value;
    console.log(caminhao);
    this.camService.addCaminhao(caminhao);
    console.log(this.camService.listCaminhoes());
  }

}
