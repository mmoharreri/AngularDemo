import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './employee.service';
import { ToastrService } from 'ngx-toastr';
import { delay, retry, retryWhen, scan, concatMap } from 'rxjs/operators';
import { of, Subscription, throwError } from 'rxjs';
export const retryCount = 5;
export const retryWaitMilliSeconds = 1000;

@Component({
  selector: 'employee',
  templateUrl: './employee.component.html'
})
export class EmployeeComponent implements OnInit {
  statusMessage: string = "Loading data.Please wait...";

  constructor(private _employeeService: EmployeeService
    , private _activatedRoute: ActivatedRoute
    , private _toastr: ToastrService
    , private _router: Router  )
  {
  }

  onBackButtonClick(): void {
    this._router.navigate(['/employees']);
  }

  onCancelButtonClick(): void {
    this.statusMessage = 'Request Cancelled';
    this.subscription.unsubscribe();
  }

  employee: IEmployee;
  subscription: Subscription;

  ngOnInit() {
    let empCode: string = this._activatedRoute.snapshot.params['code'];

    this.subscription = this._employeeService.getEmployeesByCode(empCode).pipe(
      retryWhen(err => err.pipe(concatMap((error, count) => {
          if (count <= retryCount) {
            return of(error);
          }
          return throwError(error);
        }),
        delay(retryWaitMilliSeconds)
      )
    ))
      .subscribe(
        result => {
        if (result === null) {
          this.statusMessage = 'Employee with the specified code does not exist';
          this._toastr.error(this.statusMessage);
          } else this.employee = result;
      },
        error => {
          this.statusMessage = "Problem with Service. Please try again later.";
          this._toastr.error(error.message, this.statusMessage);
        }
        );
  }

    //this._employeeService.getEmployeesByCode(empCode).then(
    //  result => {
    //    if (result === null) {
    //      this.statusMessage = 'Employee with the specified code does not exist';
    //      this._toastr.error(this.statusMessage);
    //    }
    //    else this.employee = result;
    //  }
    //).catch(error => {
    //  this.statusMessage = "Problem with Service. Please try again later.";
    //  this._toastr.error(error.message, this.statusMessage);
    //});
    //}

  pageHeader: string = "Employee Details";
  //firstName: string = 'Tom';
  //lastName: string = 'Hanks';
  //gender: string = 'Male';
  //age: number = 64;
  //name: string = 'Tom';
}
