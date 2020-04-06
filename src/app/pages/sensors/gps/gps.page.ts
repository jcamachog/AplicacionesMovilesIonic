import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ToastController } from '@ionic/angular';

declare var google;

@Component({
  selector: 'app-gps',
  templateUrl: './gps.page.html',
  styleUrls: ['./gps.page.scss'],
})
export class GpsPage implements OnInit {

  public tittle:String;
  public urlBackward:String;

  constructor(private geolocation: Geolocation, private toastController: ToastController) { }

  ngOnInit() {
    this.tittle = "Sensor GPS - Mi Ubicación";
    this.urlBackward = "/sensors/types";

    this.geolocation.getCurrentPosition().then((resp) => {
      console.log('lat: '+ resp.coords.latitude);
      console.log('lon: '+ resp.coords.longitude);

      this.presentToast(resp.coords.latitude, resp.coords.longitude);

      var latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);  

      var mapOptions = {
        center: latLng,
        zoom: 15
      }
            
      var map = new google.maps.Map(document.getElementById('map'), mapOptions);

      var marker = new google.maps.Marker({
        position: latLng,
        map: map,        
        tittle: 'Mi ubicacion!'
       });     
    
   }).catch((error) => {
     console.log('Error getting location', error);
   });
  }

  async presentToast(lat:number, lon:number) {
    var msg = "Latitud: "+lat+"<br>Longitud:"+lon;
    const toast = await this.toastController.create({
      message: msg,
      buttons: [{
        text: 'x',
        role: 'cancel'
      }]
      
    });
    toast.present();
  }

}
