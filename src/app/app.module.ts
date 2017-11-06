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
// PAGES - FIM

// SERVICES - INCIO
import {UserService} from "./providers/user.service"
import {AccountService} from "./providers/account.service"
// SERVICES - FIM

@NgModule({
  declarations: [
    MyApp,
    HeaderComponent,
    HomePage,
    ProfilePage,
    ChangePasswordPage
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
    ChangePasswordPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserService,
    AccountService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
