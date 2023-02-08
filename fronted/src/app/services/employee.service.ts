import { Employee } from './../models/employee';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  URL_API = 'http://localhost:4000/api/employes';
  URL_Search = '/users'

  selectedEmployee: Employee = {
    name: '',
    cedula: '',
    office: '',
    position: '',
    salary: 0
  };
  employees!: Employee[];
  employee!: Employee[];


  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get<Employee[]>(this.URL_API);

  }
  createEmployee(employee: Employee) {
    return this.http.post(this.URL_API, employee);
  }
  updateEmployee(employee: Employee) {
    return this.http.put(`${this.URL_API}/${employee._id}`, employee);
  }
  deleteEmployee(_id: string) {
    return this.http.delete(`${this.URL_API}/${_id}`);
  }
  getEmployeeByCedula(cedula: string) {
    return this.http.get<Employee[]>(`${this.URL_API}${this.URL_Search}/${cedula}`);
  }

}
