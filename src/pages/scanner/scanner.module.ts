import { ScannerPage } from "./scanner";
import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";

@NgModule({
  declarations: [ScannerPage],
  imports: [IonicPageModule.forChild(ScannerPage)],
  exports: [ScannerPage]
})
export class ScannerPageModule {}
