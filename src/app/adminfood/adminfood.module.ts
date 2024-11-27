import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AdminfoodPage } from './adminfood.page'; // Correct page
import { AdminfoodPageRoutingModule } from './adminfood-routing.module';  // Correct routing module

@NgModule({
  declarations: [AdminfoodPage],  // Correct page declaration
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminfoodPageRoutingModule  // Correct routing module
  ]
})
export class AdminfoodPageModule {}  // Correct module name
