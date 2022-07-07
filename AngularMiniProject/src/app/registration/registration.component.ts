import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private fb:FormBuilder, private commonService: CommonService, private location:Location) { }
  registerForm:FormGroup;

  ngOnInit(): void {
    this.registerForm=this.fb.group(
      {
        id:[],
        ename:[''],
        email:[''],
        mobile:[''],
        designation:[''],
        username:[''],
        password:['']
      }
    )
  }
  onSubmit()
  {
    if(this.registerForm.valid){
      console.log("in submit method");
      this.commonService.saveEmployee(this.registerForm.value).subscribe();
      window.location.reload();
      console.log("submited");
    }
  }

  goBack(){
      this.location.back();
  }
}
