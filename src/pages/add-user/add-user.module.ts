import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";

import { HeaderComponentModule } from '../../app/share/components/header/header.module';
import { AddUserPage } from "./add-user";

@NgModule({
  declarations: [AddUserPage],
  imports: [HeaderComponentModule, IonicPageModule.forChild(AddUserPage)],
  exports: [AddUserPage]
})
export class AddUserPageModule {}
