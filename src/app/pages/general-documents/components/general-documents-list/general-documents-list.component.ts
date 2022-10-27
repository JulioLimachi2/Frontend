import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-general-documents-list',
  templateUrl: './general-documents-list.component.html',
  styleUrls: ['./general-documents-list.component.scss']
})
export class GeneralDocumentsListComponent implements OnInit {

  urlDoc: string;
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
     this.urlDoc = this.router.snapshot.paramMap.get('url');
  }

}
