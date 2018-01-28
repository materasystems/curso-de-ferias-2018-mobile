import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { uri } from "../utils/constants";

@Injectable()
export class ReportServiceProvider {
  constructor(public http: HttpClient) {}

  getData(id, disciplina) {
    return this.http
      .get(`${uri}/presenca?usuario=${id}&disciplina=${disciplina}`)
  }
}
