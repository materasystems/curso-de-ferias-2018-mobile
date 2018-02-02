import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthServiceProvider } from "../auth-service/auth-service";

import { uri } from "../utils/constants";

@Injectable()
export class ReportServiceProvider {
  constructor(
    public http: HttpClient,
    public authService: AuthServiceProvider
  ) {}

  getClasses() {
    const httpOptions = this.authService.getHeader();
    return this.http.get(`${uri}/api/v1/disciplinas`, httpOptions);
  }

  getData(classId, userId) {
    const httpOptions = this.authService.getHeader();
    return this.http.get(
      `${uri}/api/v1/relatorio/${classId}/${userId}`,
      httpOptions
    );
  }
}
