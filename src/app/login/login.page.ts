import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  baseUrl = environment.baseUrl;
  public loginForm: FormGroup;
  public submitAttempt: boolean = false;

  constructor(
    public formBuilder: FormBuilder,
    private http: HttpClient,
    private navCtrl: NavController,
  ) {
    this.loginForm = formBuilder.group({
      firstName: ['', Validators.compose([Validators.minLength(1), Validators.required])],
      lastName: ['', Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {
  }
  goBack(){
    this.navCtrl.pop();
  }
  submitData() {

    this.submitAttempt = true;

    if (!this.loginForm.valid) {

      console.log("loin call");
      this.navCtrl.navigateForward("customer");
      // this.http.get(this.baseUrl).subscribe((val)=>{

      // })
    }
  }
}
