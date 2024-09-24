import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrl: './cadastro-produto.component.scss'
})
export class CadastroProdutoComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder
  ){}
  form: FormGroup = this.formBuilder.group({
    name: ["", Validators.required]
  });
  posts: any;



  ngOnInit(): void {
    this.buildForm();
    this.form.patchValue({name: 'Rivotril', estoque:10});
    this.envia()
    console.log(this.form);
  }
  buildForm() {
    console.log(this.form.get('name')?.valueChanges)
    this.form.get('name')?.valueChanges.subscribe(value =>{
      console.log(value);
    })
  }
  envia(){
     console.log(this.form.getRawValue());
  }
  validacaoEstoque(teste: FormGroup){
    console.log(teste);
    if(teste.value <=0){
      return{estoqueMinimo: true};
    }
    return null;
  };
}
