import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { DataapiService } from '../dataapi.service';

@Component({
  selector: 'app-contact123',
  templateUrl: './contact123.page.html',
  styleUrls: ['./contact123.page.scss'],
})
export class Contact123Page implements OnInit {
  member: any = [];

  constructor(
    private http: HttpClient,
    public dataapi: DataapiService,
    private nav: NavController
  ) {}

  ngOnInit() {
    this.loadDataMen(); // Call loadDataMen when the page initializes
  }

  loadDataMen(event?: any) {
    this.dataapi.listMenber().subscribe({
      next: (res: any) => {
        console.log(res);
        this.member = res;
        if (event) event.target.complete(); // Complete the refresher if triggered by ionRefresh
      },
      error: (error: any) => {
        console.log('Error:', error); // Log the error correctly
        if (event) event.target.complete(); // Ensure the refresher completes even if there's an error
      },
    });
  }
}
