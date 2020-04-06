import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcelerometerPageRoutingModule } from './acelerometer-routing.module';

import { AcelerometerPage } from './acelerometer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcelerometerPageRoutingModule
  ],
  declarations: [AcelerometerPage]
})
export class AcelerometerPageModule {}
