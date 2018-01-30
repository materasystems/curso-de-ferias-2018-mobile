import { Component } from "@angular/core";
import {
  AlertController,
  App,
  LoadingController,
  NavController,
  IonicPage
} from "ionic-angular";
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  public loginForm = { login: "", senha: "" };

  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public app: App,
    public nav: NavController,
    private authService: AuthServiceProvider
  ) {
    const token = localStorage.getItem("token");
    if (token) this.nav.setRoot("HomePage");
  }

  login() {
    const loading = this.loadingCtrl.create({
      duration: 4000
    });

    this.authService.login(this.loginForm).subscribe(allowed => {
      if (allowed) {
        const alert = this.alertCtrl.create({
          title: "Logged in!",
          subTitle: "Thanks for logging in.",
          buttons: ["OK"]
        });
        alert.present();
        loading.dismiss();
        this.nav.setRoot("HomePage");
      } else {
        const alert = this.alertCtrl.create({
          title: "Access Denied!",
          subTitle: "Sorry! Try again...",
          buttons: ["OK"]
        });
        alert.present();
        loading.dismiss();
      }
    });
    loading.present();
  }

  goToSignup() {
    this.nav.push("RegisterPage");
  }

  colors = new Array(
    [62, 35, 255],
    [60, 255, 60],
    [255, 35, 98],
    [45, 175, 230],
    [255, 0, 255],
    [255, 128, 0]
  );

  step = 0;
  colorIndices = [0, 1, 2, 3];

  gradientSpeed = 0.00005;
  gradient = "";

  updateGradient() {
    const c00 = this.colors[this.colorIndices[0]];
    const c01 = this.colors[this.colorIndices[1]];
    const c10 = this.colors[this.colorIndices[2]];
    const c11 = this.colors[this.colorIndices[3]];

    const istep = 1 - this.step;
    const r1 = Math.round(istep * c00[0] + this.step * c01[0]);
    const g1 = Math.round(istep * c00[1] + this.step * c01[1]);
    const b1 = Math.round(istep * c00[2] + this.step * c01[2]);
    const color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";

    const r2 = Math.round(istep * c10[0] + this.step * c11[0]);
    const g2 = Math.round(istep * c10[1] + this.step * c11[1]);
    const b2 = Math.round(istep * c10[2] + this.step * c11[2]);
    const color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";

    this.gradient = `-webkit-gradient(linear, left top, right bottom, from(${color1}), to(${color2}))`;
    this.step += this.gradientSpeed;
    if (this.step >= 1) {
      this.step %= 1;
      this.colorIndices[0] = this.colorIndices[1];
      this.colorIndices[2] = this.colorIndices[3];

      this.colorIndices[1] =
        (this.colorIndices[1] +
          Math.floor(1 + Math.random() * (this.colors.length - 1))) %
        this.colors.length;

      this.colorIndices[3] =
        (this.colorIndices[3] +
          Math.floor(1 + Math.random() * (this.colors.length - 1))) %
        this.colors.length;
    }

    setInterval(() => {
      this.updateGradient();
    }, 40);
  }
}
