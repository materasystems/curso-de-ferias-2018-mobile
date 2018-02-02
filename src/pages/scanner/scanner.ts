import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { NavController, AlertController, IonicPage } from "ionic-angular";
import { UserServiceProvider } from "../../providers/user-service/user-service";
import { ScannerServiceProvider } from "../../providers/scanner-service/scanner-service";

@IonicPage()
@Component({
  selector: "scanner-page",
  templateUrl: "scanner.html"
})
export class ScannerPage implements OnInit {
  public barcodeData: any;
  public currentUser: any;
  public hasUser: boolean = false;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public barcodeScanner: BarcodeScanner,
    private userService: UserServiceProvider,
    private scannerService: ScannerServiceProvider
  ) {}

  ngOnInit() {
    this.userService.getUserData().then(res => {
      this.currentUser = res;
      this.hasUser = true;
    });
  }

  scan() {
    const options = {
      preferFrontCamera: false,
      showFlipCameraButton: true,
      showTorchButton: true,
      torchOn: false,
      prompt: "Place a barcode inside the scan area", // Android
      resultDisplayDuration: 500,
      formats: "QR_CODE,PDF_417",
      orientation: "portrait",
      disableAnimations: true, // iOS
      disableSuccessBeep: false // iOS
    };

    if (this.hasUser) {
      this.barcodeScanner
        .scan(options)
        .then(data => {
          const objeto = JSON.parse(atob(data.text));
          const id = this.currentUser.id;
          const disciplina = objeto.id;

          this.scannerService.postData(disciplina, id).subscribe(res => {
            const alert = this.alertCtrl.create({
              title: "Scan Results",
              subTitle: "Successfully!",
              buttons: ["OK"]
            });
            alert.present();
          });
        })
        .catch(err => {
          const alert = this.alertCtrl.create({
            title: "Attention!",
            subTitle: "Successfully!",
            buttons: ["Close"]
          });
          alert.present();
        });
    }
  }
}
