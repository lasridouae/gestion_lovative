import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {TokenService} from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class ClientGuard implements CanActivate {
  constructor(
    private tokenService: TokenService,
    private router: Router
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.tokenService.getRole() == "CLIENT" || this.tokenService.getRole() == "SUPERADMIN" ||  this.tokenService.getRole() == null){
      this.router.navigateByUrl("/");
      return false;
    }
    return true;
  }

}
