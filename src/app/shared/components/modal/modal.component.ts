import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  @Input() header: string = '';
  @Input() description: string = '';
  @Input() id: string = '';

  constructor(
    private _navParamsService : NavParams,
    private _modalController: ModalController) { }

  ngOnInit() {
    this.header = this._navParamsService.get('header');

    this.description = this._navParamsService.get('description');
  }

  dismiss() {
    this._modalController.dismiss();
  }

}
