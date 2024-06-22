import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Enmployee } from '../enmployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  private baseUrl="http://localhost:8090/api/v1/employees"
  constructor( private httpClient:HttpClient) { }

  getEmployeesList(){
    return this.httpClient.get<Enmployee[]>(`${this.baseUrl}`)
  }
}
