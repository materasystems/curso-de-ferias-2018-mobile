import { Component } from "@angular/core";
import { IonicPage } from "ionic-angular";
import { NavController, NavParams } from "ionic-angular";
import { PrintPage } from "./print/print";

import { ReportServiceProvider } from "../../providers/report-service/report-service";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { UserServiceProvider } from "../../providers/user-service/user-service";

@IonicPage()
@Component({
  selector: "page-report",
  templateUrl: "report.html"
})
export class ReportPage implements OnInit {
  items: any;
  courses: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userService: UserServiceProvider,
    private reportService: ReportServiceProvider
  ) {}

  ngOnInit() {
    this.items = [];
    this.userService.getUserData().then(res => {
      const user: any = res;
      console.log("user", user);

      this.reportService.getClasses().subscribe(res => {
        this.courses = res;
        this.courses.map(el => {
          this.items.push({
            logo:
              el.descricao === "Ionic"
                ? "ionic"
                : el.descricao === "Angular" ? "logo-angular" : "ios-cafe",
            title: el.descricao,
            details: `Segmento: ${el.segmento}`,
            dataInicio: el.dataInicio,
            dataTermino: el.dataTermino,
            icon: "ios-add-circle-outline",
            showDetails: false
          });
          // this.reportService
          //   .getData(el.id, user.id)
          //   .subscribe(res => console.log(`${el.descricao}`, res));
        });
      });
    });
  }

  toggleAccordion(data) {
    if (data.showDetails) {
      data.showDetails = false;
      data.icon = "ios-add-circle-outline";
    } else {
      data.showDetails = true;
      data.icon = "ios-remove-circle-outline";
    }
  }

  print() {
    this.navCtrl.push(PrintPage, { items: this.items });
  }
}
