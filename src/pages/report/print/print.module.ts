import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { PrintPage } from './print';
import { HeaderComponentModule } from '../../../app/share/components/header/header.module';

@NgModule({
  declarations: [PrintPage],
  imports: [HeaderComponentModule, IonicPageModule.forChild(PrintPage)],
  exports: [PrintPage]
})
export class PrintPageModule {}
