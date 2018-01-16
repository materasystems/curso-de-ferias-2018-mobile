import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { IonicPage } from "ionic-angular";

@IonicPage()
@Component({
  selector: "profile-page",
  templateUrl: "profile.html"
})
export class ProfilePage {
  constructor(public navCtrl: NavController) {}
}
