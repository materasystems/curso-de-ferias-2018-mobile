import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";

import { ScannerPage } from "./scanner";
import { HeaderComponentModule } from "../../app/share/components/header/header.module";

@NgModule({
  declarations: [ScannerPage],
  imports: [HeaderComponentModule, IonicPageModule.forChild(ScannerPage)],
  exports: [ScannerPage]
})
export class ScannerPageModule {}
