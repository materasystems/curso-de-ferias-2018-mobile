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
// PAGES - FIM

// SERVICES - INCIO
import {UserService} from "./providers/user.service"
// SERVICES - FIM

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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
