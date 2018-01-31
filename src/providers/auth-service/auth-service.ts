import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams
} from "@angular/common/http";
import { AuthService } from "ngx-auth";

import { TokenStorage } from "./token-storage-service";

import { uri } from "../utils/constants";

interface AccessData {
  accessToken: string;
  refreshToken: string;
}

@Injectable()
export class AuthServiceProvider implements AuthService {
  currentUser: Object;

  constructor(public http: HttpClient, private tokenStorage: TokenStorage) {}

  public isAuthorized(): Observable<boolean> {
    return this.tokenStorage.getAccessToken().map(token => !!token);
  }

  public getAccessToken(): Observable<string> {
    return this.tokenStorage.getAccessToken();
  }

  public refreshToken(): Observable<AccessData> {
    return this.tokenStorage
      .getRefreshToken()
      .switchMap((refreshToken: string) => {
        return this.http.post(`${uri}/refresh`, {
          refreshToken
        });
      })
      .do(this.saveAccessData.bind(this))
      .catch(err => {
        this.logout();

        return Observable.throw(err);
      });
  }

  public refreshShouldHappen(response: HttpErrorResponse): boolean {
    return response.status === 401;
  }

  public verifyTokenRequest(url: string): boolean {
    return url.endsWith("/refresh");
  }

  public login(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic bW9iaWxlOmFsdW5vcw=="
      })
    };
    const params = new HttpParams()
      .set("username", "usuario")
      .append("password", "password")
      .append("grant_type", "password");

    return this.http
      .post(`${uri}/oauth/token`, params.toString(), httpOptions)
      .do((tokens: AccessData) => this.saveAccessData(tokens));
  }

  private saveAccessData({ accessToken, refreshToken }: AccessData) {
    this.tokenStorage.setAccessToken(accessToken).setRefreshToken(refreshToken);
  }

  public logout(): void {
    this.tokenStorage.clear();
    location.reload(true);
  }
}
