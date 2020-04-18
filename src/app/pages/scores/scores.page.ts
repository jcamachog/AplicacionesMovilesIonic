import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.page.html',
  styleUrls: ['./scores.page.scss'],
})
export class ScoresPage implements OnInit {

  public scores:string;

  constructor() { }

  ngOnInit() {
    this.scores = "Mis Calificaciones";
  }

}
