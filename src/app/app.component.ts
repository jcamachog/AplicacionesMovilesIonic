import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Bienvenida',
      url: '/welcome/home',
      icon: 'home'
    },
    {
      title: 'Hola Mundo',
      url: '/folder/Inbox',
      icon: 'earth'
    },
    {
      title: 'Contactos',
      url: '/contacts/List',
      icon: 'people'
    },
    {
      title: 'Sensores',
      url: '/sensors/types',
      icon: 'location'
    },    
    {
      title: 'Mis Calificaciones',
      url: '/scores/list',
      icon: 'school'
    }    
  ];
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
