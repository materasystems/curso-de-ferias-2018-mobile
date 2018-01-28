import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import uuid from "uuid";

import { uri } from "../utils/constants";

@Injectable()
export class ScannerServiceProvider {
  constructor(public http: HttpClient) {}

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
