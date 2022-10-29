import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-general-report',
  templateUrl: './general-report.component.html',
  styleUrls: ['./general-report.component.scss']
})
export class GeneralReportComponent implements OnInit {


  urlDoc: string;
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
     this.urlDoc = this.router.snapshot.paramMap.get('https://scr.sunarp.gob.pe/repositorio/publicaciones/compendios-registrales/libro%20comentarios.pdf');
  }


}
