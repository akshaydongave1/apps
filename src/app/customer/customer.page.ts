import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {
  data = [
    { "name": "akshay dongave", "status": "paid" ,"totalAmt":"500","paidAmt":"300","remaining":"200" },
    { "name": "akshay dongave", "status": "true","totalAmt":"500","paidAmt":"300","remaining":"200" },
    { "name": "akshay dongave", "status": "true","totalAmt":"500","paidAmt":"300","remaining":"200" },
    { "name": "akshay dongave", "status": "false" ,"totalAmt":"500","paidAmt":"300","remaining":"200"},
    { "name": "akshay dongave", "status": "false","totalAmt":"500","paidAmt":"300","remaining":"200" },
    { "name": "akshay dongave", "status": "false" ,"totalAmt":"500","paidAmt":"300","remaining":"200"},
    { "name": "akshay dongave", "status": "false","totalAmt":"500","paidAmt":"300","remaining":"200" },
    { "name": "akshay dongave", "status": "true" ,"totalAmt":"500","paidAmt":"300","remaining":"200"}
  ];
  // customList
  CustMail: string;
  CustMob: string;
  CustName: string;
  customForm: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    private http: HttpClient,
    private alertController: AlertController,
    private navCtrl: NavController,
  ) {
    this.customForm = formBuilder.group({
      CustName: ['', Validators.compose([Validators.required])],
      lastName: ['', Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {
  }
  goToAddCustomer() {
    this.navCtrl.navigateForward("add-new-customer");
  }
  goBack(){
    this.navCtrl.pop();
  }
  async presentAlert() {
    let str = '<div class="doCenterData">  <form id="cform"> <span>Customer Name</span>' +
      '<ion-input id="cname" formControlName="CustName" class="input" type="text" mode="ios"></ion-input>' +
      '<span>Mobile Number</span><ion-input formControlName="CustMob" id="mob" max="10" class="input" mode="ios"></ion-input>' +
      '<span>Email -Id</span><ion-input formControlName="CustMail" id="mail" class="input" mode="ios"></ion-input>' +
      '<span>Select Range</span><ion-item><ion-label class="chkTxt">MONTH</ion-label><ion-checkbox checked="true"></ion-checkbox></ion-item>' +
      '<ion-item><ion-label class="chkTxt">WEEK</ion-label><ion-checkbox checked="true"></ion-checkbox></ion-item></form></div>';

    const alert = await this.alertController.create({
      header: "New Customer",
      message: str,
      buttons: [{
        text: 'ADD',
        handler: () => {
          // let mobNumber: string = document.getElementById("cname");
          console.log(this.CustName);

        }
      }]
    });
    let mob = document.getElementById("mob");
    mob.setAttribute("type", "number");
    mob.setAttribute("maxlength", "10");

    let elementWrap: HTMLElement = document.getElementsByClassName("alert-wrapper")[0] as HTMLElement;
    elementWrap.style.borderRadius = "20px";
    elementWrap.style.width = "90%";

    let elementInnerGroup: HTMLElement = document.getElementsByClassName("alert-message")[0] as HTMLElement;
    elementInnerGroup.style.paddingLeft = "10px";
    elementInnerGroup.style.paddingRight = "10px";
    elementInnerGroup.style.paddingTop = "20px";
    elementInnerGroup.style.paddingBottom = "0px";
    elementInnerGroup.style.overflowX = "scroll";

    let elementBtn: HTMLElement = document.getElementsByClassName("alert-button-group")[0] as HTMLElement;
    elementBtn.style.width = "70%";
    elementBtn.style.background = "cyan";
    elementBtn.style.margin = "0 auto";
    elementBtn.style.display = "flex";
    elementBtn.style.justifyContent = "center";
    elementBtn.style.borderRadius = "40px";

    let CustForm: HTMLElement = document.getElementById('cform') as HTMLElement;
    CustForm.setAttribute("formGroup", "CustName")

    let CustNameElm: HTMLElement = document.getElementById('cname') as HTMLElement;
    CustNameElm.setAttribute("formControlName", "CustName");
    await alert.present();
  }

}
