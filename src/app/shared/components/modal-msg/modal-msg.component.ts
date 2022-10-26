import { Component, Inject, OnInit, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { classNames } from '../../classnames';

export type ButtonType =
  | 'danger'
  | 'success'
  | 'info'
  | 'warning'
  | 'dark';

  export interface datamodal{
    message: string;
    type: ButtonType;
  }

@Component({
  selector: 'app-modal-msg',
  templateUrl: './modal-msg.component.html',
  styleUrls: ['./modal-msg.component.scss']
})
export class ModalMsgComponent implements OnInit {

  @Input() type: ButtonType = 'success';
  private prefixClass = 'modal-msg';

  getClasses(): string {
    return classNames(this.prefixClass, {
      [`${this.prefixClass}--${this.data.type}`]: this.data.type,
    });
  }
  constructor(public dialogRef: MatDialogRef<ModalMsgComponent>,
    @Inject(MAT_DIALOG_DATA) public data: datamodal) { }

  ngOnInit(): void {
    this.type = this.data.type;
  }

}
