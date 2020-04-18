import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular'
import { BehaviorSubject } from 'rxjs'

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

  private createTable() {    
    const sql = 'CREATE TABLE IF NOT EXISTS scores ' +
    '(id INTEGER PRIMARY KEY AUTOINCREMENT, week TEXT, activity TEXT, score TEXT);';
    return this.database.executeSql(sql, []);
  }

}
