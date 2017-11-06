// DEPENDENCES - INICIO
import {BrowserModule} from '@angular/platform-browser'
import {ErrorHandler, NgModule} from '@angular/core'
import {StatusBar} from '@ionic-native/status-bar'
import {SplashScreen} from '@ionic-native/splash-screen'
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular'
// DEPENDENCES - FIM

// COMPONENTS - INICIO
import {MyApp} from './app.component'
import {HeaderComponent} from "./components/shared/header/header.component"
// COMPONENTS - FIM

// PAGES - INICIO
import {HomePage} from './pages/home/home'
import {ProfilePage} from './pages/profile/profile.component'
import {ChangePasswordPage} from "./pages/profile/change-password/change-password"
import {ChangePhotoPage} from "./pages/profile/change-photo/change-photo"
// PAGES - FIM

// SERVICES - INCIO
import {UserService} from "./providers/user.service"
import {AccountService} from "./providers/account.service"
import {CameraService} from "./providers/camera.service"
// SERVICES - FIM

@NgModule({
  declarations: [
    MyApp,
    HeaderComponent,
    HomePage,
    ProfilePage,
    ChangePasswordPage,
    ChangePhotoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HeaderComponent,
    HomePage,
    ProfilePage,
    ChangePasswordPage,
    ChangePhotoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserService,
    AccountService,
    CameraService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
