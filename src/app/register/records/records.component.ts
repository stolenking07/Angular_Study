import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {

  @Input() List: [];

  constructor() { }

  ngOnInit() {
    console.log('This is the Name', this.studentObj);
  }

}
