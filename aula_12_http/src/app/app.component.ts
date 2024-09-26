import { Component, OnInit } from '@angular/core';
import { HttpService } from './main/services/http.service';
import { Album } from './model/album';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'aula_12_http';
}
