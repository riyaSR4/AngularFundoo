import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../Services/UserService/user.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  ResetpasswordForm!: FormGroup;
  token!: any;
  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private activatedRoute: ActivatedRoute) {
    this.token = this.activatedRoute.snapshot.paramMap.get('token');
  }

  ngOnInit() {
    console.log("ononit life cycle gets called ");
    this.ResetpasswordForm = this.formBuilder.group({
      // email: ['', [Validators.required, Validators.email]],
      // oldpassword: ['', [Validators.required, Validators.minLength(6)]],
      NewPassword: ['', [Validators.required, Validators.minLength(6)]],
      ConfirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    console.log(this.ResetpasswordForm.value);
    if (this.ResetpasswordForm.valid) {
      // let reqPayload = {
      //   email: this.ResetpasswordForm.value.email,
      //   oldpassword: this.ResetpasswordForm.value.password,
      //   newpassword: this.ResetpasswordForm.value.password,
      //   confirmpassword: this.ResetpasswordForm.value.password,
      // }
      let res = "?NewPassword=" + this.ResetpasswordForm.get("NewPassword") + "&"
        + "ConfirmPassword=" + this.ResetpasswordForm.get("ConfirmPassword")
      this.userService.ResetPasswordService(this.ResetpasswordForm.value, this.token).subscribe((response: any) => {
        console.log("response data", response);
      })
    } else {
      return;
    }
  }
}

