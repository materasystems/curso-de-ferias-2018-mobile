import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

import { TokenStorage } from "./token-storage-service";

import { uri } from "../utils/constants";

@Injectable()
export class AuthServiceProvider {
  currentUser: Object;

  constructor(public http: HttpClient, private tokenStorage: TokenStorage) {}

  public isAuthorized() {
    const token = this.tokenStorage.getAccessToken();
    return token ? true : false;
  }

  public getAccessToken() {
    return `Bearer ${this.tokenStorage.getAccessToken()}`;
  }

  public buildToken(credentials) {
    // regra de criação
    const token = btoa(`${credentials.login}:${credentials.senha}`);
    return token;
    // return "bW9iaWxlOmFsdW5vcw==";
  }

  public login(credentials): Observable<any> {
    const user = this.buildToken(credentials);

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${user}`
      })
    };
    const params = new HttpParams()
      .set("username", "usuario")
      .append("password", "password")
      .append("grant_type", "password");

    return this.http.post(`${uri}/oauth/token`, params.toString(), httpOptions);
  }

  saveAccessData({ access_token }) {
    this.tokenStorage.setAccessToken(access_token);
  }

  public logout(): void {
    this.tokenStorage.clear();
    location.reload(true);
  }
}
