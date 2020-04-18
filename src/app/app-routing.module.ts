import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./pages/folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'contacts/:id',
    loadChildren: () => import('./pages/contacts/contacts.module').then( m => m.ContactsPageModule)
  },
  {
    path: 'sensors/:id',
    loadChildren: () => import('./pages/sensors/sensors.module').then( m => m.SensorsPageModule)
  },
  {
    path: 'sensors/types/gps',
    loadChildren: () => import('./pages/sensors/gps/gps.module').then( m => m.GpsPageModule)
  },
  {
    path: 'sensors/types/acelerometer',
    loadChildren: () => import('./pages/sensors/acelerometer/acelerometer.module').then( m => m.AcelerometerPageModule)
  },
  {
    path: 'scores/:id',
    loadChildren: () => import('./pages/scores/scores.module').then( m => m.ScoresPageModule)
  },
  {
    path: 'welcome/:id',
    loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
