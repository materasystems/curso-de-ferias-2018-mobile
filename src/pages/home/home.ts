// Root do Angular para falar que se trata de um component
import { Component } from "@angular/core";
// Root do Ionic/Angular para falar que se trata de uma página
import { IonicPage } from "ionic-angular";
// Controller nativo para poder fazer a navegação entre páginas
import { NavController } from "ionic-angular";
// Ciclo de vida do Angular para poder realizar alguma coisa no momento em que a página é carregada
import { OnInit } from "@angular/core";

@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage implements OnInit {
  constructor(public navCtrl: NavController) {}

  ngOnInit() {
    const token = localStorage.getItem("token");
    if (!token) this.navCtrl.setRoot("LoginPage");
  }

  goToProfile() {
    this.navCtrl.setRoot("ProfilePage");
  }

  goToScanner() {
    this.navCtrl.setRoot("ScannerPage");
  }

  goToReport() {
    this.navCtrl.setRoot("ReportPage");
  }
}
