import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../Services/UserService/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  RegisterForm!: FormGroup;
  // showPassword: boolean = false;
  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  // togglePasswordVisibility(): void {
  //   this.showPassword = !this.showPassword;
  // }

  ngOnInit() {
    console.log("ononit life cycle gets called ");
    this.RegisterForm = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(2)]],
      lastname: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phonenumber: ['', [Validators.required, Validators.minLength(10)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  onSubmit() {
    console.log(this.RegisterForm.value);
    // let reqPayload = {
    //   firstname: this.RegisterForm.value.firstname,
    //   lastname: this.RegisterForm.value.lastname,
    //   email: this.RegisterForm.value.email,
    //   password: this.RegisterForm.value.password,
    //   confirm: this.RegisterForm.value.confirm
    // }
    this.userService.RegisterService(this.RegisterForm.value).subscribe((response) => {
      console.log("response data", response);
    })
    // } else {
    //   return;
    // }
  }
  // get passwordControl() {
  //   return this.RegisterForm.get('password');
  // }
}



