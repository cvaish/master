import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/model/company';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  constructor(private location:Location,private route:ActivatedRoute,private common:CommonService) { }

  compp:Company;
  
  ngOnInit(): void {
  // first way
  // let comId=parseInt(this.route.snapshot.paramMap.get('id'));
  // this.common.getCompany(comId).subscribe(data=>{this.compp=data});

  // Second day
   this.route.paramMap.subscribe(param1=>{
   this.common.getCompany(parseInt(param1.get('id'))).subscribe(data=>{this.compp=data})
  })
  }
  getback()
  {
    this.location.back();
  }


}
