import { Injectable } from "@angular/core";

@Injectable()
export class TokenStorage {

  public getAccessToken() {
    return localStorage.getItem("accessToken");
  }

  public setAccessToken(token: string): TokenStorage {
    localStorage.setItem("accessToken", token);
    return this;
  }

  public clear() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  }
}
