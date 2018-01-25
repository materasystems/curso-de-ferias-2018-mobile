import { ToastService } from "../../providers/utils/toast.service";
import { AlertService } from "../../providers/utils/alert.service";
import { Component } from "@angular/core";
import { Camera } from "@ionic-native/camera";
import { Storage } from "@ionic/storage";
import { IonicPage } from "ionic-angular";

import { AuthServiceProvider } from "../../providers/auth-service/auth-service";
import { UserServiceProvider } from "../../providers/user-service/user-service";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";

@IonicPage()
@Component({
  selector: "profile-page",
  templateUrl: "profile.html"
})
export class ProfilePage implements OnInit {
  profilePicture: string;
  profileRef: any;
  errorMessage: any;
  placeholderPicture = "https://api.adorable.io/avatar/200/bob";

  enableNotifications = true;
  language: any;
  currency: any;
  paymentMethod: any;
  responseUser: any;

  languages = ["English", "Portuguese", "French"];
  paymentMethods = ["Paypal", "Credit Card"];
  currencies = ["USD", "BRL", "EUR"];

  user = { id: "", name: "", imageUrl: "" };

  constructor(
    public alertService: AlertService,
    public authService: AuthServiceProvider,
    public userService: UserServiceProvider,
    private storage: Storage,
    public toastCtrl: ToastService,
    public camera: Camera
  ) {}

  ngOnInit() {
    this.storage.get("currentUser").then(res => {
      this.responseUser = res;
      this.user.id = this.responseUser.id;
      this.user.name = this.responseUser.nome;
      this.user.imageUrl = this.responseUser.urlFoto;
    });
  }

  toggleNotifications() {
    if (this.enableNotifications) {
      this.toastCtrl.create("Notifications enabled.");
    } else {
      this.toastCtrl.create("Notifications disabled.");
    }
  }

  updateImage(value) {
    this.profilePicture = "data:image/jpeg;base64," + value;
    // Opção de adicionar no localStorage
    localStorage.setItem("imageUrl", this.profilePicture);
    // Opção de acicionar no storage do Ionic
    this.storage.set("imageUrl", this.profilePicture);
    // Colocando a nova imagem no objeto que é utilizado na view
    this.user.imageUrl = this.profilePicture;
    // Persistindo no mock
    this.userService.changePicture(this.user.id, this.profilePicture);
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
          this.toastCtrl.create("Logged out of the application");
        }
      });
  }
}
