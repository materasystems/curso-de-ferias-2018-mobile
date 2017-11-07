import {Component, OnInit} from "@angular/core"
import {NavController} from 'ionic-angular'
import {FormGroup, Validators, FormControl} from '@angular/forms'

import {User} from '../../../models/user'
import {AccountService} from '../../../providers/account.service'
import {UserService} from '../../../providers/user.service'
import {ProfilePage} from '../profile.component'

@Component({
  templateUrl: "change-password.html",
  selector: "change-password"
})
export class ChangePasswordPage implements OnInit {

  public changePasswordForm: FormGroup;
  public user: User;

  constructor(public navCtrl: NavController,
              private accountService: AccountService,
              private userService: UserService) {

    this.user = userService.getLoggedUser();
  }

  ngOnInit() {
    this.changePasswordForm = new FormGroup({
      currentPass: new FormControl(null, Validators.required),
      newPass: new FormControl(null, Validators.required),
      confirmNewPass: new FormControl(null, Validators.required)
    });
  }

  cancel() {
    this.navCtrl.setRoot(ProfilePage);
  }

  change() {
    this.accountService.changePassword(this.changePasswordForm.value);
  }
}
