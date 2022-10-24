import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-options-gestion',
  templateUrl: './options-gestion.component.html',
  styleUrls: ['./options-gestion.component.scss']
})
export class OptionsGestionComponent implements OnInit {

  @Output() onSelectedOption: EventEmitter<any> = new EventEmitter();
  secondMenu: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  selectOption(id:number) {
    this.onSelectedOption.emit(id);
  }

}
