import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-edit',
  templateUrl: './table-edit.component.html',
  styleUrls: ['./table-edit.component.css']
})
export class TableEditComponent {
  @Input() tableHeader = [];
  @Input() tableData = [];
  @Input() title = 'Table';
  @Input() name = 'Nombre';
  result = [{id:1, Name: 'Per'}, {id:2, Name: 'Result'}]
  addName = '';
  
  constructor() { }

  onAddStudent() {
    this.tableData.push({
      studentId: 3,
      studentName: "Jaya",
      class: 1,
      marks: ""
    });
  }

  onRemoveStubent(id: number) {
    this.tableData = this.tableData.filter(res => res.studentId !== id);
  }

  addCol() {
    console.log(this.addName)
    if (this.addName !== "") {
      this.tableData.map(res => {
        res[this.addName] = '';
      });
      this.tableHeader.push({
        id: 4,
        title: this.addName,
        name: this.addName,
        placeholder: `Enter the ${this.addName}`,
        type: "number"
      });
    }
  }

}
