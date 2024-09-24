import { Component, OnInit } from '@angular/core';
import { HttpService } from './main/services/http.service';
import { Album } from './model/album';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  list: Array<any> = [];
  albuns: Array<any> =[];
  constructor(private service: HttpService){}
  ngOnInit(): void {
    this.service.buscarAlbuns().subscribe(values=> {
      albuns = values;
    });
    console.log(this.albuns);
  }
  title = 'aula_12_http';
}
