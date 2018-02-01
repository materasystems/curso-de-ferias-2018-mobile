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
    // "uuid": "3480ed0e-2c8d-4a69-a8ed-7a2f136c4c20",
    // "urlPhoto": "http://bucket/usuario/1/perfil.png"
    return this.storage.get("currentUser");
  }
}
