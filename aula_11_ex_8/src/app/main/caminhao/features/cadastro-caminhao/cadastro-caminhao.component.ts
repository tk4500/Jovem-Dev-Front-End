import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-caminhao',
  templateUrl: './cadastro-caminhao.component.html',
  styleUrl: './cadastro-caminhao.component.scss'
})
export class CadastroCaminhaoComponent implements OnInit{
  caminhaoForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ){}
  ngOnInit(): void {
    this.buildForm();
  }
  buildForm() {
    this.caminhaoForm = this.formBuilder.group({
      placa: ["", Validators.required],
    });
  }
}
