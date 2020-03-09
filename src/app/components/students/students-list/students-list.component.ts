import { StudentI } from './../student.interface';
import { Component, OnInit } from '@angular/core';
import { StuServiceService } from '../stu-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.sass'],
  providers: [StuServiceService]
})
export class StudentsListComponent implements OnInit {

  constructor(private stuServ: StuServiceService) { }

  students$: Observable<StudentI[]>;

  ngOnInit() {
    this.students$ = this.stuServ.getStudents();



    this.stuServ.getStudents().subscribe(res => console.log(res));
  }

}
