import {Injectable} from "@angular/core"
import {Observable} from "rxjs/Observable"

import {User} from '../models/User'
import {Subscriber} from "rxjs/Subscriber"

@Injectable()
export class UserService {

  getLogedUser(): Observable<User> {
    return new Observable<User>(
      (subscriber: Subscriber<User>) => subscriber.next(
        new User('Admin',
          'admin',
          'admin@matera.com',
          'ADMINISTRADOR',
          './assets/images/profile.jpg')));

  }
}
