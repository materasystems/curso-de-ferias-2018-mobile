import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import uuid from "uuid";

import { uri } from "../utils/constants";
import { AuthServiceProvider } from "../auth-service/auth-service";

@Injectable()
export class ScannerServiceProvider {
  private accessToken: string;

  constructor(
    public http: HttpClient,
    public authService: AuthServiceProvider
  ) {
    this.accessToken = this.authService.getAccessToken();
  }

  postData(id, disciplina) {
    const body = {
      id: uuid.v4(),
      dia: new Date(),
      disciplina: disciplina,
      usuario: id
    };
    return this.http.post(`${uri}/presenca`, body);
  }
}
