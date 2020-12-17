import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { promise } from 'protractor';
import { Observable } from 'rxjs';
import { resolve } from 'url';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GaurdService implements CanActivate {

  constructor( private as : AuthService, private router : Router) { }
  
  path: import("@angular/router").ActivatedRouteSnapshot[];
  route: import("@angular/router").ActivatedRouteSnapshot; 

  // canActivate(
  //   route: ActivatedRouteSnapshot, 
  //   state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> 
  //   {throw new Error('Method not implemented.');}


  canActivate(path, route) : boolean | Observable<boolean> | Promise<boolean>
  {
    return new Promise( resolve => 
      {
        this.as.user.subscribe( user =>
          {
            if(user) resolve (true)
            else
            this.router.navigate(['/login'])
          })
    })  
  }


}
