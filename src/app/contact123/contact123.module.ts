// src/app/contact123/contact123.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Contact123Page } from './contact123.page';  // Correct page
import { Contact123PageRoutingModule } from './contact123-routing.module';  // Correct routing module

@NgModule({
  declarations: [Contact123Page],  // Correct page declaration
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,  // Ensure IonicModule is imported
    Contact123PageRoutingModule  // Correct routing module
  ]
})
export class Contact123PageModule {}  // Correct module name
