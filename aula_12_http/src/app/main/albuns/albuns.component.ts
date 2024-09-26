import { Route, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Album } from '../../model/album';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-albuns',
  templateUrl: './albuns.component.html',
  styleUrl: './albuns.component.scss'
})
export class AlbunsComponent implements OnInit{

  albuns: Array<Album> = [];
  constructor(private service: HttpService, private router: Router){}
  ngOnInit(): void {
    this.service.buscarAlbuns().subscribe(album=> {
      this.albuns = Object.values(album)
      this.albuns.forEach(album=>
        this.service.buscaPhotosPorAlbumId(album.id).subscribe(photos =>{
          album.firstPhoto = Object.values(photos).shift()
        }
        )

      )
    });

  }
  redirect(id: number) {
    this.router.navigateByUrl(`/album/${id}`)
    }
}
