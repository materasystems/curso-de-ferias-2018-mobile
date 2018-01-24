import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { isUndefined } from "ionic-angular/util/util";

@Injectable()
export class AuthServiceProvider {
  currentUser: Object;

  constructor(public http: HttpClient) {}

  public login(credentials) {
    if (credentials.login === null || credentials.senha === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        let access: Boolean;
        console.log(access);
        this.http
          .get(
            `https://curso-ferias.herokuapp.com/usuario?login=${
              credentials.login
            }&senha=${credentials.senha}`
          )
          .subscribe(res => {
            if (res[0]) {
              this.currentUser = res[0];
              access = true;
            } else {
              access = false;
            }
            if (!isUndefined(access)) {
              observer.next(access);
              observer.complete();
            }
          });
      });
    }
  }

  public getUserInfo() {
    return this.currentUser;
  }

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}
