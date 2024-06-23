import { Component, OnInit } from '@angular/core';
import { Enmployee } from '../enmployee';
import { EmployeeService } from '../service/employee.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css',
})
export class CreateEmployeeComponent {
  employee: Enmployee = new Enmployee();

  constructor(private employeeService: EmployeeService,
    private router:Router
  ) {}


  saveEmployee() {
    this.employeeService.addEmployee(this.employee).subscribe({
      next: (data) => {
        this.goToEmployeeList();
        console.log(data);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
  
  goToEmployeeList(){
    this.router.navigate(['employees'])
  }
  onSubmit() {
    this.saveEmployee()
  }
}
