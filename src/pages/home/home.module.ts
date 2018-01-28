import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";

import { HeaderComponentModule } from '../../app/share/components/header/header.module';
import { HomePage } from "./home";

@NgModule({
  declarations: [HomePage],
  imports: [HeaderComponentModule, IonicPageModule.forChild(HomePage)],
  exports: [HomePage]
})
export class HomePageModule {}
