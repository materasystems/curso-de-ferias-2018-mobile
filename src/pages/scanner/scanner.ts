import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { IonicPage } from "ionic-angular";

@IonicPage()
@Component({
  selector: "scanner-page",
  templateUrl: "scanner.html"
})
export class ScannerPage {
  constructor(public navCtrl: NavController) {}
}
