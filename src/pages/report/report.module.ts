import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";

import { ReportPage } from "./report";
import { HeaderComponentModule } from "../../app/share/components/header/header.module";

@NgModule({
  declarations: [ReportPage],
  imports: [HeaderComponentModule, IonicPageModule.forChild(ReportPage)],
  exports: [ReportPage]
})
export class ReportPageModule {}
