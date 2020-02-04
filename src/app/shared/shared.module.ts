import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { ModalService } from './services/modal.service';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [ModalComponent],
  entryComponents: [ModalComponent],
  providers: [ModalService],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class SharedModule { }
