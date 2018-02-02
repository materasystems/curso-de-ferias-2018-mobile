import { HttpClient } from "@angular/common/http";
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

  postData(classId, userId) {
    const httpOptions = this.authService.getHeader();
    const body = {
      data: new Date()
    };
    return this.http.put(
      `${uri}/api/v1/frequencia/${classId}/${userId}`,
      body,
      httpOptions
    );
  }
}
