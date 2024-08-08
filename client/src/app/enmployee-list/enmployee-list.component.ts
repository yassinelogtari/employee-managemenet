import { Component, OnInit } from '@angular/core';
import { Enmployee } from '../enmployee';
import { EmployeeService } from '../service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enmployee-list',
  templateUrl: './enmployee-list.component.html',
  styleUrl: './enmployee-list.component.css',
})
export class EnmployeeListComponent implements OnInit {

  employees: Enmployee[];

  constructor(
    private employeeService : EmployeeService,
    private router: Router
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
  updateEmployee(id:number){
    this.router.navigate(['updateEmployee',id]);

  }
}
