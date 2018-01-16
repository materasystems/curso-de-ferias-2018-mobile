import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { IonicPage } from "ionic-angular";
import { ProfilePage } from "../profile/profile";
import { ScannerPage } from "../scanner/scanner";
import { ListPage } from "../list/list";

@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(public navCtrl: NavController) {}

  goToProfile() {
    this.navCtrl.push(ProfilePage);
  }

  goToScanner() {
    this.navCtrl.push(ScannerPage);
  }

  goToReport() {
    this.navCtrl.push(ListPage);
  }
}
