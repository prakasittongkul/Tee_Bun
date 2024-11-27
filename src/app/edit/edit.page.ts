import { Component, OnInit } from '@angular/core';
import { DataapiService } from '../dataapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  member: any = [];
  name: any;
  price: any;
  type: any;

  constructor(public dataapi: DataapiService, private route: Router) {}

  ngOnInit() {
    this.member = this.dataapi.datadetail;  // ใช้ตัวแปร datadetail ที่มีอยู่แล้วใน DataapiService
  }

  editmember() {
    let dataEdit = {
      name: this.member.name,
      price: this.member.price,
      type: this.member.type,
    };
    
    // ใช้ editData() แทน listMenber()
    this.dataapi.editData(dataEdit).subscribe({
      next: (res: any) => {
        console.log('แก้ไขข้อมูลได้สำเร็จ', res);
      },
      error: (error: any) => {
        console.log('ไม่สามารถแก้ไขข้อมูลได้สำเร็จ', error);
      },
    });
    
    this.route.navigateByUrl('/show-menu');
  }
}
