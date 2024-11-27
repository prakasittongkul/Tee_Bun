import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';  // Import NavController
import { DataapiService } from '../dataapi.service';

@Component({
  selector: 'app-adminfood',
  templateUrl: './adminfood.page.html',
  styleUrls: ['./adminfood.page.scss'],
})
export class AdminfoodPage {
  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef<HTMLInputElement>;

  txtname: any;
  txtprice: any;
  txttype: any;

  constructor(
    public dataapi: DataapiService,
    private route: Router,
    private navCtrl: NavController  // Inject NavController here
  ) {}

  // ฟังก์ชันสำหรับเพิ่มข้อมูล
  addmember() {
    let data = {
      name: this.txtname,
      price: this.txtprice,
      type: this.txttype,
    };

    this.dataapi.addData(data).subscribe({
      next: (res: any) => {
        console.log('ข้อมูลถูกเพิ่ม', res);
      },
      error: (error: any) => {
        console.log('Error', error);
      }
    });

    this.clearForm();
  }

  goBack() {
    this.navCtrl.navigateBack('/food');  // Correctly use navCtrl for navigation
  }

  clearForm() {
    this.txtname = '';
    this.txtprice = '';
    this.txttype = '';
  }

  show() {
    this.route.navigate(['/show-menu']);
  }
}
