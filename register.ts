import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { RegistrationValidator } from './registration_validator';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  registrationFormGroup: FormGroup;
  passwordFormGroup: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public formBuilder: FormBuilder) {
    this.formValidator();
  }

  ionViewDidLoad() {

  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  formValidator() {
    this.passwordFormGroup = this.formBuilder.group({
      password: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(30)])],
      repeatPassword: ['',Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(30)])],
    }, { validator: RegistrationValidator.validate.bind(this) })

    this.registrationFormGroup = new FormGroup({
      username: new FormControl('', Validators.compose([Validators.required,Validators.minLength(3), Validators.maxLength(30)])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
      ])),
      passwordFormGroup: this.passwordFormGroup
    });
  }


  onSubmitRegisterDetails(value) {
    console.log("FORM VALUE: ", value);
  }
}
