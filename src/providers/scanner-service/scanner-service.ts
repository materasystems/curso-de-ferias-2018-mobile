import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthServiceProvider } from "../auth-service/auth-service";

import { uri } from "../utils/constants";

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
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: this.accessToken
      })
    };

    const body = {
      data: new Date(),
      disciplina: disciplina,
      aluno: id
    };
    return this.http.put(`${uri}/frequencia/${disciplina}/${id}`, body, httpOptions);
  }
}
