import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../components/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    private _modalController: ModalController
    ) { }

  presentModal(): void {
    this._modalController.create({
      component: ModalComponent,
      componentProps: {
        'header': 'My awesome modal window!',
        'description': 'Boom pow!'
      },
      id: '1'
    }).then(modal => modal.present());
  }
}
