import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-meta-indicator',
  templateUrl: './meta-indicator.component.html',
  styleUrls: ['./meta-indicator.component.scss']
})
export class MetaIndicatorComponent implements OnInit {

  @Output() onSave: EventEmitter<any> = new EventEmitter();
  @Output() onNext: EventEmitter<boolean> = new EventEmitter();
  formMeta: FormGroup;

  constructor(private builder: FormBuilder) { 
    this.formMeta = this.builder.group({
      baseLine: ['', Validators.required],
      optimo: ['', Validators.required],
      tolerant: ['', Validators.required],
      deficient: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  save(){
   console.log('formMeta',this.formMeta.value);
   this.onSave.emit(this.formMeta.value);
  }

  next(){
    this.onNext.emit(true);
  }
}
