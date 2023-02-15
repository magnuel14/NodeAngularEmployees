import { Employee } from './../../models/employee';
import { EmployeeService } from './../../services/employee.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  
  name= new FormControl('');
  cedula= new FormControl('');
  position= new FormControl('');
  office= new FormControl('');
  salary= new FormControl('');
  constructor(public employeeService: EmployeeService) {
    this.name.addValidators([Validators.required,Validators.minLength(3),Validators.maxLength(100)]);
    this.cedula.addValidators([Validators.required]);
    this.position.addValidators([Validators.required]);
    this.office.addValidators([Validators.required]);
    this.salary.addValidators([Validators.required]);
  }

  ngOnInit() :void {
    this.getEmployees();

  }


  resetForm(form: NgForm) {
    form.reset();
  }
  getEmployees() {
    this.employeeService.getEmployees().subscribe(
      res => {
        this.employeeService.employees = res;
      },
      err => console.error(err)
    )
  }
  createEmployee(form: NgForm) {
    if (form.value._id) {
      this.employeeService.updateEmployee(form.value).subscribe(
        res => {
          this.getEmployees()
          form.reset();
        },
        err => console.error(err)
      )
    }
    else {
      this.employeeService.createEmployee(form.value).subscribe(
        res => {
          this.getEmployees()
          form.reset();
        },
        err => console.error(err)
      )
    }
  }
  deleteEmployee(id: string) {
    if (confirm('Are you sure to want to delete it?')) {
      this.employeeService.deleteEmployee(id).
        subscribe(
          res => {
            this.getEmployees()

          },
          err => console.error(err)

        )
    }
  }
  editEmployee(employee: Employee) {
    this.employeeService.selectedEmployee = employee;
  }
  searchEmployee(cedula: string, form: NgForm) {
    //console.log(form.value)
    this.employeeService.getEmployeeByCedula(cedula).subscribe(
      res => {
        //console.log(res);
        this.employeeService.employee = res;
        form.reset();
      },
      err => console.error(err)
    )
  }

}
