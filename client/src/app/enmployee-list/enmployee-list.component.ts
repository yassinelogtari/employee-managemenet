import { Component, OnInit } from '@angular/core';
import { Enmployee } from '../enmployee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-enmployee-list',
  templateUrl: './enmployee-list.component.html',
  styleUrl: './enmployee-list.component.css',
})
export class EnmployeeListComponent implements OnInit {
  employees: Enmployee[];

  constructor(
    private employeeService : EmployeeService
  ) {}

  ngOnInit(): void {
    
    this.getEmployees()

  }
  getEmployees() {
    this.employeeService.getEmployeesList().subscribe(data=>{
      console.log(data)
    this.employees=data
      
    })
  }
}
