import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acelerometer',
  templateUrl: './acelerometer.page.html',
  styleUrls: ['./acelerometer.page.scss'],
})
export class AcelerometerPage implements OnInit {

  public axis_x:String;
  public axis_y:String;
  public axis_z:String;
  public tittle:String;
  public urlBackward:String;

  constructor() { }

  ngOnInit() {    
    this.tittle = "Sensor Acelerómetro";
    this.urlBackward = "/sensors/types";
  }

  iniciar() {
    
  }

  detener() {
    //this.subscription.unsubscribe();
  }
}
