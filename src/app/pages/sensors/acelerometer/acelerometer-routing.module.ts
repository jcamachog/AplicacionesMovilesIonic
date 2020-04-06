import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcelerometerPage } from './acelerometer.page';

const routes: Routes = [
  {
    path: '',
    component: AcelerometerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcelerometerPageRoutingModule {}
