// Root
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { MODULES, PROVIDERS } from "./app.imports";
// --------------------------------------------------
// Native Providers
import { Camera } from "@ionic-native/camera";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
// --------------------------------------------------
// Components
import { MyApp } from "./app.component";
// --------------------------------------------------
@NgModule({
  declarations: [MyApp],
  imports: [MODULES, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: [
    PROVIDERS,
    Camera,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
