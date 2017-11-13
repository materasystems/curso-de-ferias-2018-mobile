// DEPENDENCES
import {BrowserModule} from '@angular/platform-browser'
import {ErrorHandler, NgModule} from '@angular/core'
import {StatusBar} from '@ionic-native/status-bar'
import {SplashScreen} from '@ionic-native/splash-screen'
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular'

// COMPONENTS
import {MyApp} from './app.component'
import {HeaderComponent} from "./components/shared/header/header.component"

// PAGES
import {HomePage} from './pages/home/home'
import {ProfilePage} from './pages/profile/profile.component'

// SERVICES
import {UserService} from "./providers/user.service"
import {AccountService} from "./providers/account.service"

// MODULES
@NgModule({
  declarations: [
    MyApp,
    HeaderComponent,
    HomePage,
    ProfilePage
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
    ProfilePage
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
