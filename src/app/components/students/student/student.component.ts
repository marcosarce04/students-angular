import { Component, OnInit, Input } from '@angular/core';

import { StudentI } from './../student.interface';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.sass']
})
export class StudentComponent implements OnInit {
  @Input() student: StudentI;
  constructor() { }

  ngOnInit() {
  }

}
