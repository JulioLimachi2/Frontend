import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-revision-approval',
  templateUrl: './revision-approval.component.html',
  styleUrls: ['./revision-approval.component.scss']
})
export class RevisionApprovalComponent implements OnInit {

  @Output() onNext: EventEmitter<boolean> = new EventEmitter();
  formRevision: FormGroup;

  constructor(private builder: FormBuilder) {
    this.formRevision = this.builder.group({
      elaborated: ['', Validators.required],
      revision: ['', Validators.required],
      approved: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  save() {

  }

  next() {
    this.onNext.emit(true);
  }

}
