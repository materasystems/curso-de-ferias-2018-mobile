import { Component } from "@angular/core";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { NavController, AlertController, IonicPage } from "ionic-angular";

@IonicPage()
@Component({
  selector: "scanner-page",
  templateUrl: "scanner.html"
})
export class ScannerPage {
  public barcodeData;

  constructor(
    public navCtrl: NavController,
    public barcodeScanner: BarcodeScanner,
    public alertCtrl: AlertController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad BarcodescannerPage");
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

    this.barcodeScanner
      .scan(options)
      .then(data => {
        this.barcodeData = data;
        const alert = this.alertCtrl.create({
          title: "Scan Results",
          subTitle: data.text,
          buttons: ["OK"]
        });
        alert.present();
      })
      .catch(err => {
        const alert = this.alertCtrl.create({
          title: "Attention!",
          subTitle: err,
          buttons: ["Close"]
        });
        alert.present();
      });
  }
}
