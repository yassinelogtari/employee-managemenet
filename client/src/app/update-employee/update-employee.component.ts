import { Component } from '@angular/core';
import { Enmployee } from '../enmployee';
import { EmployeeService } from '../service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent {

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
