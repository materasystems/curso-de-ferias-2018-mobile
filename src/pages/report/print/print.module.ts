import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrintPage } from './print';

@NgModule({
  declarations: [PrintPage],
  imports: [IonicPageModule.forChild(PrintPage)],
  exports: [PrintPage]
})
export class PrintPageModule {}
