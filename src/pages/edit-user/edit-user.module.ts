import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";

import { HeaderComponentModule } from '../../app/share/components/header/header.module';
import { EditUserPage } from "./edit-user";

@NgModule({
  declarations: [EditUserPage],
  imports: [HeaderComponentModule, IonicPageModule.forChild(EditUserPage)],
  exports: [EditUserPage]
})
export class EditUserPageModule {}
