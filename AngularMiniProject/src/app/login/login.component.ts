import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router, private common: CommonService) { }
  loginForm:FormGroup;
  
  ngOnInit(): void {

    this.createLoginForm()

  }
  
  createLoginForm() {
    this.loginForm = this.fb.group(
      {
        userName:['',[Validators.required]],
        password:['',[Validators.required]]
      }
    )
  }
  onLoginSubmit() {
    if (this.loginForm.valid) {
      this.router.navigate(['login/header']);
    }
  }
}
