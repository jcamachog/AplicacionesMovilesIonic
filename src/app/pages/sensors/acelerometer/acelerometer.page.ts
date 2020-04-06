import { Component, OnInit } from '@angular/core';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion/ngx';

@Component({
  selector: 'app-acelerometer',
  templateUrl: './acelerometer.page.html',
  styleUrls: ['./acelerometer.page.scss'],
})
export class AcelerometerPage implements OnInit {
  
  public state:boolean;
  subscription:any;
  public axis_x:number;
  public axis_y:number;
  public axis_z:number;
  public tittle:String;
  public urlBackward:String;

  constructor(private deviceMotion: DeviceMotion) { }

  ngOnInit() { 
    this.state = false;   
    this.tittle = "Sensor Acelerómetro";
    this.urlBackward = "/sensors/types";

    this.deviceMotion.getCurrentAcceleration().then(
      (acceleration: DeviceMotionAccelerationData) => console.log(acceleration.x, acceleration.y, acceleration.z),
      (error: any) => console.log(error)
    );
  }

  iniciar() {
    this.state = true;    
    this.subscription = this.deviceMotion.watchAcceleration().subscribe((acceleration: DeviceMotionAccelerationData) => {
      this.axis_x = acceleration.x;
      this.axis_y = acceleration.y;
      this.axis_z = acceleration.z;
    });
  }

  detener() {
    this.state = false;    
    this.subscription.unsubscribe();
    this.axis_x = 0;
    this.axis_y = 0;
    this.axis_z = 0;
  }
}
