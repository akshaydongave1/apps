import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-add-new-customer',
  templateUrl: './add-new-customer.page.html',
  styleUrls: ['./add-new-customer.page.scss'],
})
export class AddNewCustomerPage implements OnInit {
  baseUrl=environment.baseUrl;
	public customerForm: FormGroup;
	public submitAttempt: boolean = false;
  customerName:string
  customerNumber:string
  customerArea:string
  customerMail:string

  constructor(public formBuilder: FormBuilder,
    private http: HttpClient,
    private navCtrl: NavController,
  ) {
    this.customerForm = formBuilder.group({
      customerName: ['', Validators.compose([Validators.minLength(1), Validators.required])],
      customerNumber: ['', Validators.compose([Validators.required])],
      customerArea: ['', Validators.compose([Validators.required])],
      customerMail: ['', Validators.compose([Validators.required])],
    });
  }
  ngOnInit() {
  }
  goBack(){
    this.navCtrl.pop();
  }
  submitData(){
    if(this.customerForm.valid){
      this.customerName=this.customerForm.controls['customerName'].value;
      this.customerNumber=this.customerForm.controls['customerNumber'].value;
      this.customerArea=this.customerForm.controls['customerArea'].value;
      this.customerMail=this.customerForm.controls['customerMail'].value;

    }

  }

}
