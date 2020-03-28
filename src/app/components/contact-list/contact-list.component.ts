import { ContactListServiceService } from './../../services/contact-list-service.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {

  contacts : [];

  constructor(private contactService : ContactListServiceService, public alertController: AlertController) { }

  async presentAlert(contact:any) {  

    var str = 'Calle: '+contact.address.street+'<br/>Ciudad: '+contact.address.city+'<br/>Código postal: '+contact.address.zipcode; 

    const alert = await this.alertController.create({
      header: contact.name,
      subHeader: 'Dirección',
      message: str ,
      buttons: ['ACEPTAR']
    });

    await alert.present();
  }

  ngOnInit() {
    this.contactService.getContactos().subscribe(
      r => {
        this.contacts = r;        
      }
    );
  }

  selectItem(contact:any) {
    this.presentAlert(contact);
  }

}
