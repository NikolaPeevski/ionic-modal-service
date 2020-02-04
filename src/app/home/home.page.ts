import { Component } from '@angular/core';
import { ModalService } from '../shared/services/modal.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private _modalService: ModalService) {}

  presentModal(): void {
    this._modalService.presentModal();
  }

}
