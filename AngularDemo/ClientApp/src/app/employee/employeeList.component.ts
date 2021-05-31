import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';
import { ToastrService } from 'ngx-toastr';
import { UserPreferenceService } from './userPreference.service';

@Component({
  selector: 'list-employee',
  templateUrl: './employeeList.component.html',
})

export class EmployeeListComponent implements OnInit {
  employees: IEmployee[];
  userText: string = 'Maryam';

  selectedEmployeeCountRadioButton: string = "All";
  statusMessage: string = "Loading data.Please wait...";

  constructor(private _employeeService: EmployeeService
    , private _toastr: ToastrService
    , private _userPreferenceService: UserPreferenceService
  ) {
  }
  get colour(): string {
    return this._userPreferenceService.colourPreference;
  }
  set colour(value: string) {
    this._userPreferenceService.colourPreference = value;
  }
  ngOnInit(): void {
    this._employeeService.getEmployees().subscribe(
    result => {
      this.employees = result;
      this._toastr.success('Success');
      }, error => {
        this.statusMessage = "Problem with Service. Please try again later.";
        console.error(error);
      });
    }

  //getEmployees(): void {
  //  this.employees = [
  //    { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 75000, dateOfBirth: '6/25/1956' },
  //    { code: 'emp102', name: 'Maryam', gender: 'Female', annualSalary: 65000, dateOfBirth: '5/20/1983' },
  //    { code: 'emp103', name: 'Shaham', gender: 'Male', annualSalary: 63000, dateOfBirth: '10/27/2002' },
  //    { code: 'emp104', name: 'Simel', gender: 'Male', annualSalary: 65000, dateOfBirth: '1/29/2016' }
  //  ];
  //}

  trackByEmployeeCode(index: number, employee: any): string {
    return employee.code;
  }

  getTotalEmployeesCount(): number {
    return this.employees.length;
  }

  getMaleEmployeesCount(): number {
    return this.employees.filter(e => e.gender==="Male").length;
  }

  getFemaleEmployeesCount(): number {
    return this.employees.filter(e => e.gender === "Female").length;
  }

  onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
    this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
  }
}
