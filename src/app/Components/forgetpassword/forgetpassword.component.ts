import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../Services/UserService/user.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {
  ForgetpasswordForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  //component life cycle hook
  //get called one time only automatically once component loaded browser
  ngOnInit() {
    console.log("ononit life cycle gets called ");
    this.ForgetpasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
  onSubmit() {
    console.log(this.ForgetpasswordForm.value);
    if (this.ForgetpasswordForm.valid) {
      let reqPayload = {
        email: this.ForgetpasswordForm.value.email,
      }
      this.userService.ForgetPasswordService(reqPayload).subscribe((response: any) => {
        console.log("response data", response);
      })
    } else {
      return;
    }
  }
}
