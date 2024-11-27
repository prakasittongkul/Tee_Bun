import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DataapiService } from '../dataapi.service';

@Component({
  selector: 'app-show-menu',
  templateUrl: './show-menu.page.html',
  styleUrls: ['./show-menu.page.scss'],
})
export class ShowMenuPage implements OnInit {
  member: any[] = []; // เพิ่มตัวแปรสำหรับเก็บข้อมูลสมาชิก

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private dataapi: DataapiService // Inject DataapiService
  ) {}

  ngOnInit() {
    this.loadDataMen(); // โหลดข้อมูลเมื่อหน้าเริ่มต้น
  }

  loadDataMen(event?: any) {
    this.dataapi.listMenber().subscribe({
      next: (res: any) => {
        this.member = res.map((item: any) => ({
          name: item.name,
          price: item.price,
          type: item.type,
        }));
        console.log(this.member); // ตรวจสอบข้อมูล
        if (event) event.target.complete();
      },
      error: (error: any) => {
        console.log('Error:', error);
        if (event) event.target.complete();
      },
    });
  }

  goBack() {
    this.navCtrl.navigateBack('/food'); // กลับไปยังหน้าก่อนหน้า
  }
}
