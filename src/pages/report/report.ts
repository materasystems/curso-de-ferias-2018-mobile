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
  items: Array<{
    title: string;
    details: string;
    logo: string;
    icon: string;
    showDetails: boolean;
  }>;
  angular: any;
  ionic: any;
  rest: any;

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

      // Pega presenças do Angular
      this.reportService.getData(user.id, "1").subscribe(res => {
        this.angular = res;
        // Pega presenças do Ionic
        this.reportService.getData(user.id, "2").subscribe(res => {
          this.ionic = res;
          // Pega presenças do Rest
          this.reportService.getData(user.id, "3").subscribe(res => {
            this.rest = res;
            // Com todos os dados salvos em variáveis, criar o array de objetos
            this.items.push(
              {
                title: "Angular",
                details: `Total de presenças: ${this.angular.length}`,
                logo: "logo-angular",
                icon: "ios-add-circle-outline",
                showDetails: false
              },
              {
                title: "Ionic",
                details: `Total de presenças: ${this.ionic.length}`,
                logo: "ionic",
                icon: "ios-add-circle-outline",
                showDetails: false
              },
              {
                title: "Java",
                details: `Total de presenças: ${this.rest.length}`,
                logo: "ios-cafe",
                icon: "ios-add-circle-outline",
                showDetails: false
              }
            );
          });
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
