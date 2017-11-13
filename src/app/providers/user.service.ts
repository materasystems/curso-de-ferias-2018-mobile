import {Injectable} from "@angular/core"
import {User} from '../models/user'

@Injectable()
export class UserService {

  userInfo: any = {
    nome: "Admin",
    login: "admin",
    email: "admin@matera.com",
    perfil: "Administrador",
    urlFoto: "./assets/images/profile.jpg"
  };

  getLoggedUser() {
    return new User(this.userInfo)
  }
}
