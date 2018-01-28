import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";

import { HeaderComponentModule } from "../../app/share/components/header/header.module";
import { ProfilePage } from "./profile";

@NgModule({
  declarations: [ProfilePage],
  imports: [HeaderComponentModule, IonicPageModule.forChild(ProfilePage)],
  exports: [ProfilePage]
})
export class ProfilePageModule {}
