import { Component, OnInit } from '@angular/core';
import { SocialUser } from "angularx-social-login";
import { GoogleauthService } from "src/googleauth.service";
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit{

  user: SocialUser;
  loggedIn: boolean;
  faGoogleIcon = faGoogle;

  constructor(private googleAuth: GoogleauthService){}

  signInWithGoogle(): void {
    this.googleAuth.signInWithGoogle();
  }

  signOutWithGoogle(): void {
    this.googleAuth.signOutWithGoogle();
  }

  ngOnInit() {
    this.googleAuth.authService.authState.subscribe( (user) => {
      this.user = user;
      this.loggedIn = ( user != null);
    })
  }
}
