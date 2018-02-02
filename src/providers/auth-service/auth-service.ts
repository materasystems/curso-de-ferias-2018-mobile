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

  public getHeader() {
    const token = this.getAccessToken();
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: token
      })
    };
    return httpOptions;
  }

  public buildApplicationToken() {
    const token = btoa("mobile:alunos");
    return token;
  }

  public login(credentials): Observable<any> {
    const applicationToken = this.buildApplicationToken();

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${applicationToken}`
      })
    };
    const params = new HttpParams()
      .set("username", credentials.login)
      .append("password", credentials.senha)
      .append("grant_type", "password");

    return this.http.post(`${uri}/oauth/token`, params.toString(), httpOptions);
  }

  public saveAccessData({ access_token }) {
    this.tokenStorage.setAccessToken(access_token);
  }

  public logout(): void {
    this.tokenStorage.clear();
    location.reload(true);
  }
}
