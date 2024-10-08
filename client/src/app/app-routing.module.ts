import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnmployeeListComponent } from './enmployee-list/enmployee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  { path: 'employees', component: EnmployeeListComponent },
  { path:'createEmployee',component: CreateEmployeeComponent},
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  { path: 'updateEmployee/:id', component: UpdateEmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
