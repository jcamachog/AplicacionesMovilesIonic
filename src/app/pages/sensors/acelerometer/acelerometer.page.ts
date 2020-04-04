import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acelerometer',
  templateUrl: './acelerometer.page.html',
  styleUrls: ['./acelerometer.page.scss'],
})
export class AcelerometerPage implements OnInit {

  public tittle:String;
  public urlBackward:String;

  constructor() { }

  ngOnInit() {    
    this.tittle = "Sensor Acelerómetro";
    this.urlBackward = "/sensors/types";
  }

}
