import {Component} from '@angular/core'
import {NavController} from 'ionic-angular'
import {User} from '../../models/user'
import {UserService} from '../../providers/user.service'

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.component.html'
})
export class ProfilePage {

  public user: User;

  constructor(public navCtrl: NavController,
              private userService: UserService) {

    this.user = this.userService.getLoggedUser();
  }

}
