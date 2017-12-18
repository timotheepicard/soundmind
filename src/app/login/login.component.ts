import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { AuthService } from '../auth/auth.service';

import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  backgroundImageStyle: SafeStyle;
  user: User = new User();

  constructor(private sanitizer: DomSanitizer, private auth: AuthService) { }

  ngOnInit(): void {
    this.backgroundImageStyle = this.getBackgroundImageStyle();
  }

  private getBackgroundImageStyle() {
    const backgroundImage = '../../assets/images/background3.png';
    const style = `background-image: url(${backgroundImage})`;
    return this.sanitizer.bypassSecurityTrustStyle(style);
  }

  onLogin(): void {
    console.log('login!');
    this.auth.login(this.user)
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      })
  }
}
