import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.page.html',
  styleUrls: ['./sensors.page.scss'],
})
export class SensorsPage implements OnInit {

  public tittle:String;
  public urlGps:String;
  public urlAcele:String;  

  constructor() { }

  ngOnInit() {
    this.tittle = "Sensores";
    this.urlGps = "/sensors/types/gps";
    this.urlAcele =  "/sensors/types/acelerometer";
  }

}
