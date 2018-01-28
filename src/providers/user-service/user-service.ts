import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";

@Injectable()
export class UserServiceProvider {
  currentUser: Object;

  constructor(public http: HttpClient, private storage: Storage) {}

  changePicture(id, img) {
    let uri = `https://curso-ferias.herokuapp.com/usuario/${id}`;
    let body = {
      urlFoto: img
    };
    this.http.patch(uri, body);
  }

  getUserData() {
    return this.storage.get("currentUser")
  }
}
