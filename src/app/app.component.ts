// Core do Angular
import { Component, ViewChild } from "@angular/core";
// Native providers
import { Nav, Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
// Providers
import { AuthServiceProvider } from "../providers/auth-service/auth-service";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  // Utilizado para informar que a página vai ter filhos, ou seja, páginas que irão nascer dela
  @ViewChild(Nav) nav: Nav;
  // Armazena a página Login Page em uma variável para especificar qual é a página de entrada do usuário no app
  rootPage: any = "LoginPage";

  pages: Array<{ title: string; component: any }>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public authService: AuthServiceProvider
  ) {
    this.initializeApp();

    this.pages = [
      { title: "Home", component: "HomePage" },
      { title: "Report", component: "ReportPage" },
      { title: "Profile", component: "ProfilePage" },
      { title: "Scaner", component: "ScannerPage" },
      { title: "Add", component: "AddUserPage" },
      { title: "Sair", component: "LoginPage" }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    if (page.component === "LoginPage") this.authService.logout();
    this.nav.setRoot(page.component);
  }
}
