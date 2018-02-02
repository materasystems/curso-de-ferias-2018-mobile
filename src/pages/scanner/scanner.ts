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
  barcodeData: any;
  currentUser: any;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public barcodeScanner: BarcodeScanner,
    private userService: UserServiceProvider,
    private scannerService: ScannerServiceProvider
  ) {}

  ngOnInit() {
    this.userService.getUserData().then(res => (this.currentUser = res));
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
        let leitura = atob(this.barcodeData);
        let objeto = JSON.parse(leitura);

        const id = this.currentUser.id;
        const disciplina = objeto.id;
        this.scannerService.postData(disciplina, id).subscribe(res => {
          const alert = this.alertCtrl.create({
            title: "Scan Results",
            subTitle: "Presença realizada com sucesso!",
            buttons: ["OK"]
          });
          alert.present();
        });
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
