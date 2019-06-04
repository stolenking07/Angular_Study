import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  studentObj = {
    Name: '',
    Gender: '',
    Age: ''
    };

    studentList = [];
    fnSubmit() {
      let student = {Id: 0, Name: '', Gender: '', Age: ''};
      student.Id = this.studentList.length + 1;
      student.Name = this.studentObj.Name;
      student.Gender = this.studentObj.Gender;
      student.Age = this.studentObj.Age;
      this.studentList.push(student);
      console.log(this.studentList);
    }

  constructor() { }

  ngOnInit() {
  }

}
