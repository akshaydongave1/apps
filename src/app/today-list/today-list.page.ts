import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-today-list',
  templateUrl: './today-list.page.html',
  styleUrls: ['./today-list.page.scss'],
})
export class TodayListPage implements OnInit {
public data=[
  {"id":"9860129797","name":"akshay dongave","qty":"5" ,"checkStatus":"true"}
]
  constructor(    private navCtrl: NavController,
    ) { }

  ngOnInit() {
  }
  goBack(){
    this.navCtrl.pop();
  }
}
