import { NgModule } from '@angular/core';
import { ContactListComponent } from './contact-list/contact-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ScoresListComponent } from './scores-list/scores-list.component';


@NgModule({
    declarations : [ContactListComponent, ScoresListComponent],
    exports : [ContactListComponent, ScoresListComponent],
    imports :  [
        CommonModule,
        FormsModule,
        IonicModule
      ]
})
export class ComponentsModule{}