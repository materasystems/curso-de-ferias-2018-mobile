import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Storage } from "@ionic/storage";
import { AuthServiceProvider } from "../auth-service/auth-service";

import { uri } from "../utils/constants";

@Injectable()
export class UserServiceProvider {
  private accessToken: string;
  public currentUser: Object;

  constructor(
    public http: HttpClient,
    private storage: Storage,
    public authService: AuthServiceProvider
  ) {
    this.accessToken = this.authService.getAccessToken();
  }

  changePicture(id, img) {
    const httpOptions = this.authService.getHeader();
    let body = {
      urlFoto: img
    };
    return this.http.patch(`${uri}/usuarios/${id}`, body, httpOptions);
  }

  storeUserData() {
    const httpOptions = this.authService.getHeader();
    this.http.get(`${uri}/api/v1/usuarios/me`, httpOptions).subscribe(res => {
      this.storage.set("currentUser", res);
      console.log(res);
    });
  }

  getUserData() {
    return this.storage.get("currentUser").then(res => res);
  }
}
