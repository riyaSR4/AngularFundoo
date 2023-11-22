import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from '../Services/UserService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginForm!: FormGroup;
// showPassword: boolean = false;
constructor(private formBuilder: FormBuilder,private userService:UserService,
  private router: Router, private _snackBar: MatSnackBar){ }

//   togglePasswordVisibility(): void {
//     this.showPassword = !this.showPassword;
//  }

//component life cycle hook
//get called one time only automatically once component loaded in browser
ngOnInit() {
  console.log("ononit life cycle gets called ");
  this.loginForm = this.formBuilder.group({
    email: ['',[Validators.required, Validators.email]],
    password: ['',[Validators.required, Validators.minLength(6)]]
  });
}
onSubmit(){
  console.log(this.loginForm.value);
  if(this.loginForm.valid){
    let reqPayload={
      email:this.loginForm.value.email,
      password:this.loginForm.value.password
    }
    this.userService.loginService(reqPayload).subscribe((response:any)=>{
      console.log("response data",response);
      localStorage.setItem('token',response.data);
      localStorage.setItem('Id',response.id);
      console.log(response.Id);
      this.router.navigate(['home/getallnotes'])
      this._snackBar.open('Login Successful!!!', '', {
        duration: 2000
      });
    })
  }else{
    //snackbar show form not valid,fill the form correct
    return;
  }

  //api integration
}
// get passwordControl() {
//   return this.loginForm.get('password');
// }
}
