import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scheme',
  templateUrl: './scheme.component.html',
  styleUrls: ['./scheme.component.scss']
})
export class SchemeComponent implements OnInit {

  @Input() indicators: any = {};
  @Input() medition: any = {};
  @Input() metas:any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
