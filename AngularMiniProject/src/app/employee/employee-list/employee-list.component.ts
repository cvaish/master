
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/model/employee';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(public cs:CommonService) { }
   em:Employee[];
  ngOnInit(): void {

  this.cs.getalldata().subscribe(data=>this.em=data);

  }
  deletedata(id:number)
  {
    this.cs.deleteemployee(id).subscribe();
  }
  
}
