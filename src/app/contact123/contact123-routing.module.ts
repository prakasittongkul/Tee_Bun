import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Contact123Page } from './contact123.page'; // Correct page import

const routes: Routes = [
  {
    path: '',
    component: Contact123Page, // Correct component
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Contact123PageRoutingModule {} // Correct routing module name
