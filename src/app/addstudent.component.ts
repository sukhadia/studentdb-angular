import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-student',
  templateUrl: './addstudent.component.html'
})
export class AddStudentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('In AddStudent...');
  }

}
