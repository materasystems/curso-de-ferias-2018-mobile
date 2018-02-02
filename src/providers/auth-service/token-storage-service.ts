import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";

@Injectable()
export class TokenStorage {
  constructor(private storage: Storage) {}

  public getAccessToken() {
    return localStorage.getItem("accessToken");
  }

  public setAccessToken(token: string): TokenStorage {
    localStorage.setItem("accessToken", token);
    return this;
  }

  public clear() {
    localStorage.removeItem("accessToken");
    this.storage.remove("currentUser");
  }
}
