import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginMode:boolean=false;
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
  }
  loginForm = this.fb.group({
    email: [''],
    password: ['']
  })
  onSubmit(){
    console.warn(this.loginForm.value);
  }
  onSwithMode(){
this.loginMode=!this.loginMode;

  }

}
