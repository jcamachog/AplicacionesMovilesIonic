import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.page.html',
  styleUrls: ['./scores.page.scss'],
})
export class ScoresPage implements OnInit {

  public scores:string;

  constructor(public alertController: AlertController) { }

  ngOnInit() {
    this.scores = "Mis Calificaciones";
  }

  public async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Agregar una calificación',
      inputs: [
        {
          name: 'week',
          id: 'week',
          type: 'text',
          placeholder: 'Semana'
        },
        {
          name: 'activity',
          id: 'activity',
          type: 'text',
          placeholder: 'Actividad'
        },        
        {
          name: 'score',
          id:'score',
          type: 'number',
          placeholder: 'Escribe una calificación, ej:10',
          min: 1,
          max: 10
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Guardar',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

}
