import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiIterceptor implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({headers: req.headers.set('authorization', 'dfsoadsagtwqe'), url: `https://jsonplaceholder.typicode.com/${req.url}`});
    return next.handle(req);
  }
}
