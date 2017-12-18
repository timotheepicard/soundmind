import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { User } from '../models/user';

@Injectable()
export class AuthService {
  private BASE_URL: string = 'http://localhost:3000/api';
  private headers: Headers = new Headers();

  constructor(private http: Http) { }

  login(user: User): Promise <any> {
    const url: string = `${this.BASE_URL}/login`;
    console.log(url);
    return this.http.post(url, user, {headers: this.headers}).toPromise();
  }
}
