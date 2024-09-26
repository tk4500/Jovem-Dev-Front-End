import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../main/services/http.service';
import { Photo } from '../model/photo';

@Component({
  selector: 'app-photo-final',
  templateUrl: './photo-final.component.html',
  styleUrl: './photo-final.component.scss'
})
export class PhotoFinalComponent implements OnInit{
  imagem: any;
 constructor(private service: HttpService, private route: ActivatedRoute, private router: Router){}
  ngOnInit(): void {
    this.route.params.subscribe(values=> {
    this.service.buscaPhotosPorId(values['id']).subscribe(values=>{
      this.imagem = values;
      console.log(this.imagem);
    })});
  }
  return() {
    this.router.navigateByUrl(`/album/${this.imagem.albumId}`)
    }
}
