import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {CameraOptions, Camera} from "@ionic-native/camera";

@Injectable()
export class  CameraService {

  constructor(private camera: Camera) {
  }

  takePicture(obj): Promise<any> {

    const options: CameraOptions = {
      cameraDirection: obj && obj.selfie ? 1 : 0,
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    return new Promise((resolve, reject) => {
      this.camera.getPicture(options).then((imageData) => {
        resolve(imageData);
      }, (error) => {
        //IOS -> no image selected
        //ANDROID -> Camera cancelled.
        if (error !== 'no image selected' && error !== 'Camera cancelled.') {
          reject("Não foi possível obter a foto de perfil. Houve um problema com a camera.");
        }
      });
    });

  }

}
