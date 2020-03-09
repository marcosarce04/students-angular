import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentI } from './student.interface';
import { Observable } from 'rxjs';

@Injectable()
export class StuServiceService {

  constructor(private http: HttpClient) {}

  urlApi= 'https://students-0-1.herokuapp.com/students';

  getStudents(): Observable<StudentI[]> {
    return this.http.get<StudentI[]>(this.urlApi);
  }
   
}
