import {Component} from '@angular/core';
import {UserService} from "../../../providers/user.service";

@Component({
  selector: 'component-header',
  templateUrl: 'header.component.html'
})

export class HeaderComponent {
  public user: any;

  constructor(userService: UserService) {
    this.user = userService.getLoggedUser();
  }

}
