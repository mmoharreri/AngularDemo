import { Injectable} from "@angular/core";
import { IEmployee } from "./employee";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';
//import 'rxjs/add/operator/toPromise';


@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  constructor(private _http: HttpClient) {

  }
  getEmployees(): Observable<IEmployee[]> {
    return this._http.get<IEmployee[]>('https://localhost:44327/api/Employee');
  }
  getEmployeesByCode(empCode:string): Observable<IEmployee> {
    return this._http.get<IEmployee>('https://localhost:44327/api/Employee/' + empCode).pipe(catchError(this.handleError));
  }

  //getEmployeesByCode(empCode: string): Promise<IEmployee> {
  //  return this._http.get<IEmployee>('https://localhost:44327/api/Employee/' + empCode).toPromise();
  //}
  //handlePromiseError(error: Response) {
  //   throw(error);
  //}
  handleError(error: Response) {
     return Observable.throw(error);
  }
}
