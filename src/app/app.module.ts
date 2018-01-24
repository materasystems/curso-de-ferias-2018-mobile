// Root
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import {
  MODULES,
  NATIVEMODULES,
  PROVIDERS,
  NATIVEPROVIDERS
} from "./app.imports";

// Components
import { MyApp } from "./app.component";

@NgModule({
  declarations: [MyApp],
  imports: [MODULES, NATIVEMODULES, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: [
    PROVIDERS,
    NATIVEPROVIDERS,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
