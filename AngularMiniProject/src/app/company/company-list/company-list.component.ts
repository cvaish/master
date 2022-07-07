import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/model/company';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  constructor(private common:CommonService) { }

  cc:Company[];

  ngOnInit(): void {

    this.common.getComdata().subscribe(data=>this.cc=data);
  }

  deletedata1(id:number)
  {
   this.common.deleteCom(id).subscribe();
   window.location.reload();
  }

}
