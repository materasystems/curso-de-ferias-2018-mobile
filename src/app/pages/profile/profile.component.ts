import {Component} from '@angular/core'
import {NavController} from 'ionic-angular'
import {User} from '../../models/user'
import {UserService} from '../../providers/user.service'
import {ChangePasswordPage} from "./change-password/change-password"
import {ChangePhotoPage} from "./change-photo/change-photo"


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.component.html'
})
export class ProfilePage {

  public user: User;

  constructor(public navCtrl: NavController,
              private userService: UserService) {

    this.user = userService.getLoggedUser();
  }

  changePass() {
    this.navCtrl.setRoot(ChangePasswordPage);
  }

  changePhoto() {
    this.navCtrl.setRoot(ChangePhotoPage);
  }

}
