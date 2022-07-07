import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private routes:ActivatedRoute,private location:Location,private common:CommonService) { }

  employeeObj:Employee;

  ngOnInit(): void {
    //first way is snapshot
  let empid=parseInt(this.routes.snapshot.paramMap.get('id'));
  this.common.getemployee(empid).subscribe(data=>{this.employeeObj=data});
  }

  getback()
  {
    this.location.back();
  }
  
}
