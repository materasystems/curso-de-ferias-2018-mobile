import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { IonicPage } from "ionic-angular";
import { PrintPage } from "./print/print";

@IonicPage()
@Component({
  selector: "page-report",
  templateUrl: "report.html"
})
export class ReportPage {
  selectedItem: any;
  icons: string[];
  items: Array<{ title: string, details: string, logo: string, icon: string, showDetails: boolean }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get("item");

    this.items = [];
    this.items.push(
      {
        title: "Angular",
        details: "Total de aulas: 10 <br> Total de faltas: 2",
        logo: "logo-angular",
        icon: 'ios-add-circle-outline',
        showDetails: false
      },
      {
        title: "Ionic",
        details: "Total de aulas: 10 <br> Total de faltas: 2",
        logo: "ionic",
        icon: 'ios-add-circle-outline',
        showDetails: false
      },
      {
        title: "Java",
        details: "Total de aulas: 10 <br> Total de faltas: 2",
        logo: "ios-cafe",
        icon: 'ios-add-circle-outline',
        showDetails: false
      }
    );
  }

  toggleAccordion(data) {
    if (data.showDetails) {
        data.showDetails = false;
        data.icon = 'ios-add-circle-outline';
    } else {
        data.showDetails = true;
        data.icon = 'ios-remove-circle-outline';
    }
  }

  print() {
    this.navCtrl.push(PrintPage, {items: this.items});
  }
}
