import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { IonicPage } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-report",
  templateUrl: "report.html"
})
export class ReportPage {
  selectedItem: any;
  icons: string[];
  items: Array<{ title: string; note: string; icon: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get("item");

    this.items = [];
    this.items.push({
      title: "Angular",
      note: "ver mais",
      icon: "logo-angular"
    },
      {
        title: "Ionic",
        note: "ver mais",
        icon: "ionic"
      },
      {
        title: "Java",
        note: "ver mais",
        icon: "cafe"
      }
    );
  }

  itemTapped(event, item) {
    if (item.title == "Java") {
      this.navCtrl.push(ReportPage, { item: item });
    }
  }
}
