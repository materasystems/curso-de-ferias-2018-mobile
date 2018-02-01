// Root do Angular para falar que se trata de um component
import { Component } from "@angular/core";
// Root do Ionic/Angular para falar que se trata de uma página
import { IonicPage } from "ionic-angular";
// Controller nativo para poder fazer a navegação entre páginas
import { NavController } from "ionic-angular";
// Ciclo de vida do Angular para poder realizar alguma coisa no momento em que a página é carregada
import { OnInit } from "@angular/core";

import { AuthServiceProvider } from "../../providers/auth-service/auth-service";

@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage implements OnInit {
  constructor(public nav: NavController, private authService: AuthServiceProvider) {}

  ngOnInit() {
    const isAuthorized = this.authService.isAuthorized();
    if (!isAuthorized) this.nav.setRoot("LoginPage");
  }

  goToProfile() {
    this.nav.setRoot("ProfilePage");
  }

  goToScanner() {
    this.nav.setRoot("ScannerPage");
  }

  goToReport() {
    this.nav.setRoot("ReportPage");
  }
}
