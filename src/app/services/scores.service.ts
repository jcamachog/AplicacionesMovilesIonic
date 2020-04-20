import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular'
import { BehaviorSubject, Observable } from 'rxjs';
import { Score } from '../models/score';

@Injectable({
  providedIn: 'root'
})
export class ScoresService {

  private database:SQLiteObject;
  private dbList = new BehaviorSubject<boolean>(false);

  constructor(private platform: Platform, private sqlite: SQLite) { 
      this.platform.ready().then(
        () => {
          this.sqlite.create({
            name : 'db_scores.db',
            location : 'default'
          }).then((db : SQLiteObject) => {
            this.database = db;
            this.createTable().then(() => {
              this.dbList.next(true);
            });
          })
        }
      );
  }

  public getDBState() {
    return this.dbList.asObservable();
  }

  public addScore(s:Score) {
    let data = [s.week, s.activity, s.score];
    const sql = 'INSERT INTO scores (week, activity, score) VALUES (?,?,?)';
    return this.database.executeSql(sql, data);
  }

  public deleteScore(id:number) {
    let data = [id];
    const sql = 'DELETE FROM scores WHERE id = ?';
    return this.database.executeSql(sql, data);
  }

  private createTable() {    
    const sql = 'CREATE TABLE IF NOT EXISTS scores ' +
    '(id INTEGER PRIMARY KEY AUTOINCREMENT, week TEXT, activity TEXT, score TEXT);';
    return this.database.executeSql(sql, []);
  }

  public getScores() : Promise<any>{
    const sql = 'SELECT * FROM scores';
    return this.database.executeSql(sql, []).then(
      r => {
        let scores = [];
        for(var i=0; i<r.rows.length; i++) {
          let s = new Score();
          s.id = r.rows.item(i).id;
          s.week = r.rows.item(i).week;
          s.activity = r.rows.item(i).activity;
          s.score = r.rows.item(i).score;
          scores.push(s);
        }
        return scores;
      }
    );
  }

}
