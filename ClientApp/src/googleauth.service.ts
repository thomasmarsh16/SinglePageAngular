import { Injectable, NgZone } from '@angular/core';
import { SocialAuthService, SocialUser, GoogleLoginProvider } from 'angularx-social-login';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class GoogleauthService {

  userData: SocialUser;
  loggedIn: boolean;

  constructor(
    public authService: SocialAuthService,
    public router: Router,
    public ngZone: NgZone
  ) { 
    this.authService.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
      } else{
        localStorage.setItem('user', null);
      }
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.loggedIn = true;
  }

  signOutWithGoogle(): void {
    this.loggedIn = false;
    this.authService.signOut().then(()=> {
      localStorage.removeItem('user');
      this.router.navigate(['/'])
    });
    
  }
}