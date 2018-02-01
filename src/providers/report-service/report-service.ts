import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthServiceProvider } from "../auth-service/auth-service";

import { uri } from "../utils/constants";

@Injectable()
export class ReportServiceProvider {
  private accessToken: string;

  constructor(
    public http: HttpClient,
    public authService: AuthServiceProvider
  ) {
    // armazena o token em uma variável
    this.accessToken = this.authService.getAccessToken();
  }

  getData(id, disciplina) {
    // constrói o header
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: this.accessToken
      })
    };
    // OU
    // const httpOptions = this.authService.getHeader()
    return this.http.get(`${uri}/relatorio/${disciplina}/${id}`, httpOptions);
  }
}
