import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  albumId?: number;

  constructor(private http: HttpClient) { }

  buscarTodosPosts(){
    return this.http.get('posts').pipe(take(1));
  }

  buscarPorId(id: Number){
    return this.http.get(`posts/${id}`).pipe(take(1));
  }
  buscarPorQueryParam(id: Number){
    return this.http.get(`comments`, {params : {postId: id.toString()}}).pipe(take(1));
  }

  salvarPost(){
    return this.http.post('posts', { "title": "test"}).pipe(take(1));
  }
  editaPost(id: Number){
    return this.http.put(`posts/${id}`, {"title": "test"}).pipe(take(1));
  }
  deletaPost(id:Number){
    return this.http.delete(`posts/${id}`).pipe(take(1));
  }

  buscarAlbuns(){
    return this.http.get('albums').pipe(take(1));
  }
}
