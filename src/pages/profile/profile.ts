import { IonicPage } from "ionic-angular";
import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { NavController } from "ionic-angular";
import { Camera } from "@ionic-native/camera";

import { ToastService } from "../../providers/utils/toast.service";
import { AlertService } from "../../providers/utils/alert.service";
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";
import { UserServiceProvider } from "../../providers/user-service/user-service";

@IonicPage()
@Component({
  selector: "profile-page",
  templateUrl: "profile.html"
})
export class ProfilePage implements OnInit {
  public enableNotifications: boolean = true;
  public placeholderPicture: string;
  public profilePicture: string;
  public paymentMethod: any;
  public errorMessage: any;
  public responseUser: any;
  public language: string;
  public currency: string;
  public profileRef: any;

  public languages: any = ["English", "Portuguese", "French"];
  public paymentMethods: any = ["Paypal", "Credit Card"];
  public currencies: any = ["USD", "BRL", "EUR"];

  public user: any = { id: "", name: "", imageUrl: "" };

  constructor(
    public authService: AuthServiceProvider,
    public userService: UserServiceProvider,
    public alertService: AlertService,
    public toastCtrl: ToastService,
    private navCtrl: NavController,
    private camera: Camera
  ) {}

  ngOnInit() {
    this.userService.getUserData().then(res => {
      this.responseUser = res;
      this.user.id = this.responseUser.id;
      this.user.name = this.responseUser.nome;
      this.user.imageUrl = this.responseUser.urlFoto;
    });
  }

  toggleNotifications() {
    this.enableNotifications
      ? this.toastCtrl.create("Notifications enabled.")
      : this.toastCtrl.create("Notifications disabled.");
  }

  updateImage(value) {
    this.profilePicture = "data:image/jpeg;base64," + value;
    this.user.imageUrl = this.profilePicture;
    this.userService
      .changePicture(this.user.id, this.profilePicture)
      .subscribe(() =>
        this.toastCtrl.create("Profile picture changed successfully!.")
      );
  }

  openGallery(): void {
    let cameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      quality: 100,
      targetWidth: 1000,
      targetHeight: 1000,
      encodingType: this.camera.EncodingType.JPEG,
      correctOrientation: true
    };

    this.camera
      .getPicture(cameraOptions)
      .then(
        imageData => this.updateImage(imageData),
        err => this.toastCtrl.create("Error: " + err)
      );
  }

  logOut() {
    this.alertService
      .presentAlertWithCallback(
        "Are you sure?",
        "This will log you out of this application."
      )
      .then(yes => {
        if (yes) {
          this.authService.logout();
          this.toastCtrl.create("Logged out of the application");
          this.navCtrl.setRoot("LoginPage");
        }
      });
  }
}
