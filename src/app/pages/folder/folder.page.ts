import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;  
  public name: string;
  public age : string;
  public sex: string;

  constructor(private activatedRoute: ActivatedRoute, public alertController: AlertController) { }

  async presentAlert() {

    var str = 'Bienvenido: ' + this.name + '<br/>De sexo: ' + this.sex + '<br/>De edad: ' + this.age;

    const alert = await this.alertController.create({
      header: 'HOLA MUNDO',
      subHeader: '',
      message: str,
      buttons: ['ACEPTAR']
    });

    await alert.present();
  }

  cleanFields() {   
    this.ngOnInit();
  }  

  ngOnInit() {
    this.folder = "Hola Mundo";
    this.name = '';
    this.age = '';
    this.sex = '';
  }

}
