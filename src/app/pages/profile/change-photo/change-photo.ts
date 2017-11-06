import {Component} from "@angular/core"
import {NavController, ToastController} from "ionic-angular"

import {User} from '../../../models/User'
import {UserService} from '../../../providers/user.service'
import {CameraService} from '../../../providers/camera.service'
import {ProfilePage} from '../profile.component'

@Component({
  templateUrl: "change-photo.html",
  selector: "change-photo"
})
export class ChangePhotoPage {

  base64Image: string;
  public user: User;

  constructor(public navCtrl: NavController,
              private toastCtrl: ToastController,
              private _userService: UserService,
              private _cameraService: CameraService) {

    _userService.getLogedUser().subscribe((data) => {
      this.user = data;
    });

    this.base64Image = null;
  }

  takePicture(): void {
    this._cameraService.takePicture({}).then(data => this.base64Image = data,
      error => {
        let toast = this.toastCtrl.create({message: error, duration: 3000});
        toast.present();
      });
  }

  confirm() {
    // this._accountService.sendPicture({ 'picture': [{ 'content': this.base64Image }] }, this._userService.getLogedUser()).subscribe(
    // 	result => {
    // 		this.navCtrl.setRoot(ProfilePage);
    // 	},
    // 	error => {
    // 		let toast = this.toastCtrl.create({
    // 			message: "Houve um erro ao enviar a foto do perfil. Por favor tente novamente.",
    // 			duration: 3000
    // 		});
    // 		toast.present();
    // 	}
    // );
  }

  cancel() {
    this.takePicture();
  }

  //cancelar para voltar para o página do perfil
  cancelAction() {
    this.navCtrl.setRoot(ProfilePage);
  }


}
