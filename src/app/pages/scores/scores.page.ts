import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ScoresService } from '../../services/scores.service';
import { Score } from 'src/app/models/score';
import { ScoresListComponent } from 'src/app/components/scores-list/scores-list.component';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.page.html',
  styleUrls: ['./scores.page.scss'],
})
export class ScoresPage implements OnInit {

  public scores:string;
  @ViewChild(ScoresListComponent, {static : false}) scoresListComponent : ScoresListComponent;

  constructor(public alertController: AlertController, private scoresService:ScoresService) { }

  ngOnInit() {
    this.scores = "Mis Calificaciones";
  }

  public async addNewScore() {
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
            //console.log('Confirm Cancel');
          }
        }, {
          text: 'Guardar',
          handler: data => {
            console.log('Confirm Ok');

            let score = new Score;
            score.week = data.week;
            score.activity = data.activity;
            score.score = data.score;

            this.scoresService.addScore(score);
            this.scoresListComponent.getScoresList();
          }
        }
      ]
    });

    await alert.present();
  }

}
