import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../../services/scores.service';
import { Score } from '../../models/Score';

@Component({
  selector: 'app-scores-list',
  templateUrl: './scores-list.component.html',
  styleUrls: ['./scores-list.component.scss'],
})
export class ScoresListComponent implements OnInit {

  public scores = [];

  constructor(private scoresService:ScoresService) {
    this.scoresService.getDBState().subscribe(
      r => {
          if(r) {

          }else{

          }
    });
   }

    getScoresList() {
      this.scoresService.getScores().then(
        r => {
          this.scores = r;
        }
      );
    }

    deleteScore(score:Score){
      this.scoresService.deleteScore(score.id);
      this.getScoresList();
    }

    ngOnInit() {
      this.getScoresList();
    }

}
