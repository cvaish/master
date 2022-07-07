import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../model/company';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  
  url:string=" http://localhost:3000/employee";

  url1:string=" http://localhost:3000/company";
  
  constructor(private http:HttpClient) { }
  //for save operation
  saveEmployee(emp:Employee)
  {
   return this.http.post(this.url,emp); 
  }

  //for get data operation
  getalldata():Observable<Employee[]>
  {
    return this.http.get<Employee[]>(this.url);
  }

  //for delete operation
  deleteemployee(id:number)
  {
    return this.http.delete(this.url+"/"+id);
  }

  //for update operation
  getemployee(id:number):Observable<Employee>
  {
    return this.http.get<Employee>(this.url+"/"+id);
  }

  updateemployeye(emp:Employee):Observable<Employee>
  {
   return  this.http.put<Employee>(this.url+"/"+emp.id,emp);
  //  location.reload();
  }
  

  // for company coding
  saveCompany(com:Company)
  {
  return  this.http.post(this.url1,com);
  }

  getComdata():Observable<Company[]>
  {
    return this.http.get<Company[]>(this.url1);
  }

  deleteCom(id:number)
  {
   return this.http.delete(this.url1+"/"+id);
  }

  getCompany(id:number):Observable<Company>
  {
   return this.http.get<Company>(this.url1+"/"+id);
  }

  updatecompany(com:Company):Observable<Company>
  {
    return this.http.put<Company>(this.url1+'/'+com.id,com);
  }
}
