import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user$ = this.authService.user$;

  constructor(private readonly authService: AuthService) {}

  logout() {
    this.authService.logout({
      returnTo: window.location.origin
    });
  }
}
