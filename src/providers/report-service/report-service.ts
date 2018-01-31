import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, Response } from "@angular/http";

import { uri } from "../utils/constants";

@Injectable()
export class ReportServiceProvider {
  constructor(public http: Http) {}

  getData(id, disciplina) {
    let headers = new Headers({"Content-Type": "application/x-www-form-urlencoded"});
    let options = new RequestOptions({ headers: headers });
    return this.http
    .get(`${uri}/presenca?usuario=${id}&disciplina=${disciplina}`, options)}
    // .get(`${uri}/api/v1/relatorio/${disciplina}/${id}`, options)}
}
