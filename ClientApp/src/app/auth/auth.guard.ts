import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GoogleauthService } from 'src/googleauth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: GoogleauthService, private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    let url: string = state.url;

    return this.checkLoggedIn( url );
  }

  checkLoggedIn(url: string): boolean {
    if ( this.authService.loggedIn )
    {
      return true;
    }
    else
    {
      this.router.navigate(['/']);
      return false;
    }

  }
  
}
