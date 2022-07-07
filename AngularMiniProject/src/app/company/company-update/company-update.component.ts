import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-company-update',
  templateUrl: './company-update.component.html',
  styleUrls: ['./company-update.component.css']
})
export class CompanyUpdateComponent implements OnInit {

  constructor(private fb:FormBuilder,private location:Location,private common:CommonService) { }
  updateForm:FormGroup;

  ngOnInit(): void {
  this.updateForm=this.fb.group({
    id:[],
    cname:[],
    email:[],
    mobile:[],
    username:[],
    password:[]
  })
  this.editdata();
  }
  editdata()
  {
    let comObj:any=this.location.getState();
    console.log('getstate'+comObj.id);
    if(comObj.id!=0)
    {
     this.updateForm.get('id').setValue(comObj.id);
     this.updateForm.get('cname').setValue(comObj.cname);
     this.updateForm.get('mobile').setValue(comObj.mobile);
     this.updateForm.get('email').setValue(comObj.email);
     this.updateForm.get('username').setValue(comObj.username);
     this.updateForm.get('password').setValue(comObj.password);
    
    }
  }
  onSubmit()
  {
    this.common.updatecompany(this.updateForm.value).subscribe();
    window.location.reload();
    this.location.back();

  }
  goBack()
  {
    this.location.back();
  }
}
