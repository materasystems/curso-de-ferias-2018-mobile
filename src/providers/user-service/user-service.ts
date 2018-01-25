import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class UserServiceProvider {
  currentUser: Object;

  constructor(public http: HttpClient) {}

  changePicture(id, img) {
    let uri = `https://curso-ferias.herokuapp.com/usuario/${id}`;
    let body = {
      urlFoto: img
    };
    this.http.patch(uri, body);
  }
}
