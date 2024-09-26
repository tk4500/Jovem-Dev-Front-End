import { ActivatedRouteSnapshot, MaybeAsync, Resolve, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { User } from '../model/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Pagina2Guard implements Resolve<User>{
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<User> {
    route.params
    return {id: 1, name:"Odair"};
  }
}


// export const pagina2Guard: ResolveFn<User> = (route, state) => {
//   return {id: 1, name:"Odair"};
// };
