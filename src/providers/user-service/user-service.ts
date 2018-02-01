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
    // forma de construir o header em um único arquivo
    const httpOptions = this.authService.getHeader();
    let body = {
      urlFoto: img
    };
    this.http.patch(`${uri}/usuario/${id}`, body, httpOptions);
  }

  getUserData() {
    return this.storage.get("currentUser");
  }
}
