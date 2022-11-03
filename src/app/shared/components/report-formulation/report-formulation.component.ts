import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-formulation',
  templateUrl: './report-formulation.component.html',
  styleUrls: ['./report-formulation.component.scss']
})
export class ReportFormulationComponent implements OnInit {

  @Input() indicators: any = {};
  @Input() medition: any = {};
  @Input() metas:any = {};
  @Input() reportsResults;

  constructor() { }

  ngOnInit(): void {
  }

}
