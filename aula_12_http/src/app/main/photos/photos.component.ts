import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import { Photo } from '../../model/photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.scss'
})
export class PhotosComponent implements OnInit{

albuns: Array<Photo> = [];
  constructor(private service: HttpService, private route: ActivatedRoute, private router: Router){}
  id!: number;
  ngOnInit(): void {
    this.route.params.subscribe(values=> {
      this.id = values['id'];
    });
    this.service.buscaPhotosPorAlbumId(this.id).subscribe(values=>{
      this.albuns = Object.values(values);
    })
  }
  redirect(id: number) {
    this.router.navigateByUrl(`/photo/${id}`);
    }
}
