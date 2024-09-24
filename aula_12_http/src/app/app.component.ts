import { Component, OnInit } from '@angular/core';
import { HttpService } from './main/services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  list: Array<any> =[];
  constructor(private service: HttpService){}
  ngOnInit(): void {
    this.service.buscarAlbuns().subscribe(values=> {
      this.list.push(values);
    });
    console.log(this.list);
  }
  title = 'aula_12_http';
}
