import { Component, OnInit } from '@angular/core';
import { OptionsService } from 'src/app/core/services/options.service';

@Component({
  selector: 'app-sgc-iso',
  templateUrl: './sgc-iso.component.html',
  styleUrls: ['./sgc-iso.component.scss']
})
export class SgcIsoComponent implements OnInit {

  userLoguer: boolean = false;
  constructor(private serviceoption: OptionsService) { }

  ngOnInit(): void {
    if(localStorage.getItem('userlog')){
      this.userLoguer = true;
    }
  }

  setIdOption(id:string){
    this.serviceoption.setOption(id);
  }

}
