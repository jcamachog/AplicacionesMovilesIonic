import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gps',
  templateUrl: './gps.page.html',
  styleUrls: ['./gps.page.scss'],
})
export class GpsPage implements OnInit {

  public tittle:String;
  public urlBackward:String;

  constructor() { }

  ngOnInit() {
    this.tittle = "Sensor GPS - Mi Ubicación";
    this.urlBackward = "/sensors/types";
  }

}
